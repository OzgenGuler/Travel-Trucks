import { useNavigate } from "react-router-dom";
import Css from "./HomePage.module.css";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <section className={Css.hero}>
      <div className={Css.content}>
        <h1 className={Css.title}>Campers of your dreams</h1>
        <p className={Css.subtitle}>
          You can find everything you want in our catalog.
        </p>
        <button className={Css.btn} onClick={handleClick}>
          View Now
        </button>
      </div>
    </section>
  );
}
