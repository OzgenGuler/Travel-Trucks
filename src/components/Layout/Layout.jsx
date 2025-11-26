import Header from "../Navbar/Banner";
import Css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={Css.app}>
      <Header />
      <main className={Css.main}>{children}</main>
    </div>
  );
}
