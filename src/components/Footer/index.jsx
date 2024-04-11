import { user } from "../../data/user";

import { ContactList } from "./ContactList";
import styles from "./style.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2 className={"title md"}>Contato</h2>
        <ContactList />
      </div>

      <p className={"text"}>Todos os direitos reservados - {user}</p>
    </footer>
  );
}
