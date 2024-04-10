import { user } from "../../data/user";

import { ContactList } from "./ContactList";

export function Footer() {
  return (
    <footer>
      <div>
        <h2 className={"title md"}>Contato</h2>
        <ContactList />
      </div>

      <p className={"text"}>Todos os direitos reservados - {user}</p>
    </footer>
  );
}
