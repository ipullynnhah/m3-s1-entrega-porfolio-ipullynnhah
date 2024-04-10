import logo from "../../assets/logo.svg";
import { Button } from "../fragments/Button";

import { Menu } from "./Menu";

export function Header() {
  return (
    <header>
      <img src={logo} alt={"Logo do Portfólio"} />
      <Menu />
      <Button url={"#contact"}>Contato</Button>
    </header>
  );
}
