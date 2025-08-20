import React from "react";

function Projects() {
  const proyectos = [
    {
      nombre: "📊 Análisis de Clima Mundial",
      descripcion: "Limpieza y análisis de datos del NOAA Weather Data.",
      herramientas: "Python, Pandas, SQL",
      link: "https://github.com/tuusuario/proyecto-clima",
    },
    {
      nombre: "📈 Dashboard de Ventas",
      descripcion: "Dashboard interactivo para KPIs de ventas.",
      herramientas: "Power BI",
      link: "https://app.powerbi.com/view?r=tu_dashboard",
    },
  ];

  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((p, index) => (
          <div key={index} className="project-card">
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p><strong>Herramientas:</strong> {p.herramientas}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;