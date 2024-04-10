import { user } from "../../data/user";

import { ContactList } from "./ContactList";

export function Footer() {
  return (
    <footer>
      <div>
        <h2>Contato</h2>
        <ContactList />
      </div>

      <p>Todos os direitos reservados - {user}</p>
    </footer>
  );
}
