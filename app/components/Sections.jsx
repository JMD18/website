import styles from './Section.module.css';

export function HomeSection() {
  return (
    <section id="home" className={styles.home}>
      <h1 className={styles.homeTitle}>Joshua Daugherty</h1>
      <p className={styles.homeSubtitle}>Software Engineer & Developer</p>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.sectionTitle}>Experience</h2>

      <div className={styles.experience}>
        <div className={styles.projectContent}>
          <a href="https://www.kratosdefense.com/" target="_blank" rel="noopener noreferrer">
          <img src="/img/misc/KTOS.png" className={styles.projectIcon} alt="Kratos SRE" />
          </a>
          <div>
            <a href="https://www.kratosdefense.com/" target="_blank" rel="noopener noreferrer" className={styles.linkText}>
            <h3 className={styles.experienceTitle}>Associate Software Engineer, Kratos SRE, Inc. – Birmingham, AL</h3>  
            </a>
            <p className={styles.projectSubtitle}>Active Security Clearance: Secret</p>
            <ul>
              <li className={styles.listItem}>Nondestructive Solutions Development | UltraSpec</li>
            </ul>
            <p className={styles.description}>
              NDA restrictions - details of this work are limited. Feel free to{' '}
              <a href="mailto:JoshMD00@gmail.com">contact me</a> for more information about my position.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.projectContent}>
          <a href="https://www.celestialifesci.com" target="_blank" rel="noopener noreferrer">
            <img src="/img/misc/celestia_light-cropped.png" className={styles.projectIcon} alt="Celestia Diagnostics" />
          </a>
          <div>
            <h3 className={styles.experienceTitle}>Lead Python Developer, Celestia Diagnostics – Birmingham, AL</h3>
              <ul>
                <li className={styles.listItem}>Sole developer responsible for designing, building, and maintaining a full-scale acquisition and analysis pipeline in production.</li>
              <li className={styles.listItem}>Architect and deploy cloud infrastructure using <span className={styles.boldText}>AWS Lambda, S3, IAM, SQS</span>, and <span className={styles.boldText}>Snowflake</span> for data warehousing and analytics.</li>
              <li className={styles.listItem}>Develop internal <span className={styles.boldText}>GUI applications</span> using a proprietary toolkit to streamline lab workflows and data interaction.</li>
              <li className={styles.listItem}>Build secure, encrypted systems for HIPAA-compliant data storage and transmission across clinical and research teams.</li>
              <li className={styles.listItem}>Build, train, and deploy machine learning pipelines optimized for internal diagnostic and analytics use cases.</li>
              <li className={styles.listItem}>Maintain and evolve multiple Python repositories supporting analysis, backend services, and cross-functional workflows.</li>
            </ul>
          <p className={styles.description}>
            Due to NDA restrictions, details of this work are limited. Please feel free to{' '}
            <a href="mailto:JoshMD00@gmail.com">contact me</a> for more information about my role and contributions.
          </p>
          </div>
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.projectContent}>
          <a href="https://www.uab.edu" target="_blank" rel="noopener noreferrer">
          <img src="/img/misc/UAB-seal.png" className={styles.projectIcon} alt="UAB" />
          </a>
          <div>
          <a href="https://www.uab.edu" target="_blank" rel="noopener noreferrer" className={styles.linkText}>
          <h3 className={styles.experienceTitle}>Graduate Teaching Assistant, Probability & Statistics – University of Alabama at Birmingham</h3>
          </a>
          <ul>
            <li className={styles.listItem}>Teach probability theory and Python programming (NumPy, Matplotlib, and related libraries).</li>
            <li className={styles.listItem}>Assist 200+ students through lectures, office hours, and collaborative instruction.</li>
            <li className={styles.listItem}>Proctor exams, prepare materials, grade assignments, and provide hands-on feedback.</li>
          </ul>
          </div>
      </div>
      </div>
    
      <div className={styles.experience}>
        <div className={styles.projectContent}>
          <a href="https://www.saucey.com" target="_blank" rel="noopener noreferrer">
            <img src="/img/misc/saucey-pin-logo.png" className={styles.projectIcon} alt="Saucey Inc." />
          </a>
          <div>
          <a href="https://www.saucey.com" target="_blank" rel="noopener noreferrer" className={styles.linkText}>
          <h3 className={styles.experienceTitle}>Catalog Specialist, Saucey Inc. – Remote</h3>
          </a>
          <ul>
            <li className={styles.listItem}>Evaluated onboarding inventory for 100+ stores, providing actionable feedback.</li>
            <li className={styles.listItem}>Modified SQL and Bash scripts for automated onboarding and maintenance tasks.</li>
            <li className={styles.listItem}>Performed quality control on store menus and product listings for accuracy.</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className={styles.section}>
      <h2 className={styles.sectionTitle}>Education</h2>

      <div className={styles.project}>
        <div className={styles.projectContent}>
          <img src="/img/misc/UAB-seal.png" className={styles.projectIcon} alt="UAB" />

          <div>
            <h3 className={styles.projectTitle}>
              MS in Computer Science
            </h3>

            <h4 className={styles.projectSubtitle}>
              University of Alabama at Birmingham | 2023–2025
            </h4>

            <ul>
              <li className={styles.listItem}>GPA: 3.9 / 4.0</li>

              <li className={styles.listItem}>
                Relevant Courses: Computer Vision & CNNs, Deep Learning,
                Artificial Intelligence, Advanced Algorithms & Applications,
                Software Engineering, Machine Learning, Database Systems,
                Linear Algebra, Programming Languages, Automata Theory
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectContent}>
          <img src="/img/misc/UAB-seal.png" className={styles.projectIcon} alt="UAB" />

          <div>
            <h3 className={styles.projectTitle}>
              BS in Computer Science
            </h3>

            <h4 className={styles.projectSubtitle}>
              University of Alabama at Birmingham | 2020–2024
            </h4>

            <ul>
              <li className={styles.listItem}>GPA: 3.8 / 4.0</li>
              <li className={styles.listItem}>CS GPA: 4.0 / 4.0</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectContent}>
          <div>
            <h3 className={styles.projectTitle}>Research Papers</h3>

            <div className={styles.pdfGrid}>
              <div className={styles.pdfContainer}>
                <h4 className={styles.pdfTitle}>
                  <a href="/img/misc/DL_WGAN_Paper.pdf" target="_blank" rel="noopener noreferrer">
                    Analyzing Wasserstein Generative Adversarial Networks with Gradient Penalties
                  </a>
                </h4>

                <a href="/img/misc/DL_WGAN_Paper.pdf" target="_blank" rel="noopener noreferrer">
                  <img src="/img/misc/DL_WGAN_Paper-first_page.jpg" className={styles.pdfThumbnail} alt="WGAN Paper" />
                </a>
              </div>

              <div className={styles.pdfContainer}>
                <h4 className={styles.pdfTitle}>
                  <a href="/img/misc/waves_to_pixels_revised.pdf" target="_blank" rel="noopener noreferrer">
                    Waves to Pixels: A Study of Neural Networks in Relation to Audio Encoding for Classification and Diagnosis
                  </a>
                </h4>

                <a href="/img/misc/waves_to_pixels_revised.pdf" target="_blank" rel="noopener noreferrer">
                  <img src="/img/misc/waves_to_pixels_first_page.jpg" className={styles.pdfThumbnail} alt="Waves to Pixels Paper" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.sectionTitle}>Skills</h2>

      {/* Programming (icons only) */}
      <div className={styles.skillsSection}>
        <h3 className={styles.skillsSectionTitle}>Programming</h3>

        <div className={styles.skillsCarousel}>
          <div className={`${styles.skillsTrack} ${styles.programmingTrack}`}>            {/* original set */}
            <article className={styles.skillCard} title="Python">
              <img src="/img/misc/carousel/python.png" alt="Python" />
            </article>

            <article className={styles.skillCard} title="Java">
              <img src="/img/misc/carousel/java.png" alt="Java" />
            </article>

            <article className={styles.skillCard} title="LaTeX">
              <img src="/img/misc/carousel/latex.png" alt="LaTeX" />
            </article>

            <article className={styles.skillCard} title="Bash">
              <img src="/img/misc/carousel/bash.png" alt="Bash" />
            </article>

            <article className={styles.skillCard} title="C++">
              <img src="/img/misc/carousel/cpp.png" alt="C++" />
            </article>

            <article className={styles.skillCard} title="Racket">
              <img src="/img/misc/carousel/racket.png" alt="Racket" />
            </article>

            {/* duplicate set (required for seamless loop) */}
            <article className={styles.skillCard} title="Python">
              <img src="/img/misc/carousel/python.png" alt="Python" />
            </article>

            <article className={styles.skillCard} title="Java">
              <img src="/img/misc/carousel/java.png" alt="Java" />
            </article>

            <article className={styles.skillCard} title="LaTeX">
              <img src="/img/misc/carousel/latex.png" alt="LaTeX" />
            </article>

            <article className={styles.skillCard} title="Bash">
              <img src="/img/misc/carousel/bash.png" alt="Bash" />
            </article>

            <article className={styles.skillCard} title="C++">
              <img src="/img/misc/carousel/cpp.png" alt="C++" />
            </article>

            <article className={styles.skillCard} title="Racket">
              <img src="/img/misc/carousel/racket.png" alt="Racket" />
            </article>
          </div>
        </div>
      </div>

      {/* Software & Tools */}
      <div className={styles.skillsSection}>
        <h3 className={styles.skillsSectionTitle}>Software & Tools</h3>

        <div className={styles.skillsCarousel}>
          <div className={`${styles.skillsTrack} ${styles.toolsTrack}`}>            
            {/* original set */}
            <article className={styles.skillCard} title="Snowflake">
              <img
                src="/img/misc/carousel/snowflake.png"
                alt="Snowflake"
                className={styles.skillCardIcon}
              />
            </article>

            <article className={styles.skillCard} title="AWS">
              <img
                src="/img/misc/carousel/aws.png"
                alt="AWS"
                className={styles.skillCardIcon}
              />
            </article>

            <article className={styles.skillCard} title="Docker">
              <img
                src="/img/misc/carousel/docker.png"
                alt="Docker"
                className={styles.skillCardIcon}
              />
            </article>

            <article className={styles.skillCard} title="Git">
              <img
                src="/img/misc/carousel/git.png"
                alt="Git"
                className={styles.skillCardIcon}
              />
            </article>

            <article className={styles.skillCard} title="VS Code">
              <img
                src="/img/misc/carousel/vs-code.png"
                alt="VS Code"
                className={styles.skillCardIcon}
              />
            </article>
            
            <article className={styles.skillCard} title="Linux">
              <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/misc/carousel/linux.png"
                  alt="Linux"
                  className={styles.skillCardIcon}
                />
              </a>
            </article>

            <article className={styles.skillCard} title="PyTorch">
              <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/misc/carousel/pytorch.png"
                  alt="PyTorch"
                  className={styles.skillCardIcon}
                />
              </a>
            </article>

            <article className={styles.skillCard} title="TensorFlow">
              <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/misc/carousel/tensorflow.png"
                  alt="TensorFlow"
                  className={styles.skillCardIcon}
                />
              </a>
            </article>
            <article className={styles.skillCard} title="Snowflake">
              <img
                src="/img/misc/carousel/snowflake.png"
                alt="Snowflake"
                className={styles.skillCardIcon}
              />
            </article>

            <article className={styles.skillCard} title="AWS">
              <img
                src="/img/misc/carousel/aws.png"
                alt="AWS"
                className={styles.skillCardIcon}
              />
            </article>

            <article className={styles.skillCard} title="Docker">
              <img
                src="/img/misc/carousel/docker.png"
                alt="Docker"
                className={styles.skillCardIcon}
              />
            </article>

            <article className={styles.skillCard} title="Git">
              <img
                src="/img/misc/carousel/git.png"
                alt="Git"
                className={styles.skillCardIcon}
              />
            </article>

            <article className={styles.skillCard} title="VS Code">
              <img
                src="/img/misc/carousel/vs-code.png"
                alt="VS Code"
                className={styles.skillCardIcon}
              />
            </article>
            
            <article className={styles.skillCard} title="Linux">
              <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/misc/carousel/linux.png"
                  alt="Linux"
                  className={styles.skillCardIcon}
                />
              </a>
            </article>

            <article className={styles.skillCard} title="PyTorch">
              <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/misc/carousel/pytorch.png"
                  alt="PyTorch"
                  className={styles.skillCardIcon}
                />
              </a>
            </article>

            <article className={styles.skillCard} title="TensorFlow">
              <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/misc/carousel/tensorflow.png"
                  alt="TensorFlow"
                  className={styles.skillCardIcon}
                />
              </a>
            </article>
          </div>
        </div>
      </div>

      {/* Mathematics */}
      <div className={styles.skillsSection}>
        <h3 className={styles.skillsSectionTitle}>Mathematics</h3>

        <div className={styles.skillsCarousel}>
          <div className={`${styles.skillsTrack} ${styles.mathTrack}`}>
            <article className={styles.skillCard}>
              <span>Linear Algebra</span>
            </article>

            <article className={styles.skillCard}>
              <span>Differential Equations</span>
            </article>

            <article className={styles.skillCard}>
              <span>Advanced Calculus</span>
            </article>

            <article className={styles.skillCard}>
              <span>Probability Theory</span>
            </article>

            <article className={styles.skillCard}>
              <span>Discrete Mathematics</span>
            </article>

            <article className={styles.skillCard}>
              <span>Linear Algebra</span>
            </article>

            <article className={styles.skillCard}>
              <span>Differential Equations</span>
            </article>

            <article className={styles.skillCard}>
              <span>Advanced Calculus</span>
            </article>

            <article className={styles.skillCard}>
              <span>Probability Theory</span>
            </article>

            <article className={styles.skillCard}>
              <span>Discrete Mathematics</span>
            </article>
          
            <article className={styles.skillCard}>
              <span>Linear Algebra</span>
            </article>

            <article className={styles.skillCard}>
              <span>Differential Equations</span>
            </article>

            <article className={styles.skillCard}>
              <span>Advanced Calculus</span>
            </article>

            <article className={styles.skillCard}>
              <span>Probability Theory</span>
            </article>

            <article className={styles.skillCard}>
              <span>Discrete Mathematics</span>
            </article>

            <article className={styles.skillCard}>
              <span>Linear Algebra</span>
            </article>

            <article className={styles.skillCard}>
              <span>Differential Equations</span>
            </article>

            <article className={styles.skillCard}>
              <span>Advanced Calculus</span>
            </article>

            <article className={styles.skillCard}>
              <span>Probability Theory</span>
            </article>

            <article className={styles.skillCard}>
              <span>Discrete Mathematics</span>
            </article>          
          </div>
        </div>
      </div>

    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.project}>
        <div className={styles.projectContent}>
          <img src="/img/misc/nvda.png" className={styles.projectIcon} alt="CUDA-Accelerated Graham Scan" />
          <div>
            <h3 className={styles.projectTitle}>CUDA-Accelerated Graham Scan</h3>
            <h4 className={styles.projectSubtitle}>GPU Programming Project</h4>
            <ul>
              <li className={styles.listItem}>Collaborated in a team of three to implement the Graham Scan algorithm for convex hull detection on point clouds.</li>
              <li className={styles.listItem}>Ported the algorithm to GPU using the CUDA Toolkit, optimizing for memory and parallel execution.</li>
              <li className={styles.listItem}>Rendered graphical output to visualize point clouds and resulting convex hulls; compared CPU and GPU performance.</li>
              <li className={styles.listItem}>Benchmarked performance across data sizes to analyze computational gains from GPU acceleration.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectContent}>
          <img src="/img/misc/recruit.png" className={styles.projectIcon} alt="CGI Application Tracker" />
          <div>
            <h3 className={styles.projectTitle}>CGI Application Tracker</h3>
            <h4 className={styles.projectSubtitle}>UA Innovate Hackathon – 2nd Place Finish</h4>
            <ul>
              <li className={styles.listItem}>Developed a React-based web application with a responsive UI for CGI's recruitment process.</li>
              <li className={styles.listItem}>Built a dual-role authentication system for students and staff, with real-time database integration (MongoDB).</li>
              <li className={styles.listItem}>Integrated OpenAI API to generate resume feedback visible through a clean HR-friendly interface.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectContent}>
          <img src="/img/misc/greenbot.png" className={styles.projectIcon} alt="AI Maze-Solving Bot" />
          <div>
            <h3 className={styles.projectTitle}>AI Maze-Solving Bot</h3>
            <h4 className={styles.projectSubtitle}>Automated Reasoning Course Project</h4>
            <ul>
              <li className={styles.listItem}>Implemented and tuned A* algorithms for dynamic maze solving with real-time visual feedback.</li>
              <li className={styles.listItem}>Led debugging and benchmarking across variable maze sizes and difficulty levels.</li>
              <li className={styles.listItem}>Collaborated in a team to build an adaptable agent with visual debugging tools.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
