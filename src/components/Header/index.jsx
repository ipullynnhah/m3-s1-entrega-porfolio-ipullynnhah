import logo from "../../assets/logo.svg";
import { Link } from "../fragments/Link";

import { Menu } from "./Menu";
import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt={"Logo do Portfólio"} />
      <Menu />
      <Link url={"#contact"}>Contato</Link>
    </header>
  );
}
