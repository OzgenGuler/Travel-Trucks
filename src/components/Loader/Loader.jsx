import Css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={Css.backdrop}>
      <div className={Css.spinner} />
    </div>
  );
}
