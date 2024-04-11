import { projects } from "../../../data/projects";
import styles from "../style.module.css";

import { ProjectCard } from "./ProjectCard";

export function ProjectList() {
  return (
    <ul className={`${styles.projectList} list`}>
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
