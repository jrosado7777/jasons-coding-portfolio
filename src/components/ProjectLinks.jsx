function ProjectLinks() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <p>
        As the sole developer for a global nonprofit, I built a full-stack web application using AWS AppSync, Lambda, DynamoDB, Cognito, and Amplify. The app included dynamic conversation flows, secure user logins, and BI dashboards across international availability zones. I also deployed infrastructure with CodePipeline, CloudFront, and WAF to protect internal data.
      </p>

      <p>
        During my time as a DoD contractor, I worked on a mission-critical microservices-based system. I maintained frontend React components, optimized performance with Redis caching, built REST endpoints in Java with Spring Boot, and managed Postgres and RabbitMQ within Docker environments. I also trained new employees, led test coverage with RTL/Cypress, and contributed to permission systems, data grids, and cloud deployments.
      </p>

      <p>
        As the founder of Production Studio of Colorado LLC, I designed and maintained websites for real estate clients — capturing media, updating content, and ensuring quick delivery under client deadlines.
      </p>

      {/* <div className="card-grid">
        <a className="project-card" href="https://productionstudioofcolorado.com" target="_blank" rel="noopener noreferrer">
          <h3>Video Portfolio Site</h3>
          <p>My side business's website, Production Studio of Colorado LLC</p>
        </a>
        <a className="project-card" href="https://gofastigotta.com" target="_blank" rel="noopener noreferrer">
          <h3>Music Portfolio</h3>
          <p>My music portfolio, featuring remixes and original songs.</p>
        </a>
      </div> */}
    </section>
  );
}

export default ProjectLinks;
