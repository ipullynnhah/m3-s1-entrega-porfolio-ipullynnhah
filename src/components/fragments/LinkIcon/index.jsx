export function LinkIcon({ icon, url, name }) {
  return (
    <a href={url} target={"_blank"}>
      <img src={icon} alt={name} />
    </a>
  );
}
