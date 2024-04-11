import { socialMedias } from "../../../data/socialMedias.js";
import { LinkIcon } from "../../fragments/LinkIcon";

export function ContactList() {
  return (
    <ul id={"contact"}>
      {socialMedias.map(({ id, icon, url, name }) => (
        <LinkIcon key={id} icon={icon} url={url} name={name} />
      ))}
    </ul>
  );
}
