import { projects } from "../../../data/projects";

import { ProjectCard } from "./ProjectCard";

export function ProjectList() {
  return (
    <ul className={"#projects"}>
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
