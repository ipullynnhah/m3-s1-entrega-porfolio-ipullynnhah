import { ProjectCard } from "./ProjectCard";
import { projects } from "../../../data/projects.js"; // TODO: need to add #projects to this

// TODO: need to add #projects to this
export function ProjectList() {
  return (
    <ul>
      <ProjectCard
        name={projects[0].name}
        link={projects[0].link}
        repo={projects[0].repo}
        description={projects[0].description}
      />
    </ul>
  );
}
