import style from "@/styles/Experience.module.css";
import {
  FaHandsClapping,
  FaHouseCircleCheck,
  FaRegHourglassHalf,
  FaUserGroup,
} from "react-icons/fa6";
const { container, textInfo, dataContainer, description } = style;
import { useState } from "react";

function Experience() {
  const [anos, setAnos] = useState(7);
  const [clientes, setClientes] = useState(300); // 300
  const [domicilios, setDomicilios] = useState(110);
  const [satisfechos, setSatisfechos] = useState(97);
  const [play, setPlay] = useState(false);

  return (
    <section className={container} id="experiencia">
      <div className={textInfo}>
        <h2>Tenemos una larga experiencia</h2>
        <p>Información actualizada al día de hoy</p>
      </div>

      <div className={dataContainer}>
        <div>
          <FaRegHourglassHalf fontSize={"1.8rem"} />
          <p>+{anos}</p>
          <p>Años</p>
        </div>
        <div>
          <FaUserGroup fontSize={"2rem"} />
          <p>+{clientes}</p>
          <p>Clientes</p>
        </div>
        <div>
          <FaHouseCircleCheck fontSize={"2rem"} />
          <p>+{domicilios}</p>
          <p>Domicilios</p>
        </div>
        <div>
          <FaHandsClapping fontSize={"2rem"} />
          <p>{satisfechos}%</p>
          <p>Satisfechos</p>
        </div>
      </div>
      <p className={description}>
        Llevamos varios <span>años</span> en este giro, llevando la{" "}
        <span>experiencia</span>, el trato y el buen hacer a los hogares. Mi
        compromiso con la excelencia en el cuidado de tus{" "}
        <span>electrodomésticos</span> es prioridad en nuestro negocio.
      </p>
    </section>
  );
}

export default Experience;
