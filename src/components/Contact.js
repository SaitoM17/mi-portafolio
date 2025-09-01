import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import "./Contact.css";

function Contacto() {
  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <div className="contacto-contenedor">
        <a href="mailto:said.mariano.sanchez@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icono" /> said.mariano.sanchez@gmail.com
        </a>
        <a href="https://linkedin.com/in/saito-datos" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icono" /> linkedin.com/in/saito-datos
        </a>
        <a href="https://github.com/saito-datos" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icono" /> github.com/saito-datos
        </a>
        <a href="https://public.tableau.com/app/profile/saito" target="_blank" rel="noopener noreferrer">
          <FaGlobe className="icono" /> Tableau Public
        </a>
      </div>
    </section>
  );
}

export default Contacto;