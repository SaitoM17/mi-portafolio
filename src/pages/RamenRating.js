import "./proyectPages.css";

function RamenRantings() {
  return (
    <div className="pagina-proyecto">
      <div className="contenedor-proyecto">

        <h1>🍵 Ramen Ratings</h1>
        <img src="/img/Ramen.jpg" alt="Ramen" className="imagen-principal" />
        <br/>

        <h2>Analisis de Ramen (Ramen Ratings Dashboard - Power BI)</h2>
        <p>
          Este proyecto presenta un dashboard interactivo basado en más de 2500 reseñas de productos de ramen a nivel internacional, recopiladas por Aleksey Bilogur.
        </p>

        <h2>🎯 Propósito</h2>
        <p>Visualizar y analizar las calificaciones de ramen para identificar:</p>
        <lu>
          <li>Las marcas mejor calificadas</li>
          <li>El estilo de empaque con mejores evaluaciones</li>
          <li>Los países con mayores promedios de estrellas</li>
          <li>Productos destacados de 2012 a 2016</li>
        </lu>

        <h2>📌 Vista previa del dashboard</h2>
        <img src="/RamenRatings/Dashboard_ramen_ratings.png" alt="Ramen Rating " className="imagen-proyecto"/>

        <h2>💡 Insight clave</h2>
        <p>
          Aunque Nissin es la marca con más productos evaluados (368), MyKuali es la mejor calificada con un promedio de ⭐ 4.95 estrellas entre 22 productos.
        </p>

      </div>
    </div>
  );
}

export default RamenRantings;
