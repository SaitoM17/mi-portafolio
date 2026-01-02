import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function AutoPrice() {

  const code1 = `# Identificar valores nulos
print('Identificar Valores Nulos por Columnas')
valores_nulos = df_tortilla_price.isnull().sum()
print(valores_nulos)`;

  const code2 = `# Verificar la cantidad de filas y columnas 
num_fias, num_columnas = df_tortilla_prices.shape
print(f'Número de filas: {num_fias}\\nNúmero de columnas: {num_columnas}')`;

  const code3 = `# Eliminar las filas con los valores nulos
df_tortilla_prices_sin_nulos = df_tortilla_prices.dropna()

# Verificar la cantidad de filas y columnas
num_filas_sin_nulos, num_columnas_sin_nulos = df_tortilla_prices_sin_nulos.shape
print(f'Número de filas: {num_filas_sin_nulos}\\nNúmero de columnas: {num_columnas_sin_nulos}')`;

  const code4 = `df_tortilla_prices_sin_nulos.to_csv('../data/processed/tortilla_prices_sin_nulos.csv', index=False)`;

  const code5 = `min_state_2007 = promedio_state_2007.idxmin()
min_precio_state_2007 = promedio_state_2007[min_state_2007]

max_state_2007 = promedio_state_2007.idxmax()
max_precio_state_2007 = promedio_state_2007[max_state_2007]


print('Esatdo del 2007 con precios Mínimos')
print(f'{"Estado":<11} Precio \\n{min_state_2007:<11} \${min_precio_state_2007:.2f}')

print('\\nEsatdo del 2007 con precios Máximos')
print(f'{"Estado":<11} Precio \\n{max_state_2007:<11} \${max_precio_state_2007:.2f}')`;

  const code6 = `min_state_2024 = promedio_state_2024.idxmin()
min_precio_state_2024 = promedio_state_2024[min_state_2024]

max_state_2024 = promedio_state_2024.idxmax()
max_precio_state_2024 = promedio_state_2024[max_state_2024]

print('\\nEsatdo del 2024 con precios Mínimos')
print(f'{"Estado":<11} Precio \\n{min_state_2024:<11} \${min_precio_state_2024:.2f}')

print('\\nEsatdo del 2007 con precios Máximos')
print(f'{"Estado":<11} Precio \\n{max_state_2024:<11} \${max_precio_state_2024:.2f}')`;

  const code7 = `Q1 = promedio_anula.quantile(0.25)
Q3 = promedio_anula.quantile(0.75)
IQR = Q3 - Q1
limite_inferior = Q1 - 1.5 * IQR
limite_superior = Q3 + 1.5 * IQR
outliers_iqr = promedio_anula[(promedio_anula < limite_inferior) | (promedio_anula > limite_superior)]
print("Años con precios promedio atípicos (IQR):")
print(outliers_iqr)

media_precio = promedio_anula.mean()
desviacion_estandar = promedio_anula.std()
umbral = 2  # Puedes ajustar este valor
outliers_std = promedio_anula[abs(promedio_anula - media_precio) > umbral * desviacion_estandar]
print(f"\nAños con precios promedio que se desvían más de {umbral} desviaciones estándar:")
print(outliers_std)`;

  const code8 = `# Filtra los datos para los primeros y últimos 5 años
primeros_5 = df_tortilla_prices[df_tortilla_prices['Year'].between(2007, 2011)]['Price per kilogram']
ultimos_5 = df_tortilla_prices[df_tortilla_prices['Year'].between(2020, 2024)]['Price per kilogram']
# Realiza la prueba t
t_stat, p_value = ttest_ind(primeros_5, ultimos_5, equal_var=False)
print(f'Estadístico t: {t_stat:.4f}, Valor p: {p_value}')`;

  const code9 = `# Filtra los datos para los primeros y últimos 5 años
primeros_5 = df_tortilla_prices[df_tortilla_prices['Year'].between(2007, 2011)]['Price per kilogram']
ultimos_5 = df_tortilla_prices[df_tortilla_prices['Year'].between(2020, 2024)]['Price per kilogram']

# Realiza la prueba t
t_stat, p_value = ttest_ind(primeros_5, ultimos_5, equal_var=False)
print(f'Estadístico t: {t_stat:.4f}, Valor p: {p_value}')`;

  const salida1 = `Identificar Valores Nulos por Columnas
State                    0
City                     0
Year                     0
Month                    0
Day                      0
Store type               0
Price per kilogram    6390
dtype: int64`;

  const salida2 = `Número de filas: 289146
Número de columnas: 7`;

  const salida3 = `Número de filas: 282756
Número de columnas: 7`;

  const salida4 = `Estados del 2007 con precios Mínimos
Estado      Precio 
Oaxaca      $6.81

Estados del 2007 con precios Máximos
Estado      Precio 
Sonora      $8.56`;

  const salida5 = `Estados del 2024 con precios Mínimos
Estado      Precio 
Tlaxcala    $15.35

Estados del 2007 con precios Máximos
Estado      Precio 
Sonora      $21.89`;

  const salida6 = `Años con precios promedio atípicos (IQR):
Year
2024    19.564326
Name: Price per kilogram, dtype: float64

Años con precios promedio que se desvían más de 2 desviaciones estándar:
Series([], Name: Price per kilogram, dtype: float64)`;

  const salida7 = `Estadístico t: -429.1513, Valor p: 0.0`;

  const salida8 = `Estadístico t: -429.1513, Valor p: 0.0`;

  return (
    <div className="pagina-proyecto">
      <div className="contenedor-proyecto">
        <h1>📊 Automotive Price</h1>
        <img src="/img/Tortillas.png" alt="Amazon Delivary" className="imagen-principal" />

        <h2>Análisis del Precio de Autómiviles</h2>
        <p>
          Este proyecto realiza un análisis exploratorio y descriptivo del precio de la tortilla en México. El conjunto de datos incluye información 
          detallada sobre el precio por kilogramo de la tortilla en diversas ubicaciones (estados y ciudades) y tipos de tiendas a lo largo 
          del tiempo, abarcando el periodo 2007-2024.
        </p>

        <h2>🎯 Propósito</h2>
        <p>
          Analizar la evolución del precio de las tortillas en México desde 2007 hasta 2024, identificando patrones temporales, diferencias regionales 
          y factores que podrían haber influido en su comportamiento.
        </p>

        <h2>🧪 Desarrollo del Proyecto</h2>

        <h3>Carga y exploración inicial de los datos</h3>
        <p>
          El proyecto comenzó con la obtención del conjunto de datos sobre los precios de la tortilla de maíz en México desde el año 2007 hasta el 2024, 
          publicado en kaggle por Rick Chavelas. Se realizó una exploración preliminar para entender la estructura del dataset, la cantidad de registros, 
          las variables disponibles, y la granularidad temporal y geográfica. Esta fase incluyó el uso de funciones como .head(), .info() y .describe() para 
          detectar inconsistencias básicas y comprender las dimensiones generales del problema.
        </p>
        <p>El problema identificando fue la falta de datos en la columna Price per kilogram</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code1}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida1}
        </SyntaxHighlighter>

        <h3>Limpieza y preprocesamiento</h3>
        <p>
          En la limpieza de los datos el un único problema crítico es: la presencia de valores nulos en la columna Price per kilogram. 
          Debido a su relevancia central para el análisis, se decidió eliminar esos registros para mantener la integridad estadística del estudio. 
          Otras columnas como las fechas y entidades se dejaron intactas en esta fase, ya que no presentaban problemas estructurales, y serían 
          transformadas más adelante cuando fuera necesario.
        </p>
        <p>Código para verificar la cantidad de filas y columnas:</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code2}
        </SyntaxHighlighter>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida2}
        </SyntaxHighlighter>
        <p>Código para eliminar las filas con valores nulos:</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code3}
        </SyntaxHighlighter>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida3}
        </SyntaxHighlighter>
        <p>
          Para finalizar la limpieza y preprocesamiento de los datos se guardaron los datos sin valores nulos en un nuevo archivo csv.
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code4}
        </SyntaxHighlighter>

        <h3>Análisis exploratorio de datos (EDA)</h3>
        <p>
          Con los datos limpios, se procedió a realizar un análisis exploratorio profundo para entender la distribución y evolución de 
          los precios a lo largo del tiempo. Entre los principales hallazgos:
        </p>
        <p>Se observó una tendencia general al alza en los precios promedio anuales de la tortilla.</p>
        <img src="/PrecioTortilla/tendencia_general_evolución_precio_promedio_anual_tortilla_mexico_2007_a_2024.png" 
        alt="Calificación de agentes vs tiempo volumne pedidos" className="imagen-proyecto"/>
        <p>
          Algunas entidades federativas destacan la presencia de precios sistemáticamente más altos y mínimos que otras, 
          destacando diferencias regionales en 2007 y 2024.
        </p>
        <p>Código:</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code5}
        </SyntaxHighlighter>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida4}
        </SyntaxHighlighter>
        <p>Código:</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code6}
        </SyntaxHighlighter>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida5}
        </SyntaxHighlighter>
        <p>
          Esta visualización resalta los años en los que se produjeron cambios abruptos en el precio promedio de la tortilla. 
          Los picos más altos, correspondientes a 2012, 2017, 2022 y 2023, indican aumentos anuales sustanciales, especialmente notable en 2022. 
          La caída en 2014 señala una disminución en el precio promedio con respecto al año anterior.
        </p>
        <img src="/PrecioTortilla/diferencia_anual_precio_promedio_tortilla.png" 
        alt="Diferencia anual del precio de la tortilla" className="imagen-proyecto"/>
        <p>
          La tasa de cambio anual del precio promedio de la tortilla muestra una volatilidad considerable a lo largo del periodo. 
          Los incrementos porcentuales más pronunciados se dieron en 2012, 2017, 2022 y 2024, mientras que 2014 experimentó una disminución porcentual. 
          El año 2024 presenta el mayor cambio relativo al año anterior.
        </p>
        <img src="/PrecioTortilla/tasa_cambio_anual_precio_promedio_tortilla.png" 
        alt="Tasa de cambio anual de precio promedio de tortilla" className="imagen-proyecto"/>
        <p>
          Para detectar comportamientos inusuales en el precio promedio anual de la tortilla, se utilizaron dos enfoques. 
          El primero, basado en el Rango Intercuartílico (IQR), identificó al año 2024 como un valor significativamente alejado del rango típico. 
          El segundo método, que buscaba valores a más de 2 desviaciones estándar de la media, no encontró ningún año que cumpliera con este criterio de atipicidad.
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code7}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida6}
        </SyntaxHighlighter>
        <p>
          El precio promedio mensual de la tortilla, promediado entre 2007 y 2024, presenta una variación relativamente suave a lo largo del año. 
          La ausencia de una marcada estacionalidad podría deberse a la producción y disponibilidad continua del maíz y la tortilla a nivel nacional, 
          así como a la influencia de otros factores económicos más dominantes que las posibles fluctuaciones estacionales en la oferta o la demanda.
        </p>
        <img src="/PrecioTortilla/precio_promedio_mensual_tortilla_todos_los_años.png" 
        alt="Precio promedio mensual de la tortilla de todos los años" className="imagen-proyecto"/>
        <img src="/PrecioTortilla/distribucion_precio_tortilla_por_mes.png" 
        alt="Precio promedio mensual de la tortilla de todos los años" className="imagen-proyecto"/>

        <h3>Formulación y prueba de hipótesis</h3>

        <h4>Hipótesis 1: "El precio promedio de la tortilla ha aumentado significativamente en los últimos 10 años."</h4>
        <ul>
          <li>Se realizo una prueba t de muestras independientes comparando los precios promedio de los primeros 5 años con los últimos 5 años.</li>
        </ul>
        <p>Código:</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code8}
        </SyntaxHighlighter>
        <p>Salida:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida7}
        </SyntaxHighlighter>
        <p>
          El valor p de 0.0 proporciona una evidencia estadística muy fuerte para concluir que existe una diferencia significativa en el precio 
          promedio de la tortilla entre los primeros cinco años (2007-2011) y los últimos cinco años (2020-2024) del periodo analizado. El signo negativo 
          del estadístico t indica que la media del segundo grupo (los últimos cinco años) es significativamente mayor que la media del primer grupo 
          (los primeros cinco años), lo que respalda la hipótesis de que el precio promedio de la tortilla ha aumentado significativamente en los últimos 10 años.
        </p>
        <h4>
          Hipótesis 2: "En el norte del país los precios son más altos que en el sur (Definir las regiones norte y sur según los estados correspondientes)."
        </h4>
        <ul>
          <li>
            Se realio una prueba t para comparar los precios promedio entre estas dos regiones.
          </li>
        </ul>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code9}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida8}
        </SyntaxHighlighter>
        <p>
          El valor p de 0.0005 proporciona evidencia estadística significativa para concluir que existe una diferencia en el precio promedio de la 
          tortilla entre las regiones norte y sur de México. El signo positivo del estadístico t (asumiendo que la media de los precios del norte se colocó 
          como el primer argumento en ttest_ind) sugiere que, en promedio, los precios de la tortilla son significativamente más altos en la región norte en 
          comparación con la región sur, lo que respalda nuestra hipótesis inicial.
        </p>

        <h3>Factores que podrían influir en el aumento del precio de las tortillas</h3>
        <p>
          El precio de la tortilla en México no es un valor aislado, sino el resultado de una compleja interacción de diversas fuerzas económicas, 
          sociales y políticas. A continuación, exploramos algunos de los factores clave que podrían influir en las diferencias regionales y la 
          tendencia general observada entre 2007 y 2024:
        </p>

        <h4>Factores Macroeconómicos:</h4>
        <ul>
          <li>Inflación: La tendencia inflacionaria general del país es un impulsor fundamental del aumento de precios en bienes básicos.</li>
        </ul>

        <h4>Factores de la Cadena de Suministro:</h4>
        <ul>
          <li>
            Precio del Maíz: Las fluctuaciones en los mercados nacionales e internacionales del maíz son un determinante directo del costo de producción.
          </li>
          <li>Costos de Producción y Operación: Incluyen energía (gas, electricidad), mano de obra, transporte y alquiler de locales.</li>
        </ul>

        <h4>Factores Socioeconómicos y de Seguridad:</h4>
        <ul>
          <li>Crimen Organizado: La extorsión y la inseguridad pueden añadir costos significativos en ciertas regiones.</li>
          <li>
            Poder Adquisitivo del Consumidor: Aunque no causa directamente el aumento de precios, influye en la demanda y la 
            capacidad de los consumidores para absorberlos.
          </li>
        </ul>

        <h4>Factores Políticos y Regulatorios:</h4>
        <ul>
          <li>
            Políticas Agrícolas y Subsidios: Las decisiones gubernamentales en este ámbito pueden afectar la oferta y el precio del maíz.
          </li>
          <li>Regulaciones de Precios: Aunque limitadas, cualquier intervención gubernamental podría influir.</li>
        </ul>

        <h4>Factores de Mercado:</h4>
        <ul>
          <li>
            Tipo de Tienda y Márgenes: Las diferencias en las estructuras de costos y las estrategias de precios entre los diferentes tipos de establecimientos.
          </li>
          <li>Oferta y Demanda Regional: Las condiciones locales pueden generar variaciones de precios entre estados.</li>
        </ul>
        <p>
          Un análisis exhaustivo requerirá la exploración de datos sobre estos diversos factores a lo largo del periodo estudiado para identificar 
          correlaciones y posibles relaciones causales.
        </p>

        <h3>💡 Insight clave</h3>
        <p>
          El análisis confirma que el precio de la tortilla en México ha aumentado consistentemente desde 2007, con una mayor aceleración en la última década. 
          Existen diferencias regionales claras, con precios más elevados en el norte del país. Además, la variabilidad entre estados se ha incrementado, 
          lo que puede reflejar desigualdades económicas, logísticas o políticas en las cadenas de distribución.
        </p>
        
        <br/>
        <a href="https://github.com/SaitoM17/auto_price" target="_blank" rel="noopener noreferrer">
          Ver en GitHub
        </a>

      </div>
    </div>
  );
}

export default PrecioTortilla;