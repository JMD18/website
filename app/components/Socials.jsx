'use client';

import { useState } from 'react';
import styles from './Socials.module.css';

export default function Socials() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/spring_2026_resume.pdf';
    link.download = 'spring_2026_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGalleryOpen = (e) => {
    e.preventDefault();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const width = Math.floor(screenWidth * 0.75);
    const height = Math.floor(screenHeight * 0.75);
    const left = Math.floor((screenWidth - width) / 2);
    const top = Math.floor((screenHeight - height) / 2);

    window.open(`/gallery`, 'gallery', `width=${width},height=${height},top=${top},left=${left}`);
  };

  return (
    <section id="socials" className={styles.wrapper}>
      <div className={styles.socialsContainer}>
        <a
          href="https://github.com/JMD18"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLink} ${styles.GitHub}`}
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/josh-daugherty"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLink} ${styles.Linkedin}`}
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a onClick={handleDownload} className={styles.socialLink} style={{ cursor: 'pointer' }}>
          <i className="fas fa-file-pdf"></i> Download Resume
        </a>
        
        <button
          className={styles.eggButton}
          onClick={handleGalleryOpen}
          title="Gallery - Click for a peek into my life!"
        >
          <img src="/img/misc/camera.png" alt="Gallery" className={styles.eggImage} />
        </button>
      </div>
    </section>
  );
}
