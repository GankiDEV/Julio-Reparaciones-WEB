import { FaArrowUp } from "react-icons/fa6";
import style from "@/styles/special/GoToStartFAB.module.css";

function GoToStartFAB({ url = "#inicio" }) {
  return (
    <a href={url} className={style.container}>
      <div>
        <FaArrowUp />
      </div>
    </a>
  );
}

export default GoToStartFAB;
