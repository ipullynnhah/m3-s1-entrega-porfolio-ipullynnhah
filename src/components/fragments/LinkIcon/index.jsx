import styles from "./style.module.css";

export function LinkIcon({ icon, url, name }) {
  return (
    <a className={styles.linkIcon} href={url} target={"_blank"}>
      <img src={icon} alt={name} />
    </a>
  );
}
