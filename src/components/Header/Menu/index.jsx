import { MenuItem } from "./MenuItem/index.jsx";

export function Menu() {
  const menu = [
    { id: 1, url: "#about-me", text: "Sobre" },
    { id: 2, url: "#stack", text: "Stack" },
    { id: 3, url: "#projects", text: "Projetos" }
  ];

  return (
    <ul>
      {menu.map(({ id, url, text }) => (
        <MenuItem key={id} url={url} text={text} />
      ))}
    </ul>
  );
}
