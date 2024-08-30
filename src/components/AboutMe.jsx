import style from "@/styles/AboutMe.module.css";
import img from "@/assets/AboutImage.jpg";

const { container, biography, image } = style;
function AboutMe() {
  return (
    <section className={container} id="sobremi">
      <div className={biography}>
        <h2>Un poco sobre mi trabajo.</h2>
        <p>
          Hola mi nombre es Julio, llevo varios años en el mundillo de la
          reparación de electrodomesticos. Ofreciendo un servicio de calidad a
          mis clientes. Mi trabajo consiste en la reparacion de equipos electrodomesticos multimarcas, entre ellos, lavadoras, secadoras, neveras, aires acondicionados, etcetera.
        </p>
        <p>
          Con mi profundo conocimiento técnico y años de experiencia, puedo
          diagnosticar y reparar eficazmente cualquier problema que que pueda
          surgir en sus electrodomésticos de manera rápida y eficiente,
          minimizando el tiempo de inactividad y asegurando que puedan volver a
          disfrutar de su funcionamiento sin contratiempos. Ya sea que necesite
          una reparación urgente o un mantenimiento preventivo, estaré encantado
          de briandarle un servicio personalizad
        </p>
      </div>
      <div className={image}>
        <img src={img} alt="foto mia con herramientas en mano" />
      </div>
    </section>
  );
}

export default AboutMe;
