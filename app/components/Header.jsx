'use client';

import styles from './Header.module.css';

export default function Header() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - 80, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={styles.navLink}>
          Home
        </a>
        <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className={styles.navLink}>
          Experience
        </a>
        <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className={styles.navLink}>
          School
        </a>
        <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className={styles.navLink}>
          Skills
        </a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={styles.navLink}>
          Projects
        </a>
        <a href="#socials" onClick={(e) => handleNavClick(e, 'socials')} className={styles.navLink}>
          Contact
        </a>
      </nav>
    </header>
  );
}
