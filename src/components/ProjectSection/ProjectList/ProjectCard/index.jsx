import githubIcon from "../../../../assets/github-icon-white.svg";
import { LinkIcon } from "../../../fragments/LinkIcon";

export function ProjectCard({ name, link, repo, description }) {
  return (
    <li>
      <div>
        <h3 className={"title sm"}>{name}</h3>
        <LinkIcon name={name} url={repo} icon={githubIcon} />
      </div>
      <p className={"text"}>{description}</p>
      <a href={link}>Saiba mais</a>
    </li>
  );
}
