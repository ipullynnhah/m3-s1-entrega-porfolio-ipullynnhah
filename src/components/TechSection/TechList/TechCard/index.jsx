export function TechCard({ icon, name }) {
  return (
    <li>
      <img src={icon} alt={name} />
      <p>
        <strong>{name}</strong>
      </p>
    </li>
  );
}
