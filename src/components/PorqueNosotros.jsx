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
        <p>Mejoramos cada vez más.</p>
      </div>

      <div className={style.boxes}>
        <div>
          <p>Contamos con equipamento de calidad</p>
          <img src={img3} alt="experiencia laboral" />
        </div>

        <div>
          <img src={img2} alt="viaje a domicilio" />
          <p>Sin pago por desplazamiento</p>
        </div>

        <div>
          <p>Servicio abierto las 24 horas</p>
          <img src={img1} alt="atencion al cliente" />
        </div>

        <div>
          <img src={img4} alt="bolsa de dinero" />
          <p>Sin precios exagerados, todo como se debe</p>
        </div>
      </div>

      <p className={style.text}>
        No te <span>arrepentirás</span> de trabajar con nosotros,{" "}
        <span>carisma</span>, <span>dedicación</span>, <span>compromiso</span> y{" "}
        <span>honestidad</span> es lo que nos caracteriza como trabajadores,
        contáctanos y dejanos entrar en acción.
      </p>
    </section>
  );
}

export default PorqueNosotros;
