import { technologies } from "../../../data/technologies.js";

import { TechCard } from "./TechCard";

// TODO: need to add #stacks to this
export function TechList() {
  return (
    <>
      <h3>TechList</h3>
      <ul>
        <TechCard name={technologies[0].name} icon={technologies[0].icon} />
      </ul>
    </>
  );
}
