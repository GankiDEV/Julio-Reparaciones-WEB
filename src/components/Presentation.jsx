import style from "@/styles/Presentation.module.css";
import { FaArrowTurnDown } from "react-icons/fa6";

function Presentation() {
  return (
    <header className={style.container} id="inicio">
      <div className={style.textContainer}>
        <h1>Servicio de reparación de electrodomésticos</h1>
        <h2>Todo tipo de equipos multimarca</h2>
        <h2>Mallorca - España</h2>
      </div>
      <div className={style.iconDown}>
        <FaArrowTurnDown />
      </div>
    </header>
  );
}

export default Presentation;
