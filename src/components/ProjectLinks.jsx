function ProjectLinks() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <p>
        Over the past few years, I’ve built and contributed to a range of projects spanning federal systems, nonprofit platforms, and commercial business tools. I take pride in crafting thoughtful, efficient solutions with clean code and well-considered UX. Whether I’m leading development alone or contributing to a team, I bring a strong balance of empathy, creativity, and technical rigor.
      </p>

      <h3>🛡️ DoD Contractor — Stratagem Group</h3>
      <p>
        I worked on a mission-critical government application built with a microservices architecture. My contributions included everything from backend Java development using Spring Boot and JPA, to frontend enhancements in React, data display logic, testing automation, and systems engineering. I created REST endpoints, improved caching performance by replacing Guava with Redis, and implemented custom export/reporting features with formatted CSVs.
      </p>
      <p>
        I was also responsible for managing Dockerized environments with Postgres, RabbitMQ, and PostgREST, testing backend functionality via Swagger/Postman, and maintaining Helm charts for internal deployment to ArgoCD-managed cloud environments. Beyond development, I onboarded and mentored new team members, authored internal documentation, and led simulations of secure message workflows using XML and certificate-based auth.
      </p>
      <p>
        Later, I transitioned into a systems engineering role, where I gained a broader view of how software integrates with acquisition documents and system-wide architecture. I contributed to conversations around user permissions, thread documentation, and how services communicate across domains. This experience gave me deep insight into how large-scale technical systems are structured and maintained.
      </p>

      <h3>🌍 Global Nonprofit — Every Home</h3>
      <p>
        At Every Home, I served as the sole developer for a cross-functional application used by facilitators around the world. The project leveraged AWS AppSync, DynamoDB, Lambda, Cognito, and Amplify — all of which I learned and implemented independently under tight deadlines. I built the full backend architecture, defined the database schema, and wired up authentication, real-time querying, and secure data routing using IAM roles.
      </p>
      <p>
        On the frontend, I created a clean, responsive interface that supported multiple user roles, flexible pacing, and full CRUD operations for creating structured conversation flows. I designed the entire conversation logic and implemented data aggregation for business intelligence dashboards, which were hosted and protected via CloudFront, WAF, and CodePipeline. The system supported high-availability zones around the globe and I personally optimized latency by managing regional DynamoDB table duplication.
      </p>
      <p>
        This project was especially meaningful as I was simultaneously managing full-stack development, onboarding stakeholders, handling GitHub/CI/CD setup at the org level, and preparing for my own wedding. I balanced heavy responsibilities while maintaining clear communication, identifying risks early, and delivering features incrementally and transparently. The app has since been used successfully across multiple countries by teams who facilitate life-changing conversations.
      </p>

      {/* <h3>🎥 Commercial Work — Production Studio of Colorado LLC</h3>
      <p>
        In my creative business, I’ve built several websites for real estate agents and small businesses. I capture high-quality photos and videos, design branding elements, and build fully functional sites that are responsive, fast, and SEO-optimized. My clients value my ability to provide fast turnarounds and intuitive user experiences that represent their work with professionalism.
      </p>
      <p>
        This experience has helped me stay grounded in user-centric design while applying my technical skillset in client-facing settings. I’ve managed everything from domains and deployment to creative direction and CMS integration — giving me a versatile skill set in both software and media production.
      </p> */}

      <p>
        Altogether, these projects represent a cross-section of what I love most: building meaningful tools that help people, whether through scalable architecture, clean design, or thoughtful user experiences.
      </p>
    </section>
  );
}

export default ProjectLinks;
