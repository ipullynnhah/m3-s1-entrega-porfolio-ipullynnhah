import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import styles from "./style.module.css";

export function TemplatePage({ children }) {
  return (
    <div className={styles.page}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
