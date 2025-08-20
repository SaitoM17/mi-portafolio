import React from "react";

function Projects() {
  const proyectos = [
    {
      nombre: "📊 SuperStore Sales",
      descripcion: "Este proyecto consiste en un dashboard interactivo y la generación de reportes ejecutivos. Ambas herramientas están diseñadas para analizar el rendimiento de la entrega de pedidos. Los datos utilizados provienen de un conjunto de datos real de entregas recopilado por Rohit Sahoo.",
      imagen: "/img/SuperStore_Sales.jpg",
      herramientas: "Python, Pandas, SQL",
      link: "https://github.com/SaitoM17/superstore_sales",
    },
    {
      nombre: "📊 Ramen Ratings",
      descripcion: "Este proyecto presenta un dashboard interactivo basado en más de 2500 reseñas de productos de ramen a nivel internacional, recopiladas por Aleksey Bilogur (Owner).",
      herramientas: "Power BI",
      link: "https://github.com/SaitoM17/ramen_ratings",
    },
    {
      nombre: "📊 Amazon Delivery",
      descripcion: "Este proyecto consiste en un dashboard interactivo y la generación de reportes ejecutivos. Ambas herramientas están diseñadas para analizar el rendimiento de la entrega de pedidos. Los datos utilizados provienen de un conjunto de datos real de entregas recopilado por Sujal Suthar, con información valiosa para entender y mejorar la eficiencia operativa.",
      herramientas: "Python, Pandas, SQL",
      link: "https://github.com/SaitoM17/amazon_delivery",
    },
    {
      nombre: "📊 Precio de las tortillas en México",
      descripcion: "Este proyecto realiza un análisis exploratorio y descriptivo del precio de la tortilla en México. El conjunto de datos incluye información detallada sobre el precio por kilogramo de la tortilla en diversas ubicaciones (estados y ciudades) y tipos de tiendas a lo largo del tiempo, abarcando el periodo 2007-2024.",
      herramientas: "Power BI",
      link: "https://github.com/SaitoM17/analisis_del_precio_tortillas_mexico_2007_a_2024",
    },
  ];

  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((p, index) => (
        <div key={index} className="project-card">
            <div className="project-content">
                <h3>{p.nombre}</h3>
                <p>{p.descripcion}</p>
                <p><strong>Herramientas:</strong> {p.herramientas}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                Ver proyecto
                </a>
            </div>
            {p.imagen && (
                <img src={p.imagen} alt="Icono del proyecto" className="project-icon" />
            )}
        </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;