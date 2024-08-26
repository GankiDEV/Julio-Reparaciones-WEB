import style from "@/styles/PorqueNosotros.module.css";
import img1 from "@/assets/icons/atention.png";
import img2 from "@/assets/icons/delivery.png";
import img3 from "@/assets/icons/experience.png";
import img4 from "@/assets/icons/prices.png";

import {
  FaDna,
  FaHeadphonesSimple,
  FaHouseFlag,
  FaFilterCircleDollar,
} from "react-icons/fa6";

function PorqueNosotros() {
  return (
    <section id="porquenosotros" className={style.container}>
      <div className={style.title}>
        <h2>No encontrarás mejor servicio.</h2>
        <p>Nuestro servicio de reparaciones no paran de mejorar.</p>
      </div>

      <div className={style.boxes}>
        <div>
          <p>
            Contamos con una larga experiencia la cual se ve aplicada en todas
            las operaciones realizadas.
          </p>
          <img src={img3} alt="experiencia laboral" />
        </div>

        <div>
          <img src={img2} alt="viaje a domicilio" />
          <p>
            No te preocupes, nosotros nos encargamos de llegar a ti, y lo mejor,
            ¡sin costos adicionales!
          </p>
        </div>

        <div>
          <p>
            Damos asistencia técnica en caso de que algun equipo haya fallado en
            su reparación al marcharnos.
          </p>
          <img src={img1} alt="atencion al cliente" />
        </div>

        <div>
          <img src={img4} alt="bolsa de dinero" />
          <p>
            Los mejores precios al márgen de un excelente servicio, nada de
            exageraciones
          </p>
        </div>
      </div>

      <p className={style.text}>
        No te <span>arrepentiras</span> de trabajar con nosotros,{" "}
        <span>carisma</span>,<span>dedicación</span>, <span>compromiso</span> y
        <span>honestidad</span> es lo que nos caracteriza como trabajadores,
        contáctanos y dejanos entrar en acción.
      </p>
    </section>
  );
}

export default PorqueNosotros;
