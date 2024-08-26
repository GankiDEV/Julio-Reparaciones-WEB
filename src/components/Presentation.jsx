import style from "@/styles/Presentation.module.css";

const { container, containerImage, textInfo, imageParent } = style;

function Presentation() {
  return (
    <header className={container} id="inicio">
      <div className={textInfo}>
        <h1>Reparaciones FIRO</h1>
        <h2>Reparacion y mantenimiento</h2>
        <h2>
          de <span>electrodomesticos</span> del hogar
        </h2>
      </div>
    </header>
  );
}

export default Presentation;
