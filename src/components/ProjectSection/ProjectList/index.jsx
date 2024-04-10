import { projects } from "../../../data/projects.js";

import { ProjectCard } from "./ProjectCard";

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
