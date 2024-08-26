import { FaCircleXmark, FaWhatsapp, FaCloudArrowUp } from "react-icons/fa6";

import style from "@/styles/special/FormContact.module.css";

function FormContact({ setVisible }) {
  return (
    <section className={style.container}>
      <section className={style.form} onClick={() => console.log(2)}>
        <div className={style.title}>
          <h2>Contactanos</h2>
          <button onClick={() => setVisible(false)}>
            <FaCircleXmark fontSize={"2.5rem"} />
          </button>
        </div>
        <div className={style.controls}>
          <label>
            Nombre:
            <input type="text" placeholder="Giancarlo Dennis" />
          </label>
          <label>
            Apellidos:
            <input type="text" placeholder="Perez Alonso" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="tucorreo@gmail.com" />
          </label>
          <label>
            Numero:
            <input type="number" placeholder="+34 XXXXXXXX" />
          </label>
          <label>
            Direccion:
            <input type="text" />
          </label>
          <label>
            Mensaje:
            <textarea
              placeholder="Describenos tu problema brevemente o alguna inquietud que tengas"
              rows="5"
            ></textarea>
          </label>
        </div>

        <div className={style.buttons}>
          <button>
            <FaCloudArrowUp fontSize={"1.4rem"} />
            Enviar
          </button>
          <button>
            <FaWhatsapp fontSize={"1.4rem"} />
            Nuestro WhatsApp
          </button>
        </div>
      </section>
    </section>
  );
}

export default FormContact;
