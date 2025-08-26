import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function AmazonDelivery() {

  const code1 = `CREATE DATABASE amazon_delivery;
USE amazon_delivery; -- Asegúrate de seleccionar la base de datos correcta`;

  const code2 = `SELECT * FROM amazon_delivery;`;

  const code3 = `SELECT
    *
FROM
    amazon
LIMIT 10;`;

  const code4 = `DESCRIBE amazon;`;

  const code5 = `SELECT
    COUNT(Order_ID) AS cantidad_registros
FROM
    amazon;`;

  const code6 = `SELECT
    'Order_ID' AS column_name, Order_ID AS problematic_value FROM amazon WHERE TRIM(Order_ID) = '' OR TRIM(Order_ID) = 'NaN' OR TRIM(Order_ID) LIKE '%NaN%'
UNION ALL
SELECT
    'Weather' AS column_name, Weather FROM amazon WHERE TRIM(Weather) = '' OR TRIM(Weather) = 'NaN' OR TRIM(Weather) LIKE '%NaN%'
UNION ALL
SELECT
    'Traffic' AS column_name, Traffic FROM amazon WHERE TRIM(Traffic) = '' OR TRIM(Traffic) = 'NaN' OR TRIM(Traffic) LIKE '%NaN%'
UNION ALL
SELECT
    'Vehicle' AS column_name, Vehicle FROM amazon WHERE TRIM(Vehicle) = '' OR TRIM(Vehicle) = 'NaN' OR TRIM(Vehicle) LIKE '%NaN%'
UNION ALL
SELECT
    'Area' AS column_name, Area FROM amazon WHERE TRIM(Area) = '' OR TRIM(Area) = 'NaN' OR TRIM(Area) LIKE '%NaN%'
UNION ALL
SELECT
    'Category' AS column_name, Category FROM amazon WHERE TRIM(Category) = '' OR TRIM(Category) = 'NaN' OR TRIM(Category) LIKE '%NaN%'
UNION ALL
SELECT
    'Order_Time' AS column_name, Order_Time FROM amazon WHERE TRIM(Order_Time) = '' OR TRIM(Order_Time) = 'NaN' OR TRIM(Order_Time) LIKE '%NaN%'
UNION ALL
SELECT
    'Pickup_Time' AS column_name, Pickup_Time FROM amazon WHERE TRIM(Pickup_Time) = '' OR TRIM(Pickup_Time) = 'NaN' OR TRIM(Pickup_Time) LIKE '%NaN%'
UNION ALL
SELECT
    'Order_Date' AS column_name, Order_Date FROM amazon WHERE TRIM(Order_Date) = '' OR TRIM(Order_Date) = 'NaN' OR TRIM(Order_Date) LIKE '%NaN%'
UNION ALL
SELECT
    'Agent_Age' AS column_name, Agent_Age FROM amazon WHERE Agent_Age IS NOT NULL AND (TRIM(Agent_Age) = '' OR TRIM(Agent_Age) = 'NaN' OR TRIM(Agent_Age) LIKE '%NaN%')
UNION ALL
SELECT
    'Agent_Rating' AS column_name, Agent_Rating FROM amazon WHERE Agent_Rating IS NOT NULL AND (TRIM(Agent_Rating) = '' OR TRIM(Agent_Rating) = 'NaN' OR TRIM(Agent_Rating) LIKE '%NaN%')
UNION ALL
SELECT
    'Store_Latitude' AS column_name, Store_Latitude FROM amazon WHERE Store_Latitude IS NOT NULL AND (TRIM(Store_Latitude) = '' OR TRIM(Store_Latitude) = 'NaN' OR TRIM(Store_Latitude) LIKE '%NaN%')
UNION ALL
SELECT
    'Store_Longitude' AS column_name, Store_Longitude FROM amazon WHERE Store_Longitude IS NOT NULL AND (TRIM(Store_Longitude) = '' OR TRIM(Store_Longitude) = 'NaN' OR TRIM(Store_Longitude) LIKE '%NaN%')
UNION ALL
SELECT
    'Drop_Latitude' AS column_name, Drop_Latitude FROM amazon WHERE Drop_Latitude IS NOT NULL AND (TRIM(Drop_Latitude) = '' OR TRIM(Drop_Latitude) = 'NaN' OR TRIM(Drop_Latitude) LIKE '%NaN%')
UNION ALL
SELECT
    'Drop_Longitude' AS column_name, Drop_Longitude FROM amazon WHERE Drop_Longitude IS NOT NULL AND (TRIM(Drop_Longitude) = '' OR TRIM(Drop_Longitude) = 'NaN' OR TRIM(Drop_Longitude) LIKE '%NaN%')
UNION ALL
SELECT
    'Delivery_Time' AS column_name, Delivery_Time FROM amazon WHERE Delivery_Time IS NOT NULL AND (TRIM(Delivery_Time) = '' OR TRIM(Delivery_Time) = 'NaN' OR TRIM(Delivery_Time) LIKE '%NaN%');`;

  return (
    <div className="pagina-proyecto">
      <div className="contenedor-proyecto">
        
        <h1>📦 Amazon Delivery</h1>
        <img src="/img/Amazon_Delivery.jpg" alt="Amazon Delivary" className="imagen-principal" />
        <br/>

        <h2>Análisis de eficiencia en entregas de última milla</h2>
        <p>
          Este proyecto consiste en un dashboard interactivo y la generación de reportes ejecutivos. 
          Ambas herramientas están diseñadas para analizar el rendimiento de la entrega de pedidos. 
          Los datos utilizados provienen de un conjunto de datos real de entregas recopilado por Sujal Suthar, 
          con información valiosa para entender y mejorar la eficiencia operativa.
        </p>

        <h2>🎯 Propósito</h2>
        <p>
          El propósito principal de este proyecto es optimizar la eficiencia en la entrega de pedidos. Para lograrlo, analizaremos datos en tiempo real con el fin de:
        </p>
        <lu>
          <li>Evaluar la eficiencia general de nuestras entregas.</li>
          <li>Identificar zonas geográficas y franjas horarias con mayores desafíos operativos.</li>
          <li>Reconocer el desempeño individual de los repartidores, destacando a los más eficientes y detectando áreas de mejora.</li>
        </lu>

        <h2>🧪 Desarrollo del Proyecto</h2>

        <h3>1. Creación y carga de la base de datos</h3>
        <p>
          Este apartado describe los pasos para cargar, explorar y preparar inicialmente el conjunto de datos amazon_delivery.csv en una base de datos MySQL.
        </p>
        <ol>
          <li>Origen de los Datos El conjunto de datos utilizado para este análisis es amazon_delivery.csv, obtenido de Kaggle. 
            Contiene información relacionada con entregas de Amazon.</li>
          <li>Configuración de la Base de Datos Para comenzar, necesitamos crear y seleccionar la base de datos donde se almacenarán nuestros datos.</li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code1}
          </SyntaxHighlighter>
          <li>Carga de Datos Los datos se cargaron en la base de datos MySQL utilizando la interfaz gráfica de MySQL Workbench, específicamente el "Table Data Import Wizard".</li>
          <ol>
            <p>
            Pasos para cargar los datos usando MySQL Workbench:
            </p>
            <li>Crear la base de datos: Ejecuta la sentencia CREATE DATABASE amazon_delivery; o créala manualmente.</li>
            <li>Seleccionar la base de datos: Haz doble clic en la base de datos amazon_delivery en el panel "Schemas" para seleccionarla, o usa la sentencia USE amazon_delivery;.</li>
            <li>Iniciar el asistente de importación: Haz clic derecho en el apartado de "Tables" dentro de tu base de datos amazon_delivery.</li>
            <li>Seleccionar "Table Data Import Wizard": Elige esta opción del menú contextual.</li>
            <li>Seleccionar la ruta del archivo CSV: Navega y selecciona el archivo amazon_delivery.csv desde tu sistema de archivos.</li>
            <li>Seleccionar "Create new table": Elige esta opción para crear una nueva tabla donde se importarán los datos.</li>
            <li>Configurar los tipos de datos: Revisa y ajusta los tipos de datos sugeridos por el asistente para cada columna, asegurándote de que coincidan con el 
              formato de tus datos (por ejemplo, VARCHAR para texto, INT o DECIMAL para números, DATE para fechas, etc.).</li>
          </ol>
          <p>
              Finalizar la importación: Haz clic en "Next" y sigue las instrucciones finales para que el asistente comience a crear la tabla y cargar los datos.
          </p>
          <li>Verificación y Exploración Inicial Una vez que los datos se han cargado, puedes verificar que la tabla se haya creado correctamente y realizar 
              una exploración inicial seleccionando todas las filas de la tabla:</li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code2}
          </SyntaxHighlighter>
          <p>
            Este comando te permitirá ver las primeras filas de los datos importados y confirmar que la carga fue exitosa.
          </p>
        </ol>

        <h3>2. Exploración inicial de los datos</h3>
        <p>
          Una vez que los datos han sido cargados en la base de datos amazon_delivery, se realiza una serie de consultas SQL para obtener una comprensión 
          inicial de la estructura, el volumen y la calidad de los datos.
        </p>
        <ol>
          <li>Verificación de los Datos Iniciales Esta consulta permite visualizar las primeras 10 filas de la tabla amazon para tener una idea rápida de su contenido y formato.</li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code3}
          </SyntaxHighlighter>
          <p>
            Esta consulta confirmar que los datos se han cargado correctamente y observar un extracto representativo de las filas.
          </p>
          <li>Descripción de los Tipos de Datos La sentencia DESCRIBE proporciona información sobre la estructura de la tabla, incluyendo los nombres de las columnas, 
            sus tipos de datos, si aceptan valores nulos y si tienen claves.</li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code4}
          </SyntaxHighlighter>
          <p>
            DESCRIBRE nos ayudo a entender los tipos de datos asignados a cada columna durante la importación, lo cual es crucial para planificar futuras transformaciones y limpieza.
          </p>
          <li>Conteo de Registros Esta consulta cuenta el número total de filas en la tabla, utilizando Order_ID como una columna no nula para el conteo.</li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code5}
          </SyntaxHighlighter>
          <p>
            El determinar el volumen total del conjunto de datos, nos ayuda a evaluar la escala del análisis.
          </p>
          <li>
            Identificación de Valores Problemáticos (Cadenas Vacías, 'NaN', Espacios en Blanco) Esta serie de consultas UNION ALL está diseñada para identificar 
            registros que contienen valores "problemáticos" en columnas de texto o en columnas que, aunque deberían ser numéricas o de fecha, podrían haber sido 
            importadas como texto y contener indicadores de valores faltantes o inválidos como cadenas vacías (''), la cadena 'NaN', o cadenas con solo espacios en blanco.
          </li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code6}
          </SyntaxHighlighter>
          <p>
            Lograr detectar valores inconsistentes o faltantes que no son NULL, pero que representan datos inválidos (como cadenas vacías o textos como "NaN"), 
            es un paso clave durante la fase de limpieza de datos.
          </p>
        </ol>
      </div>
    </div>
  );
}

export default AmazonDelivery;