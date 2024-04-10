export function MenuItem({ url, text }) {
  return (
    <li>
      <a className={"link"} href={url}>
        {text}
      </a>
    </li>
  );
}
