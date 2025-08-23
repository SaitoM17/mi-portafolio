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

      <a href="https://github.com/SaitoM17/amazon_delivery" target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  );
}

export default SuperStoreSales;
