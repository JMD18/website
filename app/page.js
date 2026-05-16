import Header from './components/Header';
import Phoenix3D from './components/Phoenix3D';
import { HomeSection, ExperienceSection, EducationSection, SkillsSection, ProjectsSection } from './components/Sections';
import Socials from './components/Socials';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Phoenix3D />/ */}
      <Header />
      <div className={styles.container}>
        <div className={styles.mainMiddle}>
          <HomeSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <Socials />
        </div>
      </div>
      <footer className={styles.footer}>
        <p>
          &copy; 2025-2026 Joshua Daugherty | All rights reserved |{' '}
          <a href="mailto:JoshMD00@gmail.com">Contact me!</a>
        </p>
      </footer>
    </div>
  );
}
