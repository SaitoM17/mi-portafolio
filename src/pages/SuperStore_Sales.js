import React from "react";

function SuperStoreSales() {
  return (
    <div style={{ padding: "2rem" }}>
      
      <h1>📦 SuperStore Sales</h1>
      <img src="/img/SuperStore_Sales.jpg" alt="Amazon Delivery" style={{ maxWidth: "400px" }} />
      <br />
      
      <p>
        Este proyecto consiste en un dashboard interactivo y reportes
        ejecutivos para analizar la entrega de pedidos.  
        Incluye análisis en Python, Pandas y SQL.
      </p>
      
      <h2>  🎯 Propósito</h2>

      <p>
        El proyecto busca evaluar el comportamiento de las ventas de una tienda minorista a partir de datos históricos, considerando diferentes dimensiones clave como producto, cliente, categoría y región. El objetivo es descubrir patrones relevantes, identificar áreas de oportunidad, anticipar riesgos potenciales y establecer estrategias basadas en datos que impulsen decisiones comerciales informadas.

        Obtener KPI's:

        KPI's de Ventas y Rendimiento Financiero
        KPI's de Eficiencia Operativa
        KPI's de Clientes y Mercado
        Analizar el rendimiento de ventas

        Analizar los ingresos por productos vendidos
        Analizar su comportamiento en distintos contextos
        Análisis de múltiples dimensiones (Productos, clientes, categorías y región)

        Detectar oportunidades de mejora

        ¿Dónde se puede aumentar ventas, eficiencia o márgenes?
        Identificar riesgos

        ¿Qué productos, categorías, clientes o región tiene bajas las ventas y representas un riesgo?
        Encontrar palancas estratégicas

        ¿Qué están funcionando bien y si se puede escalar?
      </p>

      <h2>🧪 Desarrollo del Proyecto</h2>
      
      <h3>1. Carga y exploración inicial de los datos</h3>
      <p>
        La primera fase de nuestro proyecto fue una exploración exhaustiva del conjunto de datos Superstore Sales. 
        Esta etapa nos permitió obtener una visión general de su composición, confirmando que contiene 9800 registros y 18 columnas.

        Esta exploración inicial es crucial para identificar posibles problemas que podrían afectar el análisis, como:

        Valores duplicados.
        Valores nulos.
        Errores de registro (por ejemplo, errores tipográficos).
        Valores atípicos (valores que se desvían significativamente de la mayoría de los datos).
        Distribución de datos.
        Durante este proceso, se identificaron dos problemas principales:

        Se encontraron 11 registros con valores nulos en la columna Postal Code. Afortunadamente, este problema no representa un 
        gran obstáculo, ya que contamos con información complementaria en otras columnas que nos permitirá rellenar los datos faltantes de manera precisa.

        Se detectaron valores atípicos en el conjunto de datos. Para abordar este hallazgo, se llevará a cabo un análisis más profundo para 
        comprender la naturaleza de estos registros. Esto nos ayudará a determinar si son datos erróneos que deben ser eliminados, o si 
        representan eventos reales (como ventas excepcionalmente altas) que necesitan ser considerados en el análisis.

        Este primer paso nos ha dado una base sólida para comenzar el proceso de limpieza y preparación de datos, asegurando que nuestro 
        análisis posterior sea lo más preciso y fiable posible.
      </p>

      <h3>2. Análisis Valores Atípicos</h3>
      <p>
        El análisis de los registros con valores atípicos en el conjunto de datos de Superstore Sales, respaldado por el 
        script de Python y la visualización adjunta, ha demostrado que estas fluctuaciones en las ventas no son errores de datos. 
        Por el contrario, representan escenarios de precios volátiles y estratégicos, algo común en mercados dinámicos.
      </p>
      <img src="/SuperStoreSales/graficos_evolucion_ventas_original.png" alt="Evolución de las Ventas"/>
      <p>
        Como se puede observar en el gráfico, los precios fluctúan ampliamente a lo largo de los años 2015 a 2018. Esto sugiere que las 
        variaciones son parte del comportamiento natural del mercado, posiblemente debido a promociones, cambios estacionales o estrategias de la empresa.
      </p>
      <p>
        El script de Python, que utiliza la biblioteca fuzzywuzzy para comparar nombres de productos y un análisis de la evolución del precio por mes, 
        permitió confirmar que estas fluctuaciones son consistentes con la dinámica de precios del mercado, en lugar de ser errores de registro. 
        Este hallazgo es crucial para el proyecto, ya que nos permite mantener estos datos en el conjunto para un análisis más completo y realista.
      </p>

      <a href="https://github.com/SaitoM17/amazon_delivery" target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  );
}

export default SuperStoreSales;
