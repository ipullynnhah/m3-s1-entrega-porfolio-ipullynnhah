import styles from "./style.module.css";

export function Link({ url, children }) {
  return (
    <a className={`link ${styles.linkBtn}`} href={url}>
      {children}
    </a>
  );
}
