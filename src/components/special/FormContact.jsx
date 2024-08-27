import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FaCircleXmark, FaWhatsapp, FaCloudArrowUp } from "react-icons/fa6";

import style from "@/styles/special/FormContact.module.css";

function FormContact({ isVisible, setVisible }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1l9845m", "template_xyqzlyt", form.current, {
        publicKey: "gAltATlqM7SF4Xmq4",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className={`${style.container} ${
        isVisible ? "contactFormVisible" : "contactFormNotVisible"
      }`}
    >
      <form className={style.form} ref={form} onSubmit={sendEmail}>
        <div className={style.title}>
          <h2>Contactanos</h2>
          <button onClick={() => setVisible(false)}>
            <FaCircleXmark
              fontSize={"2.5rem"}
              className={style.closeButton}
              type="button"
            />
          </button>
        </div>
        <div className={style.controls}>
          <label>
            Nombre:
            <input
              type="text"
              placeholder="Giancarlo Dennis"
              minLength={3}
              name="nombre"
              required
            />
          </label>
          <label>
            Apellidos:
            <input
              type="text"
              placeholder="Perez Alonso"
              name="apellidos"
              minLength={3}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              placeholder="tucorreo@gmail.com"
              name="correo"
              minLength={5}
              required
            />
          </label>
          <label>
            Numero (Opcional):
            <input
              type="text"
              placeholder="+34 XXXXXXXX"
              name="numero"
              minLength={6}
            />
          </label>
          <label>
            Direccion:
            <input type="text" name="direccion" required minLength={5} />
          </label>
          <label>
            Mensaje:
            <textarea
              placeholder="Describenos tu problema brevemente o alguna inquietud que tengas"
              rows="5"
              name="mensaje"
              minLength={5}
              required
            ></textarea>
          </label>
        </div>

        <div className={style.buttons}>
          <button type="submit">
            <FaCloudArrowUp fontSize={"1.4rem"} />
            Enviar mensaje
          </button>
          <button>
            <FaWhatsapp fontSize={"1.4rem"} />
            Nuestro WhatsApp
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormContact;
