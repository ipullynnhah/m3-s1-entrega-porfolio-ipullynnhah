import { technologies } from "../../../data/technologies";

import { TechCard } from "./TechCard";

// TODO: need to add #stacks to this
export function TechList() {
  return (
    <div>
      <h3>TechList</h3>
      <ul>
        {technologies.map(({ id, name, icon }) => (
          <TechCard key={id} name={name} icon={icon} />
        ))}
      </ul>
    </div>
  );
}
