import { projects } from "../logic/projects";
import { Project } from "./Project";
export const Projects = () => {
  let delayS = 0;
  return (
    <section id="projects">
      <h2 className="section-title">
        <span>#</span>
        Projects
      </h2>

      <div className="projects_container">
        {projects.map((project) => {
          return (
            <Project
              projectName={project.name}
              description={project.description}
              gitLink={project.github}
              delay={(delayS += 0.3)}
              languages={project.languagesPrograms.map((language) => {
                return <img src={language}></img>;
              })}
              img={project.img}
              liveLink={project.live}></Project>
          );
        })}
      </div>
    </section>
  );
};
