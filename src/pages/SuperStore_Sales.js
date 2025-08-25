import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function SuperStoreSales() {

  const code = `
# Rellenar los valores nulos en la columna Postal Code
df_store_sales['Postal Code'] = df_store_sales['Postal Code'].fillna('05403')

# Transformación de columna Postal Code
df_store_sales['Postal Code'] = df_store_sales['Postal Code'].astype(str)

# Eliminar .0 de los demás datos
df_store_sales['Postal Code'] = df_store_sales['Postal Code'].str.replace('.0', '', regex=False)

# Verificación de la cantidad de valores nulos
valores_nulos = df_store_sales['Postal Code'].isnull().sum()
print(f'Cantidad de valores nulos: {valores_nulos}')
# Salida: Cantidad de valores nulos: 0

# Filas donde se imputaron los valores nulos
filas_05403 = df_store_sales[df_store_sales['Postal Code'] == '05403']
print(filas_05403)
  `;

  const salida1 = `
     KPIs de Ventas y Rendimiento Financiero

Ventas Totales: $2261536.78
Ventas Promedio por Pedido: $230.77

Ventas pro Categoria
Category
Furniture          728658.5757
Office Supplies    705422.3340
Technology         827455.8730
Name: Sales, dtype: float64

Ventas por Categoria y Sub-Categoria
Category         Sub-Category
Furniture        Bookcases       113813.1987
                 Chairs          322822.7310
                 Furnishings      89212.0180
                 Tables          202810.6280
Office Supplies  Appliances      104618.4030
                 Art              26705.4100
                 Binders         200028.7850
                 Envelopes        16128.0460
                 Fasteners         3001.9600
                 Labels           12347.7260
                 Paper            76828.3040
                 Storage         219343.3920
                 Supplies         46420.3080
Technology       Accessories     164186.7000
                 Copiers         146248.0940
                 Machines        189238.6310
                 Phones          327782.4480
Name: Sales, dtype: float64

Ventas por Región
Region
Central    492646.9132
East       669518.7260
South      389151.4590
West       710219.6845
Name: Sales, dtype: float64
  `;

  const salida2 = `
      KPIs de la Eficiencia Operativa    

Tiempo Promedio de Preparación(Días): 4 días
  `;

  const salida3 = `
       KPIs de Clientes y Mercado

Cantidad de Clientes Únicos: 793

Ventas por Cliente(Top 10)
Customer ID    Customer Name            Sales
SM-20320       Sean Miller              $ 25,043.05
TC-20980       Tamara Chand             $ 19,052.22
RB-19360       Raymond Buch             $ 15,117.34
TA-21385       Tom Ashbrook             $ 14,595.62
AB-10105       Adrian Barton            $ 14,473.57
KL-16645       Ken Lonsdale             $ 14,175.23
SC-20095       Sanjit Chand             $ 14,142.33
HL-15040       Hunter Lopez             $ 12,873.30
SE-20110       Sanjit Engle             $ 12,209.44
CC-12370       Christopher Conant       $ 12,129.07

Ventas por Segmento de Clientes
Segment           Sales
Consumer          $ 1,148,060.53
Corporate         $   688,494.07
Home Office       $   424,982.18
  `;

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

      <h3>3. Limpieza y preprocesamiento</h3>
      <p>
        A partir del análisis exploratorio y del manejo de valores atípicos, se procede a la fase de limpieza de datos. El único problema 
        identificado fue la presencia de 11 valores nulos en la columna Postal Code, lo cual se resolverá mediante una imputación.
      </p>

      <p>
        Se imputaron los valores faltantes en la columna Postal Code con el código 05403. Esta decisión se tomó al verificar que el 
        código postal de la ciudad de Burlington en Vermont (único registro sin Postal Code pero con todos los demás datos geográficos completos) es 05403.
      </p>

      <p>
        Adicionalmente, se realizó una transformación del tipo de dato de la columna Postal Code, convirtiéndola de float a un formato 
        de texto (string) y eliminando el .0 de los valores existentes para estandarizar el formato.
      </p>

      <p>
        El script de Python utilizado para esta tarea es el siguiente:
      </p>

      <SyntaxHighlighter language="python" style={dracula}>
        {code}
      </SyntaxHighlighter>

      <p>
        Nota: Las columnas de fecha (Order Date y Ship Date) se mantendrán en su formato actual y se convertirán a un tipo de dato de 
        fecha (datetime) solo cuando sea necesario para un análisis específico, a fin de optimizar el rendimiento y la memoria.
      </p>
      
      <p>
        Finalmente, el conjunto de datos, ahora limpio y preparado, se ha guardado en un nuevo archivo CSV llamado store_sales_limpio.csv 
        para su uso en futuras etapas del análisis.
      </p>

      <h3>4. Análisis exploratorio de datos (EDA)</h3>
      <p>
        Ahora que el conjunto de datos está limpio, es posible proceder al análisis de los principales indicadores de rendimiento (KPIs) 
        para obtener información valiosa sobre el negocio.
      </p>

      <p>
        KPI's de Ventas y Rendimiento Financiero
      </p>
      
      <ul>
        <li>Los ingresos totales acumulados a lo largo del periodo analizado, que reflejan el rendimiento global del negocio.</li>
        <li>El valor promedio de cada transacción, un indicador clave para entender el tamaño de las compras de los clientes.</li>
        <li>El análisis de ventas por categoría y subcategoría proporciona una visión detallada de los productos que más contribuyen a los ingresos. La categoría de Tecnología es la más rentable, seguida de Mobiliario y Material de Oficina.</li>
        <li>La distribución geográfica de las ventas revela cuáles son las regiones más importantes para el negocio.</li>
      </ul>

      <SyntaxHighlighter language="python" style={dracula}>
        {salida1}
      </SyntaxHighlighter>

      <p>KPI's de la Eficiencia Operativa</p>

      <lu>
        <li>Este KPI es fundamental para evaluar la agilidad de la cadena de suministro y la satisfacción del cliente. Un tiempo de preparación corto y consistente indica un proceso logístico eficiente y una capacidad sólida para cumplir con los pedidos de manera oportuna.</li>
      </lu>

      <SyntaxHighlighter language="python" style={dracula}>
        {salida2}
      </SyntaxHighlighter>

      <p>KPI's de Clientes y Mercado</p>

      <lu>
        <li>Se identificaron 793 clientes únicos, lo que indica una base de clientes relativamente amplia se muestran los 10 principales clientes por mayor ingresos generados por dichos clientes.</li>
        <li>Sean Miller es el cliente con el mayor gasto, superando los $25,000. Este enfoque en los clientes de alto valor es importante para el crecimiento futuro.</li>
        <li>El segmento de clientes "Consumer" es el más rentable, aportando más de la mitad de los ingresos totales. El segmento "Corporate" sigue en segundo lugar, mientras que el segmento "Home Office" es el que menos ingresos genera.</li>
      </lu>

      <SyntaxHighlighter language="python" style={dracula}>
        {salida3}
      </SyntaxHighlighter>

      <p>
        El análisis de los ingresos totales por producto ha permitido identificar a los 10 productos más vendidos en términos de ingresos 
        acumulados a lo largo de los cuatro años. 
      </p>

      <img src="/SuperStoreSales/productos_topmas_ventas.png" alt="Prodcutos Top de las Ventas"/>

      <p>
        El producto con el ingreso más alto es la Canon imageCLASS 2200 Advanced Copier, que generó $61,599.82 USD.
      </p>

      <img src="/SuperStoreSales/comportamiento_ventas_annios.png" alt="Comportamiento de las Ventas"/>

      <p>
        El comportamiento de las ventas a lo largo de los años 2015 a 2018 muestra un claro patrón estacional. Como se puede 
        ver en los gráficos, los meses de septiembre, noviembre y diciembre son consistentemente los de mayores ventas, lo que probablemente 
        se deba a la temporada de festividades. Por el contrario, los meses de febrero y agosto registran las ventas más bajas.
      </p>

      <p>
        Se ha obtenido un desglose de los ingresos generados por los clientes, destacando a aquellos que han aportado mayores ventas. 
        Sean Miller es el cliente con el mayor ingreso registrado, con $25,043.05 USD. Se identificó que los clientes más rentables 
        pertenecen principalmente a los segmentos de Consumer, Home Office y Corporate.
      </p>

      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Segment</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SM-20320</td>
            <td>Sean Miller</td>
            <td>Home Office</td>
            <td>25043.050</td>
          </tr>
          <tr>
            <td>TC-20980</td>
            <td>Tamara Chand</td>
            <td>Corporate</td>
            <td>19052.218</td>
          </tr>
          <tr>
            <td>RB-19360</td>
            <td>Raymond Buch</td>
            <td>Consumer</td>
            <td>15117.339</td>
          </tr>
          <tr>
            <td>TA-21385</td>
            <td>Tom Ashbrook</td>
            <td>Home Office</td>
            <td>14595.620</td>
          </tr>
          <tr>
            <td>AB-10105</td>
            <td>Adrian Barton</td>
            <td>Consumer</td>
            <td>14473.571</td>
          </tr>
          <tr>
            <td>KL-16645</td>
            <td>Ken Lonsdale</td>
            <td>Consumer</td>
            <td>14175.229</td>
          </tr>
          <tr>
            <td>SC-20095</td>
            <td>Sanjit Chand</td>
            <td>Consumer</td>
            <td>14142.334</td>
          </tr>
          <tr>
            <td>HL-15040</td>
            <td>Hunter Lopez</td>
            <td>Consumer</td>
            <td>12873.298</td>
          </tr>
          <tr>
            <td>SE-20110</td>
            <td>Sanjit Engle</td>
            <td>Consumer</td>
            <td>12209.438</td>
          </tr>
          <tr>
            <td>CC-12370</td>
            <td>Christopher Conant</td>
            <td>Consumer</td>
            <td>12129.072</td>
          </tr>
        </tbody>
      </table>

      <p>
        El análisis de ingresos por categorías y subcategorías revela cuáles son las áreas de negocio más rentables. Las subcategorías 
        de Phones, Chairs y Storage son las que más ingresos generan, dominando los sectores de Tecnología, Mobiliario y Material de Oficina.
      </p>

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sub-Category</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Technology</td>
            <td>Phones</td>
            <td>327782.4480</td>
          </tr>
          <tr>
            <td>Furniture</td>
            <td>Chairs</td>
            <td>322822.7310</td>
          </tr>
          <tr>
            <td>Office Supplies</td>
            <td>Storage</td>
            <td>219343.3920</td>
          </tr>
          <tr>
            <td>Furniture</td>
            <td>Tables</td>
            <td>202810.6280</td>
          </tr>
          <tr>
            <td>Office Supplies</td>
            <td>Binders</td>
            <td>200028.7850</td>
          </tr>
          <tr>
            <td>Technology</td>
            <td>Machines</td>
            <td>189238.6310</td>
          </tr>
          <tr>
            <td>Technology</td>
            <td>Accessories</td>
            <td>164186.7000</td>
          </tr>
          <tr>
            <td>Technology</td>
            <td>Copiers</td>
            <td>146248.0940</td>
          </tr>
          <tr>
            <td>Furniture</td>
            <td>Bookcases</td>
            <td>113813.1987</td>
          </tr>
          <tr>
            <td>Office Supplies</td>
            <td>Appliances</td>
            <td>104618.4030</td>
          </tr>
        </tbody>
      </table>

      <p>
        Finalmente, se ha obtenido información sobre los ingresos por ubicación geográfica, desglosando los datos por país, región, estado y ciudad. 
        Las ciudades de Jamestown (NY) y Lafayette (IN) son las que reportan mayores ingresos, con ventas que superan los $2,354 USD y $1,784 USD respectivamente.
      </p>

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Region</th>
            <th>State</th>
            <th>City</th>
            <th>Postal Code</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="10">United States</td>
            <td>East</td>
            <td>New York</td>
            <td>Jamestown</td>
            <td>14701</td>
            <td>2354.395000</td>
          </tr>
          <tr>
            <td>Central</td>
            <td>Indiana</td>
            <td>Lafayette</td>
            <td>47905</td>
            <td>1784.046364</td>
          </tr>
          <tr>
            <td>West</td>
            <td>Wyoming</td>
            <td>Cheyenne</td>
            <td>82001</td>
            <td>1603.136000</td>
          </tr>
          <tr>
            <td>West</td>
            <td>Washington</td>
            <td>Bellingham</td>
            <td>98226</td>
            <td>1263.413333</td>
          </tr>
          <tr>
            <td>Central</td>
            <td>Missouri</td>
            <td>Independence</td>
            <td>64055</td>
            <td>1208.685000</td>
          </tr>
          <tr>
            <td>South</td>
            <td>North Carolina</td>
            <td>Burlington</td>
            <td>27217</td>
            <td>1152.843818</td>
          </tr>
          <tr>
            <td>West</td>
            <td>California</td>
            <td>Burbank</td>
            <td>91505</td>
            <td>1082.386000</td>
          </tr>
          <tr>
            <td>East</td>
            <td>New York</td>
            <td>Buffalo</td>
            <td>14215</td>
            <td>906.349600</td>
          </tr>
          <tr>
            <td>East</td>
            <td>Massachusetts</td>
            <td>Beverly</td>
            <td>1915</td>
            <td>861.063333</td>
          </tr>
          <tr>
            <td>West</td>
            <td>Nevada</td>
            <td>Sparks</td>
            <td>89431</td>
            <td>853.986667</td>
          </tr>
        </tbody>
      </table>

      <h3>5. Modelado o reportes</h3>

      <p>
        En la siguiente fase del proyecto, se implementaron modelos de análisis para segmentar a los clientes, entender su comportamiento, optimizar las 
        operaciones y desarrollar estaegías avanzadas.
      </p>

      <p>Segmentación de Clientes con Análisis RFM</p>

      <p>
        Se utilizó el Análisis RFM (Recencia, Frecuencia, Monetario) para clasificar a los clientes en diferentes grupos estratégicos. 
        Este modelo evalúa el comportamiento de compra de cada cliente basándose en:
      </p>

      <lu>
        <li>Recencia (R): Cuánto tiempo ha pasado desde la última compra.</li>
        <li>Frecuencia (F): Con qué frecuencia el cliente realiza compras.</li>
        <li>Monetario (M): Cuánto dinero ha gastado el cliente en total.</li>
      </lu>

      <p>Este análisis ha permitido identificar dos grupos clave para la estrategia de negocio: Clientes VIP y Clientes en Riesgo.</p>

      <p>Clientes VIP</p>

      <p>
        Este segmento incluye a los clientes más valiosos y leales. Tienen una alta recencia (compran a menudo), una alta frecuencia y un alto valor monetario. 
        La estrategia para este grupo es de fidelización, ofreciéndoles promociones exclusivas, programas de lealtad y atención personalizada para mantener su compromiso.
      </p>

      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Recency</th>
            <th>Frequency</th>
            <th>Monetary</th>
            <th>R_score</th>
            <th>F_score</th>
            <th>M_score</th>
            <th>RFM_score</th>
            <th>Segmento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AB-10105</td>
            <td>41</td>
            <td>20</td>
            <td>14473.571</td>
            <td>4</td>
            <td>5</td>
            <td>5</td>
            <td>455</td>
            <td>VIP</td>
          </tr>
          <tr>
            <td>AH-10075</td>
            <td>34</td>
            <td>20</td>
            <td>3250.337</td>
            <td>4</td>
            <td>5</td>
            <td>4</td>
            <td>454</td>
            <td>VIP</td>
          </tr>
          <tr>
            <td>AI-10855</td>
            <td>13</td>
            <td>18</td>
            <td>4375.786</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>555</td>
            <td>VIP</td>
          </tr>
          <tr>
            <td>AS-10090</td>
            <td>28</td>
            <td>25</td>
            <td>3255.310</td>
            <td>4</td>
            <td>5</td>
            <td>4</td>
            <td>454</td>
            <td>VIP</td>
          </tr>
          <tr>
            <td>AT-10735</td>
            <td>13</td>
            <td>16</td>
            <td>3831.864</td>
            <td>5</td>
            <td>4</td>
            <td>4</td>
            <td>544</td>
            <td>VIP</td>
          </tr>
        </tbody>
      </table>

      <p>Clientes en Riesgo</p>

      <p>
        Este grupo está compuesto por clientes que no han realizado una compra en un tiempo considerable (baja recencia), tienen una baja frecuencia y un bajo valor monetario. 
        Estos clientes están en peligro de dejar de comprar por completo. La estrategia para este segmento debe enfocarse en la retención, a través de campañas de reactivación, 
        ofertas personalizadas o encuestas para entender la razón de su inactividad.
      </p>

      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Recency</th>
            <th>Frequency</th>
            <th>Monetary</th>
            <th>R_score</th>
            <th>F_score</th>
            <th>M_score</th>
            <th>RFM_score</th>
            <th>Segmento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AB-10015</td>
            <td>415</td>
            <td>6</td>
            <td>886.156</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>111</td>
            <td>En riesgo</td>
          </tr>
          <tr>
            <td>AC-10420</td>
            <td>232</td>
            <td>5</td>
            <td>925.800</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>111</td>
            <td>En riesgo</td>
          </tr>
          <tr>
            <td>AC-10660</td>
            <td>282</td>
            <td>6</td>
            <td>657.316</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>111</td>
            <td>En riesgo</td>
          </tr>
          <tr>
            <td>AF-10885</td>
            <td>415</td>
            <td>7</td>
            <td>861.565</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>111</td>
            <td>En riesgo</td>
          </tr>
          <tr>
            <td>AG-10300</td>
            <td>118</td>
            <td>5</td>
            <td>367.548</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>211</td>
            <td>En riesgo</td>
          </tr>
        </tbody>
      </table>      

      <p>Market Baskt Analysis</p>

      <p>
        Se realizó un Market Basket Analysis utilizando el algoritmo Apriori para identificar combinaciones de productos que se compran juntos con frecuencia. 
        Sin embargo, con el umbral de soporte (min_support) establecido en 0.002, no se encontraron conjuntos de productos que cumplieran con el criterio. Esto significa 
        que ninguna combinación de dos o más productos se compró junta en al menos el 0.2% de todas las transacciones.
      </p>

      <p>
        Este resultado sugiere que el conjunto de datos de Superstore Sales no tiene patrones de compra conjunta lo suficientemente fuertes o frecuentes para ser 
        detectados con el soporte mínimo actual. Para obtener resultados, se podría probar un valor de min_support más bajo, aunque esto podría generar una gran cantidad de 
        reglas de asociación menos significativas.
      </p>

      <p>Predicción de demanda (Arima/Prophet)</p>

      <p>
        Este modelo de series de tiempo es ideal para pronosticar datos con patrones estacionales y tendencias claras, como las ventas. El proceso consiste en:
      </p>

      <lu>
        <li>Seleccionar un producto del conjunto de datos.</li>
        <li>Agrupar las ventas de ese producto por mes.</li>
        <li>Entrenar el modelo Prophet con los datos históricos.</li>
        <li>Proyectar las ventas para los próximos 12 meses.</li>
      </lu>

      <p>En el ejemplo proporcionado, el modelo predijo la demanda para el producto "Riverside Furniture Stanwyck Manor Table Series".</p>

      <p>
        La gráfica muestra la proyección de la demanda del producto, combinando las ventas históricas (Ventas reales) con la predicción 
        del modelo (Predicción) y su respectivo Intervalo de confianza.
      </p>

      <img src="/SuperStoreSales/ejemplo_arima_prophet.png" alt='Ejemplo de productos' />

      <p>
        Se puede observar que la predicción captura el patrón estacional, con un pico significativo en abril de 2019, que probablemente se deba a la 
        misma estacionalidad que afecta a los meses de otoño de cada año (septiembre, noviembre y diciembre). La predicción para 2019 muestra una tendencia de 
        crecimiento para la segunda mitad del año.
      </p>

      <p>Los resultados numéricos de la proyección para los últimos 12 meses son los siguientes:</p>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>ds</th>
            <th>yhat</th>
            <th>yhat_lower</th>
            <th>yhat_upper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>42</td>
            <td>2018-10-31</td>
            <td>104.380368</td>
            <td>38.301542</td>
            <td>169.824553</td>
          </tr>
          <tr>
            <td>43</td>
            <td>2018-11-30</td>
            <td>111.117632</td>
            <td>48.140810</td>
            <td>180.131905</td>
          </tr>
          <tr>
            <td>44</td>
            <td>2018-12-31</td>
            <td>118.401803</td>
            <td>46.573913</td>
            <td>185.213402</td>
          </tr>
          <tr>
            <td>45</td>
            <td>2019-01-31</td>
            <td>123.434407</td>
            <td>53.825881</td>
            <td>188.312556</td>
          </tr>
          <tr>
            <td>46</td>
            <td>2019-02-28</td>
            <td>82.903667</td>
            <td>15.981512</td>
            <td>148.599781</td>
          </tr>
          <tr>
            <td>47</td>
            <td>2019-03-31</td>
            <td>96.812380</td>
            <td>23.706307</td>
            <td>166.625854</td>
          </tr>
          <tr>
            <td>48</td>
            <td>2019-04-30</td>
            <td>418.275813</td>
            <td>343.802698</td>
            <td>485.045790</td>
          </tr>
          <tr>
            <td>49</td>
            <td>2019-05-31</td>
            <td>57.192949</td>
            <td>-17.439616</td>
            <td>128.563516</td>
          </tr>
          <tr>
            <td>50</td>
            <td>2019-06-30</td>
            <td>94.289320</td>
            <td>16.170017</td>
            <td>168.344326</td>
          </tr>
          <tr>
            <td>51</td>
            <td>2019-07-31</td>
            <td>129.246162</td>
            <td>46.181183</td>
            <td>212.691419</td>
          </tr>
          <tr>
            <td>52</td>
            <td>2019-08-31</td>
            <td>162.789632</td>
            <td>73.549253</td>
            <td>252.682909</td>
          </tr>
          <tr>
            <td>53</td>
            <td>2019-09-30</td>
            <td>327.603421</td>
            <td>234.645271</td>
            <td>422.919121</td>
          </tr>
        </tbody>
      </table>      

      <p>
        Estos resultados permiten a la empresa tomar decisiones informadas sobre la gestión de inventario y la planificación de ventas para los próximos meses, 
        asegurando que se tenga el stock adecuado para cubrir la demanda proyectada.
      </p>

      <p>Análisis ABC-XYZ</p>

      <p>Este método es crucial para la gestión de inventario, ya que combina dos clasificaciones:</p>

      <lu>
        <li>Análisis ABC: Clasifica los productos según su contribución a los ingresos totales (principio de Pareto).</li>
          <dd><li>Clase A: Productos que representan aproximadamente el 80% de las ventas.</li></dd>
          <dd><li>Clase B: Productos que representan el siguiente 15% de las ventas.</li></dd>
          <dd><li>Clase C: Productos que representan el 5% restante de las ventas.</li></dd>
        <li>Análisis XYZ: Clasifica los productos según la variabilidad de su demanda.</li>
          <dd><li>Clase X: Demanda constante y predecible (bajo coeficiente de variación).</li></dd>
          <dd><li>Clase Y: Demanda con variaciones estacionales o de tendencia (coeficiente de variación medio).</li></dd>
          <dd><li>Clase Z: Demanda irregular e impredecible (alto coeficiente de variación).</li></dd>
      </lu>

      <p>La combinación de estas dos clasificaciones permite crear categorías de productos para una gestión de inventario más precisa.</p>

      <p>
        El análisis arrojó una clasificación detallada de cada producto. Por ejemplo, los productos más rentables, como la Canon imageCLASS 2200 Advanced Copier y 
        la Fellowes PB500 Electric Punch Plastic Comb Binding Machine, son clasificados como Clase A debido a su alta contribución a los ingresos.
      </p>

      <p>
        Sin embargo, en el análisis XYZ, la mayoría de los productos se clasifican como Clase Z debido a la alta variabilidad de sus ventas (representada por el coeficiente de variación, cv). 
        El valor NaN en la columna std y cv para muchos productos se debe a que solo hay una venta registrada, lo que impide el cálculo de la desviación estándar. 
        Esto sugiere una demanda generalmente irregular para muchos artículos.
      </p>

      <p>
        La combinación de ambas clasificaciones crea categorías de productos, como AZ (productos de alto valor con demanda impredecible) y 
        CZ (productos de bajo valor con demanda impredecible), lo que facilita la toma de decisiones estratégicas.
      </p>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Sales_totales</th>
            <th>Porcentaje</th>
            <th>Porcentaje_acumulado</th>
            <th>ABC</th>
            <th>mean</th>
            <th>std</th>
            <th>cv</th>
            <th>XYZ</th>
            <th>ABC_XYZ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Canon imageCLASS 2200 Advanced Copier</td>
            <td>61599.824</td>
            <td>2.723804</td>
            <td>2.723804</td>
            <td>A</td>
            <td>12319.964800</td>
            <td>3520.927315</td>
            <td>28.579037</td>
            <td>Z</td>
            <td>AZ</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Fellowes PB500 Electric Punch Plastic Comb Bin...</td>
            <td>27453.384</td>
            <td>1.213926</td>
            <td>3.937730</td>
            <td>A</td>
            <td>2745.338400</td>
            <td>1851.752901</td>
            <td>67.450807</td>
            <td>Z</td>
            <td>AZ</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cisco TelePresence System EX90 Videoconferenci...</td>
            <td>22638.480</td>
            <td>1.001022</td>
            <td>4.938752</td>
            <td>A</td>
            <td>22638.480000</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>Z</td>
            <td>AZ</td>
          </tr>
          <tr>
            <td>3</td>
            <td>HON 5400 Series Task Chairs for Big and Tall</td>
            <td>21870.576</td>
            <td>0.967067</td>
            <td>5.905819</td>
            <td>A</td>
            <td>2733.822000</td>
            <td>1212.397259</td>
            <td>44.348069</td>
            <td>Z</td>
            <td>AZ</td>
          </tr>
          <tr>
            <td>4</td>
            <td>GBC DocuBind TL300 Electric Binding System</td>
            <td>19823.479</td>
            <td>0.876549</td>
            <td>6.782368</td>
            <td>A</td>
            <td>1802.134455</td>
            <td>1032.477608</td>
            <td>57.291930</td>
            <td>Z</td>
            <td>AZ</td>
          </tr>
          <tr>
            <td>1844</td>
            <td>Acme Serrated Blade Letter Opener</td>
            <td>7.632</td>
            <td>0.000337</td>
            <td>99.999074</td>
            <td>C</td>
            <td>7.632000</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>Z</td>
            <td>CZ</td>
          </tr>
          <tr>
            <td>1845</td>
            <td>Grip Seal Envelopes</td>
            <td>7.072</td>
            <td>0.000313</td>
            <td>99.999387</td>
            <td>C</td>
            <td>7.072000</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>Z</td>
            <td>CZ</td>
          </tr>
          <tr>
            <td>1846</td>
            <td>Xerox 20</td>
            <td>6.480</td>
            <td>0.000287</td>
            <td>99.999673</td>
            <td>C</td>
            <td>6.480000</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>Z</td>
            <td>CZ</td>
          </tr>
          <tr>
            <td>1847</td>
            <td>Avery 5</td>
            <td>5.760</td>
            <td>0.000255</td>
            <td>99.999928</td>
            <td>C</td>
            <td>5.760000</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>Z</td>
            <td>CZ</td>
          </tr>
          <tr>
            <td>1848</td>
            <td>Eureka Disposable Bags for Sanitaire Vibra Gro...</td>
            <td>1.624</td>
            <td>0.000072</td>
            <td>100.000000</td>
            <td>C</td>
            <td>1.624000</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>Z</td>
            <td>CZ</td>
          </tr>
        </tbody>
      </table>

      <p>Segmentación por Comportamiento(Clustering: K-Means)</p>

      <p>
        Para finalizar, se implementó el Análisis de Segmentación por Comportamiento utilizando el algoritmo de clustering K-Means. 
        El objetivo es agrupar a los clientes con comportamientos de compra similares para crear perfiles detallados y diseñar estrategias de marketing más efectivas.
      </p>

      <p>Metodología K-Means</p>

      <lu>
        <li>Preparación de datos: Se calculó la Recencia, Frecuencia y Valor Monetario de cada cliente, y se escalaron los datos para que el algoritmo K-Means funcionara correctamente.</li>
        <li>Método del Codo: Se utilizó el Método del Codo para determinar el número óptimo de clústeres. Como se observa en el gráfico, el "codo" más pronunciado se encuentra en k=4, lo que indica que 4 clústeres son la mejor opción para segmentar a los clientes de manera significativa.</li>
        <img src="/SuperStoreSales/segmentacion_comportamiento_metodo_codo.png" alt="Método del Codo" />
        <li>Modelado y Segmentación: Se entrenó el modelo K-Means con k=4 y se asignó a cada cliente a un clúster. La visualización de los clústeres confirma que el modelo logró agrupar a los clientes de manera coherente.</li>
        <img src="/SuperStoreSales/segmentacion_comportamiento_seg_clientes_k_means.png" alt="Segmentación K Means" />
      </lu>

      <p>Perfiles de Clientes</p>

      <p>Los perfiles de cada clúster se crearon basándose en sus valores promedio de Recencia, Frecuencia y Valor Monetario.</p>

      <table>
        <thead>
          <tr>
            <th>Cluster</th>
            <th>Recency</th>
            <th>Frequency</th>
            <th>Monetary</th>
            <th>Num_Clientes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>73.24</td>
            <td>17.18</td>
            <td>3599.82</td>
            <td>268</td>
          </tr>
          <tr>
            <td>1</td>
            <td>93.18</td>
            <td>8.70</td>
            <td>1561.23</td>
            <td>357</td>
          </tr>
          <tr>
            <td>2</td>
            <td>110.64</td>
            <td>20.92</td>
            <td>9500.93</td>
            <td>61</td>
          </tr>
          <tr>
            <td>3</td>
            <td>541.57</td>
            <td>7.59</td>
            <td>1494.11</td>
            <td>107</td>
          </tr>
        </tbody>
      </table>
      
      <p>A partir de estos perfiles, se pueden definir los siguientes segmentos:</p>

      <lu>
        <li>Clúster 0: Compradores Frecuentes. Clientes con una recencia relativamente baja y una alta frecuencia de compra.</li>
        <li>Clúster 1: Compradores Ocasionales. Tienen una recencia y frecuencia promedio.</li>
        <li>Clúster 2: Grandes Compradores. Estos clientes tienen la recencia más alta y la frecuencia más alta, además del valor monetario más alto, por lo que son clientes de alto valor.</li>
        <li>Clúster 3: Clientes Inactivos. Tienen la recencia más alta, lo que indica que no han comprado en mucho tiempo. Tienen baja frecuencia y valor monetario.</li>
      </lu>

      <a href="https://github.com/SaitoM17/amazon_delivery" target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  );
}

export default SuperStoreSales;
