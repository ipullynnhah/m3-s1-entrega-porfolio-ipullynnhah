import { technologies } from "../../../data/technologies";

import { TechCard } from "./TechCard";

export function TechList() {
  return (
    <ul className={"#stacks"}>
      {technologies.map(({ id, name, icon }) => (
        <TechCard key={id} name={name} icon={icon} />
      ))}
    </ul>
  );
}
