import logo from "../../assets/logo.svg";
import { Link } from "../fragments/Link";

import { Menu } from "./Menu";

export function Header() {
  return (
    <header>
      <img src={logo} alt={"Logo do Portfólio"} />
      <Menu />
      <Link url={"#contact"}>Contato</Link>
    </header>
  );
}
