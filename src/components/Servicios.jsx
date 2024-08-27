import style from "@/styles/Servicios.module.css";
import img from "@/assets/cardImage.jpg";

import {
  FaPencilRuler,
  FaHandsHelping,
  FaCalendarCheck,
  FaCheckCircle,
} from "react-icons/fa";

const {
  container,
  contentContainer,
  cardsContainer,
  reparationsCard,
  otherCards,
  horarioCard,
  horarioTitle,
  horarioText,
  garantiaCard,
  garantiaTitle,
  garantiaText,
} = style;

function Servicios() {
  return (
    <section className={container} id="servicios">
      <div className={contentContainer}>
        <div className={cardsContainer}>
          <div className={reparationsCard}>
            <img src={img} alt="imagen mia sosteniendo herramientas" />
            <div className={style.reparatinsCardContent}>
              <div className={style.cardTitle}>
                <FaPencilRuler fontSize={"3rem"} />
                <h3>Reparaciones y mantenimiento</h3>
              </div>
              <div className={style.cardText}>
                <p>
                  Le devolvemos la vida a todo tipo de electromésticos
                  multimarcas:
                </p>
                <ul className={style.repairList}>
                  <li>
                    <FaCheckCircle color="#4e8" fontSize={"1.2rem"} />
                    <p>Aires Acondicionados</p>
                  </li>
                  <li>
                    <FaCheckCircle color="#4e8" fontSize={"1.2rem"} s />
                    <p>Secadoras</p>
                  </li>
                  <li>
                    <FaCheckCircle color="#4e8" fontSize={"1.2rem"} s />
                    <p>Lavadoras</p>
                  </li>
                  <li>
                    <FaCheckCircle color="#4e8" fontSize={"1.2rem"} s />
                    <p>Microondas</p>
                  </li>
                  <li>
                    <FaCheckCircle color="#4e8" fontSize={"1.2rem"} s />
                    <p>Hornos</p>
                  </li>
                  <li>
                    <FaCheckCircle color="#4e8" fontSize={"1.2rem"} s />
                    <p>Lavavajillas</p>
                  </li>
                  <li>
                    <FaCheckCircle color="#4e8" fontSize={"1.2rem"} s />
                    <p>Cafeteras, Batioras etc...</p>
                  </li>
                </ul>
                <p>
                  Nuestra prioridad es brindar soluciones confiables y superar
                  las expectativas de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
          <div className={otherCards}>
            <div className={garantiaCard}>
              <div className={garantiaTitle}>
                <FaHandsHelping fontSize={"2rem"} />
                <h3>Ofrecemos una excelente garantía</h3>
              </div>
              <div className={garantiaText}>
                <p>
                  ¡La garantía hasta 6 meses! Si presentas algún problema
                  relacionado con la reparaciòn en ese período, nos encargaremos
                  de solucionarlo ¡sin costo extra!.
                </p>
              </div>
            </div>

            <div className={horarioCard}>
              <div className={horarioTitle}>
                <FaCalendarCheck fontSize={"1.5rem"} />
                <h3>Nuestro horario</h3>
              </div>
              <div className={horarioText}>
                <p>¡Abierto las 24 horas y sin coste de desplazamiento!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
