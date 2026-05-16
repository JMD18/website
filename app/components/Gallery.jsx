'use client';

import { useState } from 'react';
import styles from './Gallery.module.css';

const galleryImages = [
  { src: '/img/gallery/akshar_grad.jpg', caption: 'Undergraduate Graduation w/ Akshar' },
  { src: '/img/gallery/antelope_island.jpg', caption: 'Antelope Island' },
  { src: '/img/gallery/CGI.jpg', caption: 'CGI Runner-Up Group (Jay, Mitchell, Jayden, and I)' },
  { src: '/img/gallery/coal1.jpg', caption: 'Mr. Charcoal' },
  { src: '/img/gallery/coal2.jpg', caption: 'Charcoal again :D' },
  { src: '/img/gallery/coal_green.jpg', caption: 'Such a lovely green' },
  { src: '/img/gallery/DTF.jpg', caption: '鼎泰豐 (Din Tai Fung) in Taipei' },
  { src: '/img/gallery/grandcanyon.jpeg', caption: 'Visit to the Grand Canyon' },
  { src: '/img/gallery/jill.jpg', caption: "Jillian's (sister) graduation!" },
  { src: '/img/gallery/jiufen.jpg', caption: '九份 (Jiufen) Old Street, Taiwan' },
  { src: '/img/gallery/river.png', caption: 'River selfie near Vail, Colorado' },
  { src: '/img/gallery/SF.jpg', caption: 'San Francisco w/ friends' },
  { src: '/img/gallery/snorkel.jpg', caption: 'Snorkeling in Hawaii' },
  { src: '/img/gallery/snow_river.jpg', caption: 'Candid river photo' },
  { src: '/img/gallery/spaceify.jpg', caption: 'Drafting Spaceify, another of our hackathon projects' },
  { src: '/img/gallery/st.jpg', caption: 'Jay and I at SlossTECH in Birmingham, AL (2024)' },
  { src: '/img/gallery/vic.jpg', caption: 'Victoria and I celebrating my birthday from a rooftop bar in Bham' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  const enlargeImage = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className={styles.galleryContainer}>
      <h3 className={styles.title}>A little insight into my life...</h3>
      <div className={styles.gallery}>
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.caption}
            className={`${styles.galleryImage} ${selectedImage === index ? styles.selected : ''}`}
            onClick={() => enlargeImage(index)}
            title={image.caption}
          />
        ))}
      </div>
      <div className={styles.enlargedImageContainer}>
        <img
          src={galleryImages[selectedImage].src}
          alt={galleryImages[selectedImage].caption}
          className={styles.enlargedImage}
        />
        <div className={styles.caption}>{galleryImages[selectedImage].caption}</div>
      </div>
    </div>
  );
}
