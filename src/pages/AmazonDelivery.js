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
  
  const code51 = `SELECT
    COUNT(*) AS cantidad_registros
FROM
    amazon;`;

  const code52 = `SELECT
    *
FROM
    amazon;`;

  const code53 = `import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt`;

  const code54 = `df_amazon_delivery = pd.read_csv('../data/processed/amazon_delivery_limpios.csv')
df_amazon_delivery.head()`;

  const code55 = `filas, columnas = df_amazon_delivery.shape
print(f'El conjunto de datos amazon_delivery_limpio.csv contiene:\nfilas:{filas:>10}\ncolumnas:{columnas:>7}')`;

  const code56 = `df_amazon_delivery.info()`;

  const code57 = `df_amazon_delivery['Order_Date'] = pd.to_datetime(df_amazon_delivery['Order_Date'], format='%Y-%m-%d', errors='coerce')
print('Tipo de Order_Date después de la primera conversion:', df_amazon_delivery['Order_Date'].dtype)
print('\nColumna con solo la fehca')
print(df_amazon_delivery['Order_Date'].head(3))`;

  const code58 = `# Calcular el tiempo promedio de entrega (Delivery_Time)
promedio_delivery_time = np.mean(df_amazon_delivery['Delivery_Time'])

# Convertir el total de minutos a horas y minutos
horas = int(promedio_delivery_time // 60) # Obtiene la parte entera de las horas
minutos_restantes = promedio_delivery_time % 60 # Obtiene el resto de minutos

print(f'Promedio del tiempo de entrega (Delivery_Time): {promedio_delivery_time:.2f} minutos')
print(f'Que equivale a: {horas} horas y {minutos_restantes:.0f} minutos') # Redondea los minutos a un entero`;

  const code59 = `# Calcular el tiempo promedio de procesamiento del pedido (Pickup_Time - Order_Time)
df_amazon_delivery['Order_Processing_Time'] = df_amazon_delivery['Pickup_Time_TD'] - df_amazon_delivery['Order_Time_TD']

# Si el resultado es negativo, significa que la recogida es "al día siguiente"
# Por lo tanto, le sumamos un día (24 horas)
one_day = pd.Timedelta(days=1)
df_amazon_delivery.loc[df_amazon_delivery['Order_Processing_Time'] < pd.Timedelta(0), 'Order_Processing_Time'] += one_day

promedio_order_processing_time = np.mean(df_amazon_delivery['Order_Processing_Time'])
promedio_en_segundos = promedio_order_processing_time.total_seconds()

# 2. Calcular los minutos enteros
minutos = int(promedio_en_segundos // 60)
# 3. Calcular los segundos restantes y redondearlos al entero más cercano
segundos = round(promedio_en_segundos % 60)

print(f'Promedio de Procesamiento de la orden del pedido (Order_Processing_Time): {promedio_order_processing_time}')
print(f'Promedio de Procesamiento de la orden del pedido: {minutos}:{segundos} minutos')`;

  const code60 = `# Calcular el porcentaje de entregas a tiempo (Número de entregas a tiempo / Número total de entregas * 100)
# Porcentaje de las entregas que queremos que se consideren "a tiempo"
# Encontrar el tiempo por debajo del cual está el 95% de las entregas
percentil_deseado = 95 # Calcular el Percentil
umbral_calculado = df_amazon_delivery['Delivery_Time'].quantile(percentil_deseado / 100)

print(f'Basado en el {percentil_deseado}% de tus entregas históricas:')
print(f'El {percentil_deseado}º percentil del tiempo de entrega es: {umbral_calculado:.2f} minutos')

numero_entregas_a_tiempo = len(df_amazon_delivery[df_amazon_delivery['Delivery_Time'] <= umbral_calculado])
numero_total_entregas = len(df_amazon_delivery)
porcentaje_entregas_a_tiempo = (numero_entregas_a_tiempo / numero_total_entregas) * 100

print(f'\nUsando {umbral_calculado:.2f} minutos como umbral de "a tiempo":')
print(f'Número de entregas a tiempo: {numero_entregas_a_tiempo}')
print(f'Número total de entregas: {numero_total_entregas}')
print(f'Porcentaje de Entregas a Tiempo (con umbral basado en datos): {porcentaje_entregas_a_tiempo:.2f}%')`;

  const code61 = `def haversine_vector(lat1, lon1, lat2, lon2):
    R = 6371.0  # Radio de la Tierra en kilómetros
    lat1 = np.radians(lat1)
    lat2 = np.radians(lat2)
    delta_lat = np.radians(lat2 - lat1)
    delta_lon = np.radians(lon2 - lon1)

    a = np.sin(delta_lat / 2)**2 + np.cos(lat1) * np.cos(lat2) * np.sin(delta_lon / 2)**2
    c = 2 * np.arctan2(np.sqrt(a), np.sqrt(1 - a))
    return R * c

# Calcular en lote
df_amazon_delivery["Distance_km"] = haversine_vector(
    df_amazon_delivery["Store_Latitude"],
    df_amazon_delivery["Store_Longitude"],
    df_amazon_delivery["Drop_Latitude"],
    df_amazon_delivery["Drop_Longitude"])

df_amazon_delivery.head(5)`;

  const code62 = `# Formato de salida para la tabla dinamica (para el tiempo que sea más facil de leer)
df_copia = df_amazon_delivery[['Order_ID', 'Delivery_Time']].copy()

# Crear una función para convertir minutos a formato legible
def format_minutes_to_hh_mm_ss(minutes):
    if pd.isna(minutes): # Manejar valores NaN si existen
        return np.nan

    total_seconds = int(minutes * 60)  # Convertir a segundos totales y asegurar que sea entero
    hours = total_seconds // 3600
    minutes_remainder = (total_seconds % 3600) // 60
    seconds_remainder = total_seconds % 60

    # Formato "HH:MM:SS"
    # :02d asegura que los valores siempre tengan dos dígitos (ej., 5 se convierte en 05)
    return f"{hours}:{minutes_remainder:02d}:{seconds_remainder:02d}"

# --- Crear la nueva columna formateada en el DataFrame ---
df_copia['Delivery_Time_Formatted'] = df_copia['Delivery_Time'].apply(format_minutes_to_hh_mm_ss)

# Impacto del clima y trafico en el tiempo de entregas (tabla dinamica)
clima_trafico_tiempo_entrega = pd.pivot_table(df_amazon_delivery,
                                              values='Delivery_Time',
                                              index=['Weather', 'Traffic'],
                                              aggfunc='mean')

# Aplicar el formateo a la columna de resultados de la tabla dinámica
clima_trafico_tiempo_entrega['Delivery_Time_Formatted'] = \
    clima_trafico_tiempo_entrega['Delivery_Time'].apply(format_minutes_to_hh_mm_ss)

print("Tabla Dinámica Impacto del Clima y Tráfico en el Tiempo de Entregas")
clima_trafico_tiempo_entrega`;

  const code63 = `# Agrupar por vehiculo para eficacia
tipo_vehiculo_promedio = pd.pivot_table(df_amazon_delivery,
                                        values='Delivery_Time',
                                        index=['Vehicle'],
                                        aggfunc='mean')

# Aplicar el formateo a la columna de resultados de la tabla dinámica
tipo_vehiculo_promedio['Delivery_Time_Formatted'] = \
    tipo_vehiculo_promedio['Delivery_Time'].apply(format_minutes_to_hh_mm_ss)

print("Tabla Dinámica del Tipo de Vehiculo en el Tiempo de Entregas")
tipo_vehiculo_promedio`;

  const salida1 = `El conjunto de datos amazon_delivery_limpio.csv contiene:
filas:     43644
columnas:     16`;

  const salida2 = `<class 'pandas.core.frame.DataFrame'>
RangeIndex: 43644 entries, 0 to 43643
Data columns (total 16 columns):
 #   Column           Non-Null Count  Dtype  
---  ------           --------------  -----  
 0   Order_ID         43644 non-null  object 
 1   Agent_Age        43644 non-null  int64  
 2   Agent_Rating     43644 non-null  float64
 3   Store_Latitude   43644 non-null  float64
 4   Store_Longitude  43644 non-null  float64
 5   Drop_Latitude    43644 non-null  float64
 6   Drop_Longitude   43644 non-null  float64
 7   Weather          43644 non-null  object 
 8   Traffic          43644 non-null  object 
 9   Vehicle          43644 non-null  object 
 10  Area             43644 non-null  object 
 11  Delivery_Time    43644 non-null  int64  
 12  Category         43644 non-null  object 
 13  Order_Time       43644 non-null  object 
 14  Pickup_Time      43644 non-null  object 
 15  Order_Date       43644 non-null  object 
dtypes: float64(5), int64(2), object(9)
memory usage: 5.3+ MB`;

  const salida3 = `Tipo de Order_Date después de la primera conversion: datetime64[ns]

Columna con solo la fehca
0   2022-03-19
1   2022-03-25
2   2022-03-19
Name: Order_Date, dtype: datetime64[ns]`;

  const salida4 = `Promedio del tiempo de entrega (Delivery_Time): 124.91 minutos
Que equivale a: 2 horas y 5 minutos`;

  const salida5 = `Promedio de Procesamiento de la orden del pedido (Order_Processing_Time): 0 days 00:09:59.446728072
Promedio de Procesamiento de la orden del pedido: 9:59 minutos`;

  const salida6 = `Basado en el 95% de tus entregas históricas:
El 95º percentil del tiempo de entrega es: 215.00 minutos

Usando 215.00 minutos como umbral de "a tiempo":
Número de entregas a tiempo: 41559
Número total de entregas: 43644
Porcentaje de Entregas a Tiempo (con umbral basado en datos): 95.22%`;

  const salida7 = `Distancia promedio de entregas: 10.37 km`;

  const salida8 = `Tabla Dinámica Impacto del Clima y Tráfico en el Tiempo de Entregas
                     Delivery_Time Delivery_Time_Formatted
Weather    Traffic
Cloudy     High         138.900838              2:18:54
           Jam          174.652232              2:54:39
           Low          106.688986              1:46:41
           Medium       136.680720              2:16:40
Fog        High         134.856390              2:14:51
           Jam          174.054054              2:54:03
           Low          104.950475              1:44:57
           Medium       132.230812              2:12:13
Sandstorms High         131.856932              2:11:51
           Jam          142.185776              2:22:11
           Low           96.780159              1:36:46
           Medium       132.783237              2:12:46
Stormy     High         131.886555              2:11:53
           Jam          142.232743              2:22:13
           Low           98.627676              1:38:37
           Medium       131.786435              2:11:47
Sunny      High         110.011158              1:50:00
           Jam          108.650986              1:48:39
           Low          102.600917              1:42:36
           Medium        96.076389              1:36:04
Windy      High         128.680168              2:08:40
           Jam          142.869584              2:22:52
           Low           98.702198              1:38:42
           Medium       130.675721              2:10:40`;

  const salida9 = `Tabla Dinámica del Tipo de Vehiculo en el Tiempo de Entregas
            Delivery_Time Delivery_Time_Formatted
Vehicle
bicycle        122.857143              2:02:51
motorcycle     131.030324              2:11:01
scooter        116.375385              1:56:22
van            116.074640              1:56:04`;

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

        <h3>4. Exportación de datos limpios</h3>
        <p>
          Una vez que los datos han sido limpiados y preprocesados, se preparan para la exportación. Esto implica verificar la cantidad final de registros 
          y seleccionar todos los datos de la tabla amazon para su posterior uso.
        </p>
        <p>
          Conteo final de registros: Esta consulta confirma el número total de registros en la tabla después de todas las operaciones de limpieza, imputación y eliminación.
        </p>
        <SyntaxHighlighter language="sql" style={dracula} className="code-block">
          {code51}
        </SyntaxHighlighter>
        <p>Resultado: 43644 registros.</p>
        <p>
          Selección de datos para exportar: Esta consulta selecciona todas las columnas y filas de la tabla amazon, que ahora contiene los datos limpios y transformados.
        </p>
        <SyntaxHighlighter language="sql" style={dracula} className="code-block">
          {code52}
        </SyntaxHighlighter>
        <p>
          Pasos para exportar los datos desde MySQL Workbench: Después de ejecutar la consulta SELECT * FROM amazon;, puedes exportar los resultados 
          haciendo clic en la opción "Export" (o un icono similar a un disquete/flecha hacia abajo) que suele aparecer en la barra de herramientas de 
          resultados de la consulta en MySQL Workbench. Esto te permitirá guardar los datos en un formato de archivo como CSV, JSON, etc.
        </p>
        
        <h3>5. Análisis exploratorio de datos (EDA)</h3>
        <p>
          La fase inicial del Análisis Exploratorio de Datos (EDA) se utilizo Python y las librerías pandas, numpy, seaborn, matplotlib. 
          El objetivo es cargar el conjunto de datos limpio, comprender su estructura, tipos de datos y realizar las transformaciones necesarias para un análisis posterior.
        </p>
        <ol>
          <li>
            Carga de Librerías Necesarias Se importan las librerías pandas para la manipulación de datos, numpy para operaciones numéricas, y 
            seaborn junto con matplotlib.pyplot para la visualización de datos.
          </li>
          <SyntaxHighlighter language="python" style={dracula} className="code-block">
            {code53}
          </SyntaxHighlighter>
          <li>
            Carga del Conjunto de Datos El conjunto de datos amazon_delivery_limpios.csv, resultado de la fase de limpieza y preprocesamiento en MySQL, 
            se carga en un DataFrame de pandas. Se muestra las primeras filas para una inspección rápida.
          </li>
          <SyntaxHighlighter language="python" style={dracula} className="code-block">
            {code54}
          </SyntaxHighlighter>
          <p>Salida:</p>
          <div className="contenedor-tabla">
            <table>
              <thead>
                <tr>
                  <th>Order_ID</th>
                  <th>Agent_Age</th>
                  <th>Agent_Rating</th>
                  <th>Store_Latitude</th>
                  <th>Store_Longitude</th>
                  <th>Drop_Latitude</th>
                  <th>Drop_Longitude</th>
                  <th>Weather</th>
                  <th>Traffic</th>
                  <th>Vehicle</th>
                  <th>Area</th>
                  <th>Delivery_Time</th>
                  <th>Category</th>
                  <th>Order_Time</th>
                  <th>Pickup_Time</th>
                  <th>Order_Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0ialx56634361837</td>
                  <td>4.9</td>
                  <td>22</td>
                  <td>74.504975</td>
                  <td>89.2471</td>
                  <td>22.765049</td>
                  <td>75.912471</td>
                  <td>Sunny</td>
                  <td>High</td>
                  <td>motorcycle</td>
                  <td>Urban</td>
                  <td>120</td>
                  <td>Clothing</td>
                  <td>11:30:00</td>
                  <td>11:45:00</td>
                  <td>2022-03-19</td>
                </tr>
                <tr>
                  <td>1akqg20842112234</td>
                  <td>4.5</td>
                  <td>12</td>
                  <td>9130417</td>
                  <td>77.683237</td>
                  <td>13.043041</td>
                  <td>77.813237</td>
                  <td>Stormy</td>
                  <td>Jams</td>
                  <td>scooter</td>
                  <td>Metropolitian</td>
                  <td>165</td>
                  <td>Electronics</td>
                  <td>19:45:00</td>
                  <td>19:50:00</td>
                  <td>2022-03-25</td>
                </tr>
                <tr>
                  <td>2njpu43458253623</td>
                  <td>4.4</td>
                  <td>12</td>
                  <td>9142647</td>
                  <td>77.678400</td>
                  <td>12.924264</td>
                  <td>77.688400</td>
                  <td>Sandstorms</td>
                  <td>Low</td>
                  <td>motorcycle</td>
                  <td>Urban</td>
                  <td>130</td>
                  <td>Sports</td>
                  <td>08:30:00</td>
                  <td>08:45:00</td>
                  <td>2022-03-19</td>
                </tr>
                <tr>
                  <td>3rjto79612970038</td>
                  <td>4.7</td>
                  <td>11</td>
                  <td>0036697</td>
                  <td>76.976494</td>
                  <td>11.053669</td>
                  <td>77.026494</td>
                  <td>Sunny</td>
                  <td>Medium</td>
                  <td>motorcycle</td>
                  <td>Metropolitian</td>
                  <td>105</td>
                  <td>Cosmetics</td>
                  <td>18:00:00</td>
                  <td>18:10:00</td>
                  <td>2022-04-05</td>
                </tr>
                <tr>
                  <td>4zguw71627563832</td>
                  <td>4.6</td>
                  <td>12</td>
                  <td>9727938</td>
                  <td>80.249982</td>
                  <td>13.012793</td>
                  <td>80.289982</td>
                  <td>Cloudy</td>
                  <td>High</td>
                  <td>scooter</td>
                  <td>Metropolitian</td>
                  <td>150</td>
                  <td>Toys</td>
                  <td>13:30:00</td>
                  <td>13:45:00</td>
                  <td>2022-03-26</td>
                </tr>
              </tbody>
            </table>
          </div>
          <li>Exploración del Conjunto de Datos Se obtiene la cantidad de filas y columnas del DataFrame para entender su dimensionalidad.</li>
          <SyntaxHighlighter language="python" style={dracula} className="code-block">
            {code55}
          </SyntaxHighlighter>
          <p>Salida:</p>
          <SyntaxHighlighter language="bash" style={dracula} className="code-block">
            {salida1}
          </SyntaxHighlighter>
          <li>
            Tipos de Datos de Cada Columna Se utiliza el método info() para obtener un resumen conciso del DataFrame, incluyendo el número de 
            entradas no nulas y el tipo de dato de cada columna.
          </li>
          <SyntaxHighlighter language="python" style={dracula} className="code-block">
            {code56}
          </SyntaxHighlighter>
          <p>Salida:</p>
          <SyntaxHighlighter language="bash" style={dracula} className="code-block">
            {salida2}
          </SyntaxHighlighter>
          <p>
            Observaciones: Las columnas Order_Time, Pickup_Time y Order_Date fueron importadas como tipo object (cadena de texto) y necesitan ser 
            convertidas a tipos de datos de tiempo y fecha (timedelta y datetime respectivamente) para permitir operaciones temporales. Los tipos de 
            datos de las demás columnas son correctos.
          </p>
          <li>
            Transformación de Tipos de Datos Se realizan las conversiones de tipo de dato necesarias para las columnas de tiempo y fecha.
          </li>
          <p>Transformación de Order_Time y Pickup_Time a timedelta:`</p>
          <p>
            Se convierte la columna Order_Date a tipo datetime64[ns] utilizando pd.to_datetime(), especificando el formato para una conversión correcta.
          </p>
          <SyntaxHighlighter language="python" style={dracula} className="code-block">
            {code57}
          </SyntaxHighlighter>
          <p>Salida:</p>
          <SyntaxHighlighter language="bash" style={dracula} className="code-block">
            {salida3}
          </SyntaxHighlighter>
        </ol>
        
        <h4>1. Evaluar la Eficiencia General de las Entregas</h4>
        <h5>Tiempo Promedio de Entrega</h5>
        <p>Se calcula el tiempo promedio que tarda una entrega desde que el pedido es realizado hasta que llega al cliente.</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code58}
        </SyntaxHighlighter>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida4}
        </SyntaxHighlighter>
        <ul>
          <li><p>Análisis: El tiempo promedio de entrega es de 2 horas y 5 minutos (2:05).</p></li>
        </ul>
        <h5>Tiempo Promedio de Procesamiento del Pedido</h5>
        <p>
          Se calcula el tiempo que tarda la tienda o el centro de distribución en preparar el pedido para su recolección por parte del 
          agente de entrega, es decir, la diferencia entre Pickup_Time y Order_Time. Se manejan los casos donde Pickup_Time es anterior 
          a Order_Time (indicando una recogida al día siguiente) sumando un día.
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code59}
        </SyntaxHighlighter>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida5}
        </SyntaxHighlighter>
        <ul>
          <li>Análisis: El tiempo que tarda la tienda o el centro de distribución en preparar el pedido para su recolección es de aproximadamente 9 minutos y 59 segundos.</li>
        </ul>
        <h5>Porcentaje de Entregas a Tiempo</h5>
        <p>
          Se calcula el porcentaje de entregas que se consideran "a tiempo" basándose en un umbral determinado por el percentil 95 del tiempo de entrega histórico. 
          Esto permite definir "a tiempo" de una manera que se ajusta al comportamiento real de las entregas.
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code60}
        </SyntaxHighlighter>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida6}
        </SyntaxHighlighter>
        <ul>
          <li>Análisis: El 95.22% de los clientes esperan (y reciben) su pedido en 215 minutos (3 horas y 35 minutos). 
          "Se utiliza esta medida ya que no existe una parametros (tiempo estimado de "Entregas a tiempo")</li>
        </ul>
        <h5>Distancia Promedio de Entregas</h5>
        <p>
          Se calcula la distancia en kilómetros entre la ubicación de la tienda (Store_Latitude, Store_Longitude) y el punto de entrega (Drop_Latitude, Drop_Longitude) 
          utilizando la fórmula de Haversine. Esta distancia es un factor clave que influye en el tiempo de entrega.
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code61}
        </SyntaxHighlighter>
        <p>Salida (ejemplo de df_amazon_delivery.head(5) con la nueva columna):</p>
        <div className="contenedor-tabla">
          <table>
            <thead>
              <tr>
                <th>Order_ID</th>
                <th>Agent_Age</th>
                <th>Agent_Rating</th>
                <th>Store_Latitude</th>
                <th>Store_Longitude</th>
                <th>Drop_Latitude</th>
                <th>Drop_Longitude</th>
                <th>Weather</th>
                <th>Traffic</th>
                <th>Vehicle</th>
                <th>Area</th>
                <th>Delivery_Time</th>
                <th>Category</th>
                <th>Order_Time</th>
                <th>Pickup_Time</th>
                <th>Order_Date</th>
                <th>Order_Time_TD</th>
                <th>Pickup_Time_TD</th>
                <th>Order_Processing_Time</th>
                <th>Distance_km</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ialx56634361837</td>
                <td>4.9</td>
                <td>22</td>
                <td>74.504975</td>
                <td>89.2471</td>
                <td>22.765049</td>
                <td>75.912471</td>
                <td>Sunny</td>
                <td>High</td>
                <td>motorcycle</td>
                <td>Urban</td>
                <td>120</td>
                <td>Clothing</td>
                <td>11:30:00</td>
                <td>11:45:00</td>
                <td>2022-03-19</td>
                <td>0 days 11:30:00</td>
                <td>0 days 11:45:00</td>
                <td>0 days 00:15:00</td>
                <td>2.051173</td>
              </tr>
              <tr>
                <td>akqg20842112234</td>
                <td>4.5</td>
                <td>12</td>
                <td>9130417</td>
                <td>77.683237</td>
                <td>13.043041</td>
                <td>77.813237</td>
                <td>Stormy</td>
                <td>Jams</td>
                <td>scooter</td>
                <td>Metropolitian</td>
                <td>165</td>
                <td>Electronics</td>
                <td>19:45:00</td>
                <td>19:50:00</td>
                <td>2022-03-25</td>
                <td>0 days 19:45:00</td>
                <td>0 days 19:50:00</td>
                <td>0 days 00:05:00</td>
                <td>14.088346</td>
              </tr>
              <tr>
                <td>njpu43458253623</td>
                <td>4.4</td>
                <td>12</td>
                <td>9142647</td>
                <td>77.678400</td>
                <td>12.924264</td>
                <td>77.688400</td>
                <td>Sandstorms</td>
                <td>Low</td>
                <td>motorcycle</td>
                <td>Urban</td>
                <td>130</td>
                <td>Sports</td>
                <td>08:30:00</td>
                <td>08:45:00</td>
                <td>2022-03-19</td>
                <td>0 days 08:30:00</td>
                <td>0 days 08:45:00</td>
                <td>0 days 00:15:00</td>
                <td>1.083975</td>
              </tr>
              <tr>
                <td>rjto79612970038</td>
                <td>4.7</td>
                <td>11</td>
                <td>0036697</td>
                <td>76.976494</td>
                <td>11.053669</td>
                <td>77.026494</td>
                <td>Sunny</td>
                <td>Medium</td>
                <td>motorcycle</td>
                <td>Metropolitian</td>
                <td>105</td>
                <td>Cosmetics</td>
                <td>18:00:00</td>
                <td>18:10:00</td>
                <td>2022-04-05</td>
                <td>0 days 18:00:00</td>
                <td>0 days 18:10:00</td>
                <td>0 days 00:10:00</td>
                <td>5.457929</td>
              </tr>
              <tr>
                <td>zguw71627563832</td>
                <td>4.6</td>
                <td>12</td>
                <td>9727938</td>
                <td>80.249982</td>
                <td>13.012793</td>
                <td>80.289982</td>
                <td>Cloudy</td>
                <td>High</td>
                <td>scooter</td>
                <td>Metropolitian</td>
                <td>150</td>
                <td>Toys</td>
                <td>13:30:00</td>
                <td>13:45:00</td>
                <td>2022-03-26</td>
                <td>0 days 13:30:00</td>
                <td>0 days 13:45:00</td>
                <td>0 days 00:15:00</td>
                <td>4.334621</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida7}
        </SyntaxHighlighter>
        <ul>
          <li>Análisis: La distancia promedio de las entregas es de 10.37 kilómetros.</li>
        </ul>
        <h5>Impacto del Clima y Tráfico en el Tiempo de Entregas</h5>
        <p>
          Se analiza cómo las condiciones climáticas (Weather) y el estado del tráfico (Traffic) afectan el tiempo promedio de entrega. 
          Se crea una tabla dinámica para visualizar el tiempo promedio de entrega para cada combinación de clima y tráfico. 
          Se incluye una función para formatear los minutos a un formato de horas y minutos más legible.
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code62}
        </SyntaxHighlighter>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida8}
        </SyntaxHighlighter>
        <ul>
          <li>
            Análisis: La tabla dinámica muestra los diferentes tiempos de entrega (tanto en minutos como en formato de hora para facilitar la lectura). 
            Se observa claramente que las condiciones de tráfico "Jam" (atasco) y "High" (alto) resultan en tiempos de entrega significativamente mayores, 
            independientemente del clima. Las entregas en condiciones de tráfico "Low" (bajo) y clima "Sunny" (soleado) son las más rápidas.
          </li>
        </ul>
        <h5>Eficiencia por Tipo de Vehículo</h5>
        <p>Se analiza el tiempo promedio de entrega según el tipo de vehículo utilizado (Vehicle).</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code63}
        </SyntaxHighlighter>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida9}
        </SyntaxHighlighter>
        <ul>
          <li>
            Análisis: La tabla dinámica muestra el tiempo promedio que se tarda en entregar el paquete por tipo de vehículo. 
            Se observa que el scooter y la van son los tipos de vehículos que tienen un mejor tiempo promedio de entrega, 
            siendo ligeramente más rápidos que las motorcycle y bicycle.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AmazonDelivery;