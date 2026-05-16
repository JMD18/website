'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Preload } from '@react-three/drei';
import * as THREE from 'three';
import styles from './Phoenix3D.module.css';

// Phoenix Model Component
function PhoenixModel({ onAnimationComplete }) {
  const groupRef = useRef(new THREE.Group());
  const gltf = useGLTF('/models/phoenix.glb');
  const initializedRef = useRef(false);

  // Animation state
  const stateRef = useRef({
    phase: 'flying',
    time: 0,
    targetPos: new THREE.Vector3(0, -1, 0),
  });

  // Add model to group on load
  useEffect(() => {
    if (gltf?.scene && !initializedRef.current) {
      initializedRef.current = true;
      const phoenixClone = gltf.scene.clone();
      
      // Compute bounding box to scale appropriately
      const box = new THREE.Box3().setFromObject(phoenixClone);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2.5 / maxDim; // Scale to fit in viewport
      
      phoenixClone.scale.multiplyScalar(scale);
      phoenixClone.position.y = 2; // Start position
      
      groupRef.current.add(phoenixClone);
    }
  }, [gltf]);

  // Get Kratos icon position in world space
  const getKratosIconWorldPosition = (camera) => {
    const icon = document.querySelector('img[alt="Kratos SRE"]');
    if (!icon) return new THREE.Vector3(0, -2, 0);

    const rect = icon.getBoundingClientRect();
    
    // Convert screen coordinates to NDC
    const ndcX = (rect.left + rect.width / 2) / window.innerWidth * 2 - 1;
    const ndcY = -(rect.top + rect.height / 2) / window.innerHeight * 2 + 1;

    // Convert NDC to world position
    const vector = new THREE.Vector3(ndcX, ndcY, 0.5);
    vector.unproject(camera);
    
    return vector;
  };

  useFrame(({ camera, scene }) => {
    if (!groupRef.current || groupRef.current.children.length === 0) return;

    const phoenix = groupRef.current;
    const t = stateRef.current.time;

    stateRef.current.time += 0.016;

    if (stateRef.current.phase === 'flying') {
      if (t < 4) {
        // Flying phase: circular pattern
        const angle = (t / 4) * Math.PI * 2;
        phoenix.position.x = Math.cos(angle) * 2;
        phoenix.position.y = Math.sin(angle) * 1.5 + 1.5;
        phoenix.position.z = Math.sin(angle * 2) * 0.5;

        phoenix.rotation.y = angle;
        phoenix.rotation.x = Math.sin(angle * 2) * 0.3;

        const scale = 1 + Math.sin(t * 4) * 0.05;
        phoenix.scale.set(scale, scale, scale);

        // Debug logging every 30 frames (~0.5 seconds)
        if (Math.floor(t * 60) % 30 === 0) {
          console.log(`🔥 Phoenix flying - Time: ${t.toFixed(2)}s, Pos: (${phoenix.position.x.toFixed(2)}, ${phoenix.position.y.toFixed(2)}, ${phoenix.position.z.toFixed(2)})`);
        }
      } else {
        // Transition to settling
        console.log('🔥 Phoenix transitioning to settling phase');
        stateRef.current.phase = 'settling';
        stateRef.current.time = 0;

        const kratosPos = getKratosIconWorldPosition(camera);
        stateRef.current.targetPos = kratosPos;
        console.log(`🔥 Target position for settling: (${kratosPos.x.toFixed(2)}, ${kratosPos.y.toFixed(2)}, ${kratosPos.z.toFixed(2)})`);
      }
    } else if (stateRef.current.phase === 'settling') {
      const settlingTime = stateRef.current.time;
      const duration = 2.5;

      if (settlingTime < duration) {
        const progress = settlingTime / duration;
        const easeProgress = progress * progress * (3 - 2 * progress);

        // Move toward target
        phoenix.position.lerp(stateRef.current.targetPos, 0.03);

        phoenix.rotation.y += 0.02;
        phoenix.rotation.x = Math.sin(settlingTime) * 0.2;

        const scale = Math.max(0.1, 1 - easeProgress * 0.8);
        phoenix.scale.set(scale, scale, scale);

        // Fade out
        const opacity = Math.max(0, 1 - easeProgress * 0.7);
        phoenix.traverse((child) => {
          if (child.material) {
            child.material.transparent = true;
            child.material.opacity = opacity;
          }
        });

        // Debug logging every 30 frames
        if (Math.floor(settlingTime * 60) % 30 === 0) {
          console.log(`🔥 Phoenix settling - Time: ${settlingTime.toFixed(2)}s, Pos: (${phoenix.position.x.toFixed(2)}, ${phoenix.position.y.toFixed(2)}, ${phoenix.position.z.toFixed(2)}), Opacity: ${opacity.toFixed(2)}`);
        }
      } else {
        console.log('🔥 Phoenix animation complete');
        stateRef.current.phase = 'complete';
        phoenix.traverse((child) => {
          if (child.material) {
            child.material.dispose();
          }
          if (child.geometry) {
            child.geometry.dispose();
          }
        });
        scene.remove(phoenix);
        if (onAnimationComplete) onAnimationComplete();
      }
    }
  });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      console.log('🔥 Phoenix3D component unmounting');
    };
  }, []);

  return <group ref={groupRef} />;
}

// Lighting component
function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
    </>
  );
}

// Main Phoenix3D Container
export default function Phoenix3D() {
  const containerRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsComplete(true);
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ width: '100%', height: '100%' }}
          onCreated={(state) => {
            state.gl.setClearColor(0x000000, 0);
          }}
        >
          <Lights />
          <PhoenixModel onAnimationComplete={handleAnimationComplete} />
          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  );
}

// Preload the model
useGLTF.preload('/models/phoenix.glb');
