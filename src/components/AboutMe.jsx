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
          reparación de electrodomásticos. Ofreciendo un servicio de calidad a
          mis clientes. Mi trabajo consiste en la reparación de equipos
          electrodomésticos multimarcas, entre ellos, lavadoras, secadoras,
          neveras, aires acondicionados, etcétera.
        </p>
        <p>
          Con mis conocimientos unidos a los años de experiencia puedo
          diagnosticar y reparar cualquier desperfecto surgido en sus equipos,
          de una forma rápida y eficaz, minimizando el tiempo de inactividad de
          los mismos y poder seguir usándolos sin contratiempos.
        </p>
      </div>
      <div className={image}>
        <img src={img} alt="foto mia con herramientas en mano" />
      </div>
    </section>
  );
}

export default AboutMe;
