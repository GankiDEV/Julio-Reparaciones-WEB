import { useState } from "react";

import NavBar from "@/components/NavBar";
import Presentation from "./components/Presentation";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Exprience";
import Servicios from "./components/Servicios";
import PorqueNosotros from "./components/PorqueNosotros";
import Footer from "./components/Footer";
import FormContact from "./components/special/FormContact";
import "@/styles/main.css";

function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [firsFormOpen, setFirstFormOpen] = useState(false);

  window.console.log("xd");
  return (
    <>
      <NavBar showForm={setFormVisible} setFirstFormOpen={setFirstFormOpen} />
      <Presentation />
      <AboutMe />
      <Experience />
      <Servicios />
      <PorqueNosotros />
      <Footer />

      {firsFormOpen && (
        <FormContact setVisible={setFormVisible} isVisible={formVisible} />
      )}
    </>
  );
}

export default App;
