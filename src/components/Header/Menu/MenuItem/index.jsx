export function MenuItem({ url, text }) {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
}
