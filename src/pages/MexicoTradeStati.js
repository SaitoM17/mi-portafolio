import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function MexicoTradeStatis() {

  const salida1 = `Filas y columnas de DatFrame df_2012_2020
Filas: 1944
Columnas: 8

Filas y columnas de DatFrame df_2021
Filas: 216
Columnas: 8

Filas y columnas de DatFrame df_2022
Filas: 216
Columnas: 8

Filas y columnas de DatFrame df_2023
Filas: 180
Columnas: 8`;

  const salida2 = `Cantidad de valores nulos en conjunto de datos 2012 - 2020
prod_est     0
coverage     0
type         0
year         0
month        0
concept      0
value_usd    0
status       0
dtype: int64

Cantidad de valores nulos en conjunto de datos 2021
prod_est     0
coverage     0
type         0
year         0
month        0
concept      0
value_usd    0
status       0
dtype: int64

Cantidad de valores nulos en conjuntos de datos 2022
prod_est     0
coverage     0
type         0
year         0
month        0
concept      0
value_usd    0
status       0
dtype: int64

Cantidad de valores nulos en conjuntos de datos 2023
prod_est     0
coverage     0
type         0
year         0
month        0
concept      0
value_usd    0
status       0
dtype: int64

Cantidad de duplicados en conjunto de datos 2012 - 2020
0

Cantidad de duplicados en conjunto de datos 2021
0

Cantidad de duplicados en conjunto de datos 2022
0

Cantidad de duplicados en conjunto de datos 2023
0
`;

  return (
    <div className="pagina-proyecto">
      <div className="contenedor-proyecto">

        <h1>📊 Análisis "Mexico Trade Statistics 2012 - 2023"</h1>
        <img src="/img/Trade_Statistics.jpg" alt="Trade Principal" className="imagen-principal"/>

        <h2>🎯 Propósito</h2>
        <p>
          Analizar la evolución del comercio exterior de México entre 2012 y 2023, identificando los principales 
          socios comerciales, productos clave, tendencias de exportación e importación, y patrones económicos 
          relevantes mediante técnicas de análisis de datos.
        </p>

        <h2>🧪 Desarrollo del Proyecto</h2>

        <h3>Carga y exploración inicial de los datos</h3>
        <p>
          El análisis del comercio exterior de México, abarcando el período 2012-2023, se inició con la adquisición de 
          los conjuntos de datos de "Official Mexico Trade Statistics (2012-2023)" de Kaggle, publicados por e_landeros. 
          La primera etapa se centró en un análisis exploratorio preliminar (EDA) con el objetivo de comprender la estructura, 
          volumen, variables y la calidad de los datos, incluyendo la identificación de valores nulos, duplicados e inconsistencias.
        </p>
        <p>Como primer paso, se analizó la cantidad de filas y columnas de cada conjunto de datos:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida1}
        </SyntaxHighlighter>
        <p>
          Durante la exploración preliminar, el uso de la función .info() en los cuatro conjuntos de datos permitió determinar que 
          todos poseen las mismas columnas y tipos de datos consistentes. Dado que los tipos de datos eran correctos y uniformes, 
          no fue necesaria ninguna transformación en esta etapa.
        </p>
        <p>
          Se realizó una inspección detallada de las entradas (registros) en cada columna de los cuatro conjuntos de datos para 
          identificar posibles errores. Esta exploración exhaustiva confirmó la ausencia de cualquier tipo de error en los registros.
        </p>
        <p>Asimismo, se llevó a cabo una verificación minuciosa de valores nulos y duplicados en todos los conjuntos de datos:</p>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida2}
        </SyntaxHighlighter>
        <p>
          Un punto importante de este EDA fue la identificación de registros con valores negativos en la columna value_usd a lo 
          largo de los cuatro conjuntos de datos. Se determinó que estos valores negativos no constituyen errores, sino que 
          representan meses en los que la balanza comercial fue deficitaria, es decir, las importaciones superaron a las exportaciones. 
          Dada su relevancia económica y su capacidad para reflejar la dinámica comercial real del país en ciertos períodos, estos 
          registros se mantuvieron en el análisis, ya que aportan un valor significativo al estudio del comportamiento del comercio 
          y permiten la detección de patrones de déficit.
        </p>
        <p>
          En conclusión, este análisis exploratorio preliminar no identificó problemas de calidad significativos en los conjuntos de datos, 
          asegurando una base robusta y fiable para fases de análisis más avanzadas.
        </p>
      </div>
    </div>
  );
}

export default MexicoTradeStatis;