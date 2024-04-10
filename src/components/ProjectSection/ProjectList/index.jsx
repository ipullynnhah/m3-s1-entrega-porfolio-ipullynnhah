import { projects } from "../../../data/projects";

import { ProjectCard } from "./ProjectCard";

// TODO: need to add #projects to this
export function ProjectList() {
  return (
    <ul>
      {projects.map(({ id, name, link, repo, description }) => (
        <ProjectCard
          key={id}
          name={name}
          link={link}
          repo={repo}
          description={description}
        />
      ))}
    </ul>
  );
}
