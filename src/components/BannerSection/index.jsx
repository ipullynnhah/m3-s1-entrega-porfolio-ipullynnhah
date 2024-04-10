import banner from "../../assets/banner.svg";
import { username } from "../../data/user.js";
import { Link } from "../fragments/Link";

export function BannerSection() {
  return (
    <section>
      <div>
        <p>{username}</p>
        <h1>Bem vindo ao meu portfólio</h1>
        <p>Uma frase interessante sobre mim</p>
        <Link url={"#about-me"}>Saiba mais</Link>
      </div>
      <img src={banner} alt={"Desenho de um notebook com código solto"} />
    </section>
  );
}
