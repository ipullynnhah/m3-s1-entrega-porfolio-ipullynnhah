// TODO: need to add #contact to this
import { socialMedias } from "../../../data/socialMedias.js";
import { LinkIcon } from "../../fragments/LinkIcon/index.jsx";

export function ContactList() {
  return (
    <ul>
      {socialMedias.map(({ id, icon, url, name }) => (
        <LinkIcon key={id} icon={icon} url={url} name={name} />
      ))}
    </ul>
  );
}
