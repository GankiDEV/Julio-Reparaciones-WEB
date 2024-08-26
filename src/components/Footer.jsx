import style from "@/styles/Footer.module.css";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.credits}>
        <p>Web creada por Giancarlo Dennis</p>
        <p>Sus redes sociales:</p>
        <div>
          <a
            href="https://www.instagram.com/karlin.dev?igsh=MW1oYnNwMHIxYmRjbg=="
            className={style.credits_instagram}
            target="_blank"
          >
            <FaSquareInstagram fontSize={"2.5rem"} />
            <p>Instagram</p>
          </a>

          <a
            href="https://x.com/karlin_dev"
            className={style.credits_twitter}
            target="_blank"
          >
            <FaSquareXTwitter fontSize={"2.5rem"} />
            <p>X (Twitter)</p>
          </a>
        </div>
      </div>

      <div className={style.firo_text}>
        <p>Reparaciones Firo</p>
        <p>Siempre a su servicio</p>
      </div>
    </footer>
  );
}

export default Footer;
