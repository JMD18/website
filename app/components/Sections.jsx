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
          <img src="/img/misc/KTOS.png" className={styles.projectIcon} alt="Kratos SRE" />
          <div>
            <h3 className={styles.experienceTitle}>Associate Software Engineer, Kratos SRE, Inc. – Birmingham, AL</h3>
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
          <img src="/img/misc/celestia_light-cropped.png" className={styles.projectIcon} alt="Celestia Diagnostics" />
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
          <img src="/img/misc/UAB-seal.png" className={styles.projectIcon} alt="UAB" />
          <div>
          <h3 className={styles.experienceTitle}>Graduate Teaching Assistant, Probability & Statistics – University of Alabama at Birmingham</h3>
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
          <img src="/img/misc/saucey-pin-logo.png" className={styles.projectIcon} alt="Saucey Inc." />
          <div>
          <h3 className={styles.experienceTitle}>Catalog Specialist, Saucey Inc. – Remote</h3>
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

      <div className={styles.project}>
        <div className={styles.projectContent}>
          <div>
            <h3 className={styles.projectTitle}>Programming</h3>

            <p className={styles.skillsText}>
              Python, Java, SQL/PostgreSQL, LaTeX, Bash,
              GDScript, REST APIs, PowerShell
            </p>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectContent}>
          <div>
            <h3 className={styles.projectTitle}>Mathematics</h3>

            <p className={styles.skillsText}>
              Linear Algebra, Differential Equations,
              Advanced Calculus, Probability Theory,
              Discrete Mathematics
            </p>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectContent}>
          <div>
            <h3 className={styles.projectTitle}>Software & Tools</h3>

            <p className={styles.skillsText}>
              AWS (Lambda, S3, EC2, SQS, IAM), Snowflake,
              Docker, Git, Linux, Godot Engine,
              VS Code, IntelliJ, MS Office
            </p>
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
