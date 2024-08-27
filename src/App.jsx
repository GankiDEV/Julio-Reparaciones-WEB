import { useState } from "react";

import NavBar from "@/components/NavBar";
import Presentation from "./components/Presentation";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Exprience";
import Servicios from "./components/Servicios";
import PorqueNosotros from "./components/PorqueNosotros";
import Footer from "./components/Footer";
import GoToStartFAB from "./components/special/GoToStartFAB";
import FormContact from "./components/special/FormContact";
import "@/styles/main.css";

//gAltATlqM7SF4Xmq4
// LcIB5Oq-G78MQCk1DGK4Q

function App() {
  const [formVisible, setFormVisible] = useState(false);
  return (
    <>
      <NavBar showForm={setFormVisible} />
      <Presentation />
      <AboutMe />
      <Experience />
      <Servicios />
      <PorqueNosotros />
      <Footer />
      <GoToStartFAB url="#inicio" />

      {/* {formVisible && <FormContact setVisible={setFormVisible} />} */}
      <FormContact setVisible={setFormVisible} isVisible={formVisible} />
    </>
  );
}

export default App;
