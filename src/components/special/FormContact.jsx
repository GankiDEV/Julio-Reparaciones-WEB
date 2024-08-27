import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaCircleXmark,
  FaWhatsapp,
  FaCloudArrowUp,
  FaArrowsRotate,
  FaEnvelopeCircleCheck,
  FaCommentSlash,
} from "react-icons/fa6";

import style from "@/styles/special/FormContact.module.css";

function FormContact({ isVisible, setVisible }) {
  const form = useRef();
  const [loading, setLoading] = useState(0);
  const [showStatus, setShowStatus] = useState(false);

  const handleLoading = (e) => {
    e.preventDefault();
    setShowStatus(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_1l9845m", "template_xyqzlyt", form.current, {
        publicKey: "gAltATlqM7SF4Xmq4",
      })
      .then(
        () => {
          setLoading(1);
          console.log(loading);
        },
        (error) => {
          setLoading(-1);
          console.log(loading);
        }
      );
  };

  return (
    <section
      className={`${style.container} ${
        isVisible ? "contactFormVisible" : "contactFormNotVisible"
      }`}
    >
      <form
        className={style.form}
        ref={form}
        onSubmit={(e) => {
          sendEmail(e);
          handleLoading(e);
        }}
      >
        <div className={style.title}>
          <h2>Contactanos</h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
            }}
          >
            <FaCircleXmark
              fontSize={"2.5rem"}
              className={style.closeButton}
              type="button"
            />
          </button>
        </div>
        {showStatus === false && (
          <div className={`${style.controls}`}>
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
        )}

        {showStatus === true && (
          <div className={style.emailStatus}>
            {loading === 0 && (
              <>
                <FaArrowsRotate className={style.loading} />
                <p>Enviando...</p>
              </>
            )}

            {loading === 1 && (
              <>
                <FaEnvelopeCircleCheck />
                <p>Recibido</p>
              </>
            )}

            {loading === -1 && (
              <>
                <FaCommentSlash />
                <p>
                  No se pudo enviar, recarga la pagina y vuelva a intentarlo,
                  abajo tienes nuestro WhatsApp
                </p>
              </>
            )}
          </div>
        )}

        <div className={style.buttons}>
          <button type="submit" disabled={showStatus == true}>
            <FaCloudArrowUp fontSize={"1.4rem"} />
            Enviar mensaje
          </button>
          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=34680423892&text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios.",
                "_blank"
              )
            }
          >
            <FaWhatsapp fontSize={"1.4rem"} />
            Nuestro WhatsApp
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormContact;
