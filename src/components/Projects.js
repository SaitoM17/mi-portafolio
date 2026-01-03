import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const proyectos = [
    {
      nombre: "📊 Anime Análisis",
      descripcion: "Este proyecto desarrolla un sistema completo de análisis de datos centrado en la industria del anime, utilizando información pública obtenida a través de Jikan API (wrapper de MyAnimeList). El objetivo es identificar patrones de calidad, popularidad y producción a lo largo del tiempo, evaluar el desempeño de estudios y géneros, y comprender la evolución general del anime en las últimas dos décadas.",
      imagen: "/img/Animes.jpg",
      tecnologias: "Python, Pandas, Numpy, Matplotlib, Seaborn, Jupyter Notebook, MySQL Workbeach 8.0 CE,Git & GitHub, etc..",
      pagina: "/Anime-analisis",
      link: "https://github.com/SaitoM17/anime_analisis.git",
    },
    {
      nombre: "📊 Automotive Price",
      descripcion: "En este proyecto se presetan un análisis exploratorio de datos y la implementación de algoritmos de aprendizaje automático al conjunto de datos Automotive Price Prediction Dataset de Atul Kumar Choudhary con el fin de poner en practica las habilidades en el aprendizaje automático.",
      imagen: "/img/Auto_Price.jpg",
      tecnologias: "Python, Pandas, Numpy, Matplotlib, Seaborn, Jupyter Notebook, Power BI,Git & GitHub, etc..",
      pagina: "/Automotive-price",
      link: "https://github.com/SaitoM17/auto_price.git",
    },
    {
      nombre: "📊 SuperStore Sales",
      descripcion: "Este proyecto consiste en un dashboard interactivo y la generación de reportes ejecutivos. Ambas herramientas están diseñadas para analizar el rendimiento de la entrega de pedidos. Los datos utilizados provienen de un conjunto de datos real de entregas recopilado por Rohit Sahoo.",
      imagen: "/img/SuperStore_Sales.jpg",
      tecnologias: "Python, Pandas, Numpy, Matplotlib, Seaborn, Jupyter Notebook, Power BI,Git & GitHub, etc..",
      pagina: "/superstore-sales",
      link: "https://github.com/SaitoM17/superstore_sales.git",
    },
    {
      nombre: "📊 Ramen Ratings",
      descripcion: "Este proyecto presenta un dashboard interactivo basado en más de 2500 reseñas de productos de ramen a nivel internacional, recopiladas por Aleksey Bilogur (Owner).",
      imagen: "/img/Ramen.jpg",
      tecnologias: "Power BI, Microsoft Excel, DAX, Kaggle, Git & GitHub.",
      pagina: "/Ramen-ratings",
      link: "https://github.com/SaitoM17/ramen_ratings.git",
    },
    {
      nombre: "📊 Amazon Delivery",
      descripcion: "Este proyecto consiste en un dashboard interactivo y la generación de reportes ejecutivos. Ambas herramientas están diseñadas para analizar el rendimiento de la entrega de pedidos. Los datos utilizados provienen de un conjunto de datos real de entregas recopilado por Sujal Suthar, con información valiosa para entender y mejorar la eficiencia operativa.",
      imagen: "/img/Amazon_Delivery.jpg",
      tecnologias: "SQL, MySQL Workbench, Python, Pandas, Numpy, Matplotlib, Seaborn, Jupyter Notebook, Kaggle, Tableau, Git & GitHub.",
      pagina: "/Amazon-delivery",
      link: "https://github.com/SaitoM17/amazon_delivery.git",
    },
    {
      nombre: "📊 Precio de las tortillas en México",
      descripcion: "Este proyecto realiza un análisis exploratorio y descriptivo del precio de la tortilla en México. El conjunto de datos incluye información detallada sobre el precio por kilogramo de la tortilla en diversas ubicaciones (estados y ciudades) y tipos de tiendas a lo largo del tiempo, abarcando el periodo 2007-2024.",
      imagen: "/img/Tortillas.png",
      tecnologias: "Python, Pandas, Numpy, Matplotlib, Seaborn, Jupyter Notebook, Kaggle, Git & GitHub.",
      pagina: "/Precio-tortilla",
      link: "https://github.com/SaitoM17/analisis_del_precio_tortillas_mexico_2007_a_2024.git",
    },
    {
      nombre: "📊 Sistema de Información Empresarial Mexicano (SIEM)",
      descripcion: "Analizar la distribución y características de las empresas registradas en el Sistema de Información Empresarial Mexicano (SIEM) para obtener insights sobre su localización, tamaño, sector económico predominante y diferencias regionales, usando técnicas estadísticas y visualización de datos.",
      imagen: "/img/SIEM.jpg",
      tecnologias: "Python, Pandas, Numpy, Matplotlib, Seaborn, Jupyter Notebook, Kaggle, Git & GitHub.",
      pagina: "/Siem",
      link: "https://github.com/SaitoM17/analisis_empresarial_mexico_siem_2024.git",
    },
    {
      nombre: "📊 Análisis 'Mexico Trade Statistics 2012 - 2023'",
      descripcion: "Analizar la evolución del comercio exterior de México entre 2012 y 2023, identificando los principales socios comerciales, productos clave, tendencias de exportación e importación, y patrones económicos relevantes mediante técnicas de análisis de datos.",
      imagen: "/img/Trade_Statistics.jpg",
      tecnologias: "Python, Pandas, Numpy, Matplotlib, Seaborn, Jupyter Notebook, Kaggle, Git & GitHub.",
      pagina: "/Mexico-trade",
      link: "https://github.com/SaitoM17/analisis_mexico_trade_statistics_2012_2023.git",
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
            <p><strong>Tecnologías:</strong> {p.tecnologias}</p>
            
            <div className="project-links">
              <Link to={p.pagina} className="link-repo">Ver Proyecto</Link>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <img src={"/icon/github.png"} alt={p.nombre} className="repositor-icon" />
              </a>
            </div>
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