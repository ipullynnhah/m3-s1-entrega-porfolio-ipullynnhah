import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function TemplatePage({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
