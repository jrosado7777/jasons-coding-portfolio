import './ProjectLinks.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  { original: '/dct_login_1.png', thumbnail: '/dct_login_1.png' },
  { original: '/dct_login_2.png', thumbnail: '/dct_login_2.png' },
  { original: '/dct_questions.png', thumbnail: '/dct_questions.png' },
  { original: '/dct_Sessions.png', thumbnail: '/dct_Sessions.png' },
  { original: '/dct_events.png', thumbnail: '/dct_events.png' },
];

function ProjectLinks() {
  return (
    <section className="projects">
      <h2>More About My Projects</h2>

      <p>
        Over the past few years, I’ve built and contributed to a range of projects spanning federal systems, nonprofit platforms, and commercial business tools. I take pride in crafting thoughtful, efficient solutions with clean code and well-considered UX. Whether I’m leading development alone or contributing to a team, I bring a strong balance of empathy, creativity, and technical rigor.
      </p>

      <h3>🛡️ DoD Contractor - Stratagem Group</h3>
      <div className="image-float-right">
        <img src="/NRO.png" alt="NRO interface mockup" />
      </div>
      <p>
        I worked on a mission-critical government application built with a microservices architecture. My contributions included everything from backend Java development using Spring Boot and JPA, to frontend enhancements in React, data display logic, testing automation, and systems engineering. I created REST endpoints, improved caching performance by replacing Guava with Redis, and implemented custom export/reporting features with formatted CSVs.
      </p>

      <div className="image-float-left">
        <img src="/satellite_launch.jpg" alt="Satellite launch photo" />
      </div>
      <p>
        I was also responsible for managing Dockerized environments with Postgres, RabbitMQ, and PostgREST, testing backend functionality via Swagger/Postman, and maintaining Helm charts for internal deployment to ArgoCD-managed cloud environments. Beyond development, I onboarded and mentored new team members, authored internal documentation, and led simulations of secure message workflows using XML and certificate-based auth.
      </p>
      <p>
        Later, I took on additional systems engineering responsibilities, where I gained a broader view of how software integrates with acquisition documents and system-wide architecture. I contributed to conversations around user permissions, thread documentation, and how services communicate across domains. This experience gave me deep insight into how large-scale technical systems are structured and maintained.
      </p>

      <h3>🌍 Global Nonprofit - Every Home</h3>
      <p>
        At Every Home, I served as the sole developer for a cross-functional poling application currently used around the world. The web app allowed users to create questions during live events and pole participants for responses in real time. The project leveraged AWS AppSync, DynamoDB, Lambda, Cognito, and Amplify, all of which I learned and implemented independently under tight deadlines. I built the full backend architecture, defined the database schema, and wired up authentication, real-time querying, and secure data routing using IAM roles.
      </p>
      <ImageGallery items={images} />
      {/* <div className="project-gallery">
        <div className="project-row">
          <img src="/dct_login_1.png" alt="Login screen" className="project-image" />
          <img src="/dct_login_2.png" alt="Alternate login UI" className="project-image" />
        </div>
        <div className="project-row">
          <img src="/dct_questions.png" alt="Live questions screen" className="project-image" />
          <img src="/dct_Sessions.png" alt="Session management UI" className="project-image" />
          <img src="/dct_events.png" alt="Event dashboard" className="project-image" />
        </div>
      </div> */}
      <p>On the frontend, I created a clean, responsive interface that supported multiple user roles, flexible pacing, and full CRUD operations for creating structured conversation flows. The system supported high-availability zones around the globe and I personally optimized latency by managing regional DynamoDB table duplication.</p>
      <p>
        Other projects I've worked on include utilizing AWS Lambda for displaying business intelligence dashboards, hosted and protected via CloudFront, WAF, and CodePipeline. I've also worked on legacy PHP applications, an Apple Vision Pro app, and dabbled in phone app development with React Native.
      </p>
      <p>
        These project were especially meaningful as I was simultaneously managing full-stack development, onboarding stakeholders, and handling GitHub/CI/CD setup at tandhe org level. I balanced heavy responsibilities while maintaining clear communication, identifying risks early, and delivering features incrementally and transparently. 
      </p>

      <br></br>

      <p>
        Altogether, these projects represent a cross-section of what I love most: building meaningful tools that help people, whether through scalable architecture, clean design, or thoughtful user experiences.
      </p>
    </section>
  );
}

export default ProjectLinks;
