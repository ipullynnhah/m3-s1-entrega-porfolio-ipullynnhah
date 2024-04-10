import { LinkIcon } from "../../../fragments/LinkIcon/index.jsx";
import whatsappIcon from "../../../../assets/whatsapp-icon.svg";

export function ProjectCard() {
  return (
    <div>
      <LinkIcon name={"WhatsApp"} url={"https://wa.me"} icon={whatsappIcon} />
    </div>
  );
}
