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

  const code7 = `UPDATE amazon
SET
    -- Para columnas de tiempo/fecha:
    Order_Time = CASE WHEN TRIM(Order_Time) = '' OR TRIM(Order_Time) LIKE '%NaN%' THEN NULL ELSE Order_Time END,
    -- Para otras columnas TEXT:
    Weather = CASE WHEN TRIM(Weather) = '' OR TRIM(Weather) LIKE '%NaN%' THEN NULL ELSE Weather END,
    Traffic = CASE WHEN TRIM(Traffic) = '' OR TRIM(Traffic) LIKE '%NaN%' THEN NULL ELSE Traffic END;`;

  const code8 = `SELECT
    SUM(CASE WHEN Order_ID IS NULL THEN 1 ELSE 0 END) AS nulos_Order_ID,
    SUM(CASE WHEN Agent_age IS NULL THEN 1 ELSE 0 END) AS nulos_Agent_age,
    SUM(CASE WHEN Agent_Rating IS NULL THEN 1 ELSE 0 END) AS nulos_Agent_Rating,
    SUM(CASE WHEN Store_Latitude IS NULL THEN 1 ELSE 0 END) AS nulos_Store_Latitude,
    SUM(CASE WHEN Store_Longitude IS NULL THEN 1 ELSE 0 END) AS nulos_Store_Longitude,
    SUM(CASE WHEN Drop_Latitude IS NULL THEN 1 ELSE 0 END) AS nulos_Drop_Latitude,
    SUM(CASE WHEN Drop_Longitude IS NULL THEN 1 ELSE 0 END) AS nulos_Drop_Longitude,
    SUM(CASE WHEN Order_Date IS NULL THEN 1 ELSE 0 END) AS nulos_Order_Date,
    SUM(CASE WHEN Order_Time IS NULL THEN 1 ELSE 0 END) AS nulos_Order_Time,
    SUM(CASE WHEN Pickup_Time IS NULL THEN 1 ELSE 0 END) AS nulos_Pickup_Time,
    SUM(CASE WHEN Weather IS NULL THEN 1 ELSE 0 END) AS nulos_Weather,
    SUM(CASE WHEN Traffic IS NULL THEN 1 ELSE 0 END) AS nulos_Traffic,
    SUM(CASE WHEN Vehicle IS NULL THEN 1 ELSE 0 END) AS nulos_Vehicle,
    SUM(CASE WHEN Area IS NULL THEN 1 ELSE 0 END) AS nulos_Area,
    SUM(CASE WHEN Delivery_Time IS NULL THEN 1 ELSE 0 END) AS nulos_Delivery_Time,
    SUM(CASE WHEN Category IS NULL THEN 1 ELSE 0 END) AS nulos_Category
FROM
    amazon;`;
  
  const code9 = `ALTER TABLE amazon
ADD COLUMN temp_order_time TIME,
ADD COLUMN temp_pickup_time TIME;`;
  
  const code10 = `UPDATE amazon
SET
    temp_order_time = STR_TO_DATE(Order_Time, '%H:%i:%s'),
    temp_pickup_time = STR_TO_DATE(Pickup_Time, '%H:%i:%s');`;

  const code11 = `SELECT
    Order_Time,
    temp_order_time,
    Pickup_Time,
    temp_pickup_time
FROM
    amazon
LIMIT 10;`;

  const code12 = `ALTER TABLE amazon
DROP COLUMN Order_Time,
DROP COLUMN Pickup_Time;`;

  const code13 = `ALTER TABLE amazon
CHANGE COLUMN temp_order_time Order_Time TIME,
CHANGE COLUMN temp_pickup_time Pickup_Time TIME;`;

  const code14 = `ALTER TABLE amazon
ADD COLUMN temp_order_date DATE;`;

  const code15 = `UPDATE amazon
SET temp_order_date = DATE(Order_Date);`;

  const code16 = `SELECT
    Order_Date, temp_order_date
FROM
    amazon
LIMIT
    10;`;

  const code17 = `ALTER TABLE amazon
DROP COLUMN Order_Date;`;

  const code18 = `ALTER TABLE amazon
CHANGE COLUMN temp_order_date Order_Date DATE;`;

  const code19 = `UPDATE amazon
SET
    Weather = TRIM(Weather),
    Traffic = TRIM(Traffic),
    Vehicle = TRIM(Vehicle),
    Area = TRIM(Area),
    Category = TRIM(Category);`;

  const code20 = `SELECT
    SUM(CASE WHEN Order_ID IS NULL THEN 1 ELSE 0 END) AS nulos_Order_ID,
    SUM(CASE WHEN Agent_age IS NULL THEN 1 ELSE 0 END) AS nulos_Agent_age,
    SUM(CASE WHEN Agent_Rating IS NULL THEN 1 ELSE 0 END) AS nulos_Agent_Rating,
    SUM(CASE WHEN Store_Latitude IS NULL THEN 1 ELSE 0 END) AS nulos_Store_Latitude,
    SUM(CASE WHEN Store_Longitude IS NULL THEN 1 ELSE 0 END) AS nulos_Store_Longitude,
    SUM(CASE WHEN Drop_Latitude IS NULL THEN 1 ELSE 0 END) AS nulos_Drop_Latitude,
    SUM(CASE WHEN Drop_Longitude IS NULL THEN 1 ELSE 0 END) AS nulos_Drop_Longitude,
    SUM(CASE WHEN Order_Date IS NULL THEN 1 ELSE 0 END) AS nulos_Order_Date,
    SUM(CASE WHEN Order_Time IS NULL THEN 1 ELSE 0 END) AS nulos_Order_Time,
    SUM(CASE WHEN Pickup_Time IS NULL THEN 1 ELSE 0 END) AS nulos_Pickup_Time,
    SUM(CASE WHEN Weather IS NULL THEN 1 ELSE 0 END) AS nulos_Weather,
    SUM(CASE WHEN Traffic IS NULL THEN 1 ELSE 0 END) AS nulos_Traffic,
    SUM(CASE WHEN Vehicle IS NULL THEN 1 ELSE 0 END) AS nulos_Vehicle,
    SUM(CASE WHEN Area IS NULL THEN 1 ELSE 0 END) AS nulos_Area,
    SUM(CASE WHEN Delivery_Time IS NULL THEN 1 ELSE 0 END) AS nulos_Delivery_Time,
    SUM(CASE WHEN Category IS NULL THEN 1 ELSE 0 END) AS nulos_Category
FROM
    amazon;`;

  const code21 = `SELECT
    Agent_Age,
    Agent_Rating,
    Store_Latitude,
    Store_Longitude,
    Drop_Latitude,
    Drop_Longitude,
    Delivery_Time
FROM
    amazon
WHERE
    Agent_Age < 0 OR
    Agent_Rating < 0 OR
    Store_Latitude < -90 OR Store_Latitude > 90 OR -- Latitud fuera de rango
    Store_Longitude < -180 OR Store_Longitude > 180 OR -- Longitud fuera de rango
    Drop_Latitude < -90 OR Drop_Latitude > 90 OR
    Drop_Longitude < -180 OR Drop_Longitude > 180 OR
    Delivery_Time < 0;`;

  const code22 = `SELECT
    Order_ID,
    Agent_age,
    Agent_Rating,
    Store_Latitude,
    Store_Longitude,
    Drop_Latitude,
    Drop_Longitude,
    Order_Date,
    Order_Time,
    Pickup_Time,
    Weather,
    Traffic,
    Vehicle,
    Area,
    Delivery_Time,
    Category,
    COUNT(*) AS cant_duplicados
FROM
    amazon
GROUP BY
    Order_ID,
    Agent_age,
    Agent_Rating,
    Store_Latitude,
    Store_Longitude,
    Drop_Latitude,
    Drop_Longitude,
    Order_Date,
    Order_Time,
    Pickup_Time,
    Weather,
    Traffic,
    Vehicle,
    Area,
    Delivery_Time,
    Category
HAVING
    COUNT(*) > 1;`;

  const code23 = `DESCRIBE amazon;`;

  const code24 = `SELECT
    *
FROM
    amazon
LIMIT
    10;`;

  const code25 = `SELECT
    COUNT(*) AS cant_registro
FROM
    amazon;`;
  
  const code26 = `SELECT
    *
FROM
    amazon
WHERE
    Order_Time IS NULL
OR
    Weather IS NULL
OR
    Traffic IS NULL;`;

  const code27 = `SELECT
    SUM(CASE WHEN Order_Time IS NULL THEN 1 ELSE 0 END) AS nulos_Order_Time,
    SUM(CASE WHEN Weather IS NULL THEN 1 ELSE 0 END) AS nulos_Weather,
    SUM(CASE WHEN Traffic IS NULL THEN 1 ELSE 0 END) AS nulos_Traffic
FROM
    amazon;`;

  const code28 = `SET @promedio_delta_segundos = (
    SELECT AVG(TIME_TO_SEC(TIMEDIFF(Pickup_Time, Order_Time)))
    FROM amazon
    WHERE Order_Time IS NOT NULL
      AND Order_Time <= Pickup_Time
);`;

  const code29 = `UPDATE amazon
SET Order_Time = DATE_SUB(Pickup_Time, INTERVAL @promedio_delta_segundos SECOND)
WHERE Order_Time IS NULL;`;

  const code30 = `SELECT
    SUM(CASE WHEN Order_Time IS NULL THEN 1 ELSE 0 END) AS nulos_Order_Time
FROM
    amazon;`;
  const code31 = `-- Conteo de valores negativos
SELECT
    COUNT(*)
FROM
    amazon
WHERE
    Order_Time < '00:00:00';`;

  const code32 = `-- Identificación de registros con valores negativos
SELECT
    *
FROM
    amazon
WHERE
    Order_Time < '00:00:00';`;
  
  const code33 = `-- Corrección de valores negativos
UPDATE amazon
SET Order_Time = '00:00:00'
WHERE Order_Time < '00:00:00'
  AND Pickup_Time = '00:00:00';`;

  const code34 = `SET @lat_precision = 2; -- Ej: Redondear a 2 decimales (aprox. 1.1 km de 'vecindario')
SET @lon_precision = 2; -- Ej: Redondear a 2 decimales`;

  const code35 = `   CREATE TEMPORARY TABLE IF NOT EXISTS temp_weather_counts AS
   SELECT
       ROUND(Drop_Latitude, @lat_precision) AS rounded_lat,
       ROUND(Drop_Longitude, @lon_precision) AS rounded_lon,
       Order_Date,
       Weather,
       COUNT(*) AS cnt
   FROM
       amazon
   WHERE
       Weather IS NOT NULL
   GROUP BY
       rounded_lat,
       rounded_lon,
       Order_Date,
       Weather;`;
  
  const code36 = `    CREATE TEMPORARY TABLE IF NOT EXISTS temp_max_counts AS
    SELECT
        rounded_lat,
        rounded_lon,
        Order_Date,
        MAX(cnt) AS max_cnt
    FROM
        temp_weather_counts
    GROUP BY
        rounded_lat,
        rounded_lon,
        Order_Date;`;

  const code37 = `    CREATE TEMPORARY TABLE IF NOT EXISTS final_weather_modes AS
    SELECT
        twc.rounded_lat,
        twc.rounded_lon,
        twc.Order_Date,
        twc.Weather
    FROM
        temp_weather_counts twc
    JOIN
        temp_max_counts tmc ON
        twc.rounded_lat = tmc.rounded_lat AND
        twc.rounded_lon = tmc.rounded_lon AND
        twc.Order_Date = tmc.Order_Date AND
        twc.cnt = tmc.max_cnt;`;

  const code38 = `    UPDATE amazon a
    JOIN final_weather_modes fwm ON
        ROUND(a.Drop_Latitude, @lat_precision) = fwm.rounded_lat AND
        ROUND(a.Drop_Longitude, @lon_precision) = fwm.rounded_lon AND
        a.Order_Date = fwm.Order_Date
    SET
        a.Weather = fwm.Weather
    WHERE
        a.Weather IS NULL;`;

  const code39 = `    DROP TEMPORARY TABLE IF EXISTS temp_weather_counts;
    DROP TEMPORARY TABLE IF EXISTS temp_max_counts;
    DROP TEMPORARY TABLE IF EXISTS final_weather_modes;`;

  const code40 = `    SELECT
        SUM(CASE WHEN Weather IS NULL THEN 1 ELSE 0 END) AS nulos_Weather
    FROM
        amazon;`;
  
  const code41 = `    CREATE TEMPORARY TABLE IF NOT EXISTS temp_traffic_counts AS
    SELECT
        ROUND(Drop_Latitude, @lat_precision) AS rounded_lat,
        ROUND(Drop_Longitude, @lon_precision) AS rounded_lon,
        Order_Date,
        Traffic,
        COUNT(*) AS cnt
    FROM
        amazon
    WHERE
        Traffic IS NOT NULL
    GROUP BY
        rounded_lat,
        rounded_lon,
        Order_Date,
        Traffic;`;

  const code42 = `    CREATE TEMPORARY TABLE IF NOT EXISTS temp_max_counts AS
    SELECT
        rounded_lat,
        rounded_lon,
        Order_Date,
        MAX(cnt) AS max_cnt
    FROM
        temp_traffic_counts
    GROUP BY
        rounded_lat,
        rounded_lon,
        Order_Date;`;

  const code43 = `    CREATE TEMPORARY TABLE IF NOT EXISTS final_traffic_modes AS
    SELECT
        twc.rounded_lat,
        twc.rounded_lon,
        twc.Order_Date,
        twc.Traffic
    FROM
        temp_traffic_counts twc
    JOIN
        temp_max_counts tmc ON
        twc.rounded_lat = tmc.rounded_lat AND
        twc.rounded_lon = tmc.rounded_lon AND
        twc.Order_Date = tmc.Order_Date AND
        twc.cnt = tmc.max_cnt;`;

  const code44 = `    UPDATE amazon a
    JOIN final_traffic_modes fwm ON
        ROUND(a.Drop_Latitude, @lat_precision) = fwm.rounded_lat AND
        ROUND(a.Drop_Longitude, @lon_precision) = fwm.rounded_lon AND
        a.Order_Date = fwm.Order_Date
    SET
        a.Traffic = fwm.Traffic
    WHERE
        a.Traffic IS NULL;`;

  const code45 = `    DROP TEMPORARY TABLE IF EXISTS temp_traffic_counts;
    DROP TEMPORARY TABLE IF EXISTS temp_max_counts;
    DROP TEMPORARY TABLE IF EXISTS final_traffic_modes;`;

  const code46 = `    SELECT
        COUNT(*) AS nulos_Traffic
    FROM
        amazon
    WHERE
        Traffic IS NULL;`;

  const code47 = `SELECT * FROM amazon WHERE Weather IS NULL;
SELECT * FROM amazon WHERE Traffic IS NULL;`;

  const code48 = `DELETE FROM amazon
WHERE Weather IS NULL;`;

  const code49 = `DELETE FROM amazon
WHERE Traffic IS NULL;`;

  const code50 = `SELECT
    COUNT(*) AS cant_registro
FROM
    amazon;`;

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

        <h3>3. Limpieza y preprocesamiento</h3>
        <p>
          Las primeras etapas del proceso de limpieza y transformación de los datos en la tabla amazon, enfocándose en la estandarización de valores, 
          la corrección de tipos de datos y la identificación de inconsistencias.
        </p>
        <ol>
          <li>
            Reemplazo de Valores Problemáticos por NULL Antes de realizar cualquier conversión de tipo de dato, es crucial estandarizar los valores que representan datos 
            faltantes o inválidos. Esta consulta UPDATE reemplaza cadenas vacías (''), la cadena 'NaN' o subcadenas que contengan 'NaN' por NULL en las columnas Order_Time, 
            Weather y Traffic.
          </li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code7}
          </SyntaxHighlighter>
          <p>
            Realizar este paso nos ayuda a preparar los datos para conversiones de tipo más precisas, asegurando que los valores ausentes sean representados uniformemente como NULL.
          </p>
          <li>
            Identificación de Valores Nulos Después de la primera fase de reemplazo, se realiza una verificación exhaustiva para contar la cantidad de valores NULL en cada columna. 
            Esto proporciona una visión clara de la completitud de los datos, lo cual es fundamental para decidir las estrategias de imputación o eliminación.
          </li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code8}
          </SyntaxHighlighter>
          <li>
            Transformación de Columnas de Tiempo (Order_Time, Pickup_Time) Este paso se encarga de convertir las columnas de tiempo, que originalmente podrían haber sido 
            importadas como TEXT, a un tipo de dato TIME adecuado para análisis de tiempo. Se utilizan columnas temporales para asegurar la 
            integridad de los datos durante la transformación.
          </li>
          <ol type="i">
            <li>Añadir columnas temporales:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code9}
            </SyntaxHighlighter>
            <li>Convertir y poblar:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code10}
            </SyntaxHighlighter>
            <li>Verificar la conversión:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code11}
            </SyntaxHighlighter>
            <li>Eliminar columnas originales:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code12}
            </SyntaxHighlighter>
            <li>Renombrar columnas temporales:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code13}
            </SyntaxHighlighter>
          </ol>
          <li>
            Transformación de la Columna de Fecha (Order_Date) Similar al proceso de las columnas de tiempo, esta sección se dedica a convertir Order_Date a un tipo de dato DATE.
          </li>
          <ol type="i">
            <li>Añadir columna temporal:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code14}
            </SyntaxHighlighter>
            <li>Convertir y poblar:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code15}
            </SyntaxHighlighter>
            <li>Verificar la conversión (opcional):</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code16}
            </SyntaxHighlighter>
            <li>Eliminar columna original:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code17}
            </SyntaxHighlighter>
            <li>Renombrar columna temporal:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code18}
            </SyntaxHighlighter>
          </ol>
          <li>
            Limpieza de Cadenas de Texto (Eliminar Espacios Extra) Esta operación UPDATE utiliza la función TRIM() para eliminar espacios en blanco al 
            inicio y al final de las cadenas en varias columnas de texto.
          </li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code19}
          </SyntaxHighlighter>
          <li>
            Re-evaluación de Valores Nulos Se realiza una segunda verificación de valores nulos después de las transformaciones de tipo y la limpieza de cadenas.
          </li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code20}
          </SyntaxHighlighter>
          <li>
            Búsqueda de Valores Negativos o Fuera de Rango Esta consulta identifica registros donde las columnas numéricas 
            (Agent_Age, Agent_Rating, coordenadas de latitud/longitud, Delivery_Time) contienen valores negativos o valores de latitud/longitud que están 
            fuera de los rangos geográficos válidos.
          </li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code21}
          </SyntaxHighlighter>
          <li>
            Identificación de Registros Completamente Duplicados Se verifica la existencia de filas que son idénticas en todas sus columnas.
          </li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code22}
          </SyntaxHighlighter>
          <li>
            Verificación de la Estructura y Datos Finales Finalmente, se revisa la estructura de la tabla y se visualizan las primeras filas para 
            confirmar que todas las transformaciones de esta primera parte se hayan aplicado correctamente.
          </li>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code23}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code24}
          </SyntaxHighlighter>
          <li>
            Verificación Inicial de Registros y Nulos Antes de proceder con la imputación, se realiza una verificación para conocer el volumen total 
            de registros y la cantidad de nulos presentes en las columnas objetivo.
          </li>
          <ul>
            <li>Conteo total de registros:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code25}
            </SyntaxHighlighter>
            <p>Resultado: 43685 registros.</p>
            <li>Identificación de registros con nulos en columnas clave:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code26}
            </SyntaxHighlighter>
            <li>Conteo específico de nulos por columna:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code27}
            </SyntaxHighlighter>
          </ul>
          <li>
            Imputación de Datos en Order_Time La imputación de Order_Time se realiza estimando el tiempo de pedido basándose en la diferencia 
            promedio entre Pickup_Time y Order_Time para los registros completos.
          </li>
          <ul>
            <li>
              Paso 1: Calcular el promedio de la diferencia de tiempo Se calcula la diferencia promedio en segundos entre Pickup_Time y Order_Time para todos 
              los registros donde ambos valores son válidos y Order_Time es anterior o igual a Pickup_Time.
            </li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code28}
            </SyntaxHighlighter>
            <li>
              Paso 2: Actualizar registros con Order_Time nulo Se actualiza Order_Time restando el promedio_delta_segundos al Pickup_Time de los registros donde Order_Time es NULL.
            </li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code29}
            </SyntaxHighlighter>
            <p>Verificar la cantidad de nulos en Order_Time después de la imputación:</p>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code30}
            </SyntaxHighlighter>
            <li>
              Paso 3: Revisar y corregir valores negativos en Order_Time Se identifican y corrigen los casos donde Order_Time pudo haber resultado en un valor 
              negativo (antes de medianoche) debido a la imputación, especialmente si Pickup_Time era 00:00:00.
            </li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code31}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code32}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code33}
            </SyntaxHighlighter>
          </ul>
          <li>
            Imputación para Weather y Traffic Para imputar Weather y Traffic, se utiliza una estrategia basada en la moda (el valor más frecuente) de 
            estas columnas dentro de "vecindarios" definidos por la latitud y longitud redondeadas, y la fecha del pedido. Esto asume que el clima y el 
            tráfico son similares en ubicaciones y fechas cercanas.
          </li>
          <p>Se definen variables para la precisión del redondeo de las coordenadas:</p>
          <SyntaxHighlighter language="sql" style={dracula} className="code-block">
            {code34}
          </SyntaxHighlighter>
          <p>Imputación para Weather</p>
          <ul>
            <li>Paso 1: Crear tabla temporal con conteos de Weather por zona y fecha</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code35}
            </SyntaxHighlighter>
            <li>Paso 2: Encontrar el conteo máximo para cada grupo (moda)</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code36}
            </SyntaxHighlighter>
            <li>Paso 3: Obtener la moda de Weather por grupo</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code37}
            </SyntaxHighlighter>
            <li>Paso 4: Actualizar la tabla original amazon con los valores imputados</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code38}
            </SyntaxHighlighter>
            <li>Limpiar tablas temporales:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code39}
            </SyntaxHighlighter>
            <li>Verificar la cantidad de nulos en Weather después de la imputación:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code40}
            </SyntaxHighlighter>
          </ul>
          <p>Imputación para Traffic</p>
          <p>El proceso para imputar Traffic es idéntico al de Weather, utilizando la moda del tráfico en zonas y fechas similares.</p>
          <ul>
            <li>Paso 1: Crear tabla temporal con conteos de Traffic por zona y fecha</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code41}
            </SyntaxHighlighter>
            <li>Paso 2: Encontrar el conteo máximo para cada grupo (moda)</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code42}
            </SyntaxHighlighter>
            <li>Paso 3: Obtener la moda de Traffic por grupo</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code43}
            </SyntaxHighlighter>
            <li>Paso 4: Actualizar la tabla original amazon con los valores imputados</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code44}
            </SyntaxHighlighter>
            <li>Limpiar tablas temporales:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code45}
            </SyntaxHighlighter>
            <li>Verificar la cantidad de nulos en Traffic después de la imputación:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code46}
            </SyntaxHighlighter>
          </ul>
          <li>
            Eliminación de Valores Nulos Restantes Después de los intentos de imputación, se eliminan los registros que aún contienen valores NULL en las 
            columnas Weather y Traffic, ya que no pudieron ser imputados con la estrategia definida.
          </li>
          <ul>
            <li>Revisar los registros con nulos restantes:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code47}
            </SyntaxHighlighter>
            <li>Eliminar registros con nulos en Weather:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code48}
            </SyntaxHighlighter>
            <li>Eliminar registros con nulos en Traffic:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code49}
            </SyntaxHighlighter>
            <li>Revisar la cantidad de registros después de la eliminación:</li>
            <SyntaxHighlighter language="sql" style={dracula} className="code-block">
              {code50}
            </SyntaxHighlighter>
          </ul>
        </ol>
      </div>
    </div>
  );
}

export default AmazonDelivery;