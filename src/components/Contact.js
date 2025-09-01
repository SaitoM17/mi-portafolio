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
        <a href="https://www.linkedin.com/in/said-mariano/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icono" /> linkedin.com/in/said-mariano
        </a>
        <a href="https://github.com/saitoM17" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icono" /> github.com/saitoM17
        </a>
        <a href="https://public.tableau.com/app/profile/said.mariano" target="_blank" rel="noopener noreferrer">
          <FaGlobe className="icono" /> Tableau Public
        </a>
      </div>
    </section>
  );
}

export default Contacto;