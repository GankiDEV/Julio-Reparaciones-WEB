import img1 from "@/assets/icons/logo.png";
import style from "@/styles/NavBar.module.css";
import { useState } from "react";

import { FaEnvelope, FaBars, FaBarsStaggered } from "react-icons/fa6";

function NavBar({ showForm, setFirstFormOpen }) {
  const [menuToggled, setMenuToggled] = useState(false);

  const {
    container,
    image,
    profile,
    menu,
    textContainer,
    textTitle,
    contactMe,
    mobileMenu,
  } = style;

  return (
    <nav className={container}>
      <div className={profile}>
        <img className={image} src={img1} alt="mi foto" />
        <div className={textContainer}>
          <p className={textTitle}>Reparaciones FIRO</p>
        </div>
      </div>

      <ul className={menu}>
        <li>
          <a href="#sobremi">Sobre Mi</a>
        </li>
        <li>
          <a href="#experiencia">Experiencia</a>
        </li>
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#porquenosotros">Porque Nosotros</a>
        </li>
      </ul>

      <button
        className={contactMe}
        href="#"
        onClick={() => {
          showForm(true);
          setFirstFormOpen(true);
        }}
      >
        <FaEnvelope fontSize={"1.3rem"} />
        <p>Contactame</p>
      </button>

      <button
        className={style.menuToggle}
        onClick={() => setMenuToggled(!menuToggled)}
      >
        {!menuToggled ? <FaBars /> : <FaBarsStaggered />}
      </button>

      <div
        onClick={() => setMenuToggled(false)}
        className={`${style.mobileMenu} ${
          menuToggled ? style.mobileMenuActive : style.mobileMenuInactive
        }`}
      >
        <ul onClick={() => setMenuToggled(false)}>
          <li>
            <a href="#sobremi" onClick={() => setMenuToggled(false)}>
              Sobre Mi
            </a>
          </li>
          <li>
            <a href="#experiencia" onClick={() => setMenuToggled(false)}>
              Experiencia
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={() => setMenuToggled(false)}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#porquenosotros" onClick={() => setMenuToggled(false)}>
              Porque Nosotros
            </a>
          </li>
          <a
            onClick={() => {
              setMenuToggled(false);
              setFirstFormOpen(true);
              showForm(true);
            }}
            className={style.mobileContactMe}
          >
            Contactame
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
