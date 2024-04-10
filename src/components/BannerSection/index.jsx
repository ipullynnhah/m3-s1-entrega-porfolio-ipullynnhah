import banner from "../../assets/banner.svg";
import { username } from "../../data/user";
import { Link } from "../fragments/Link";

import styles from "./style.module.css";

export function BannerSection() {
  return (
    <section className={styles.banner}>
      <div>
        <p className={"text brand"}>{username}</p>
        <h1 className={"title lg"}>Bem vindo ao meu portfólio</h1>
        <p className={"text"}>Uma frase interessante sobre mim</p>
        <Link url={"#about-me"}>Saiba mais</Link>
      </div>
      <img src={banner} alt={"Desenho de um notebook com código solto"} />
    </section>
  );
}
