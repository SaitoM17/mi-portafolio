import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function MexicoTradeStatis() {

  const code1 = `df_2012_2023 = pd.concat([df_2012_2020, df_2021, df_2022, df_2023])
filas, columnas = df_2012_2023.shape

print('Filas y columnas del DataFrame 2012 - 2023 (unión de los 4 conjuntos de datos)')
print(f'Filas: {filas}\\nColumnas: {columnas}')`;

  const code2 = `# Verificar valores nulos
valores_nulos = df_2012_2023.isnull().sum()
print(f'Nulos\\n{valores_nulos}')

# Verificar duplicados
duplicados = df_2012_2023.duplicated().sum()
print(f'\\nDuplicados: {duplicados}')`;

  const code3 = `valores_negativos = df_2012_2023[df_2012_2023['value_usd'] < 0]
print(f'Cantidad de valores negativos: {len(valores_negativos)}')
valores_negativos.head(10)`;

  const code4 = `concept = valores_negativos['concept']
concept.value_counts()`;

  const code5 = `# Ver si hay otros conceptos con valores negativos distintos a la balanza comercial
otros_negativos = valores_negativos[~valores_negativos['concept'].str.contains('Trade Balance', case=False)]
print(f'Otros valores negativos fuera del concepto de balanza: {len(otros_negativos)}')
otros_negativos.head()`;

  const code6 = `Q1 = df_2012_2023['value_usd'].quantile(0.25)
Q3 = df_2012_2023['value_usd'].quantile(0.75)
IQR = Q3 - Q1
outliers = df_2012_2023[(df_2012_2023['value_usd'] < Q1 - 1.5 * IQR) | (df_2012_2023['value_usd'] > Q3 + 1.5 * IQR)]
print(f"Outliers detectados por IQR: {len(outliers)}")`;

  const code7 = `df_2012_2023.to_csv('../data/processed/mex_trade_2012_2023_clean.csv', index=False)
print('CSV guardado')`;

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
  
  const salida3 = `Filas y columnas del DataFrame 2012 - 2023 (unión de los 4 conjuntos de datos)
Filas: 2556
Columnas: 8`;

  const salida4 = `Nulos
prod_est     0
coverage     0
type         0
year         0
month        0
concept      0
value_usd    0
status       0
dtype: int64

Duplicados: 0`;

  const salida5 = `Cantidad de valores negativos: 199`;

  const salida6 = `concept
Total Trade Balance Exports Total - Imports Total CIF    115
Total Trade Balance Exports Total - Imports Total         84
Name: count, dtype: int64`;

  const salida7 = `Otros valores negativos fuera del concepto de balanza: 0`;

  const salida8 = `Outliers detectados por IQR: 0`;

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

        <h3>Limpieza y preprocesamiento</h3>
        <p>
          Durante esta fase, se llevó a cabo un proceso de limpieza y preparación de los conjuntos de datos de comercio exterior. 
          El objetivo principal fue consolidar la información y asegurar su calidad para análisis posteriores.
        </p>
        <p>
          Como primera acción, se procedió a unir los cuatro conjuntos de datos individuales (df_2012_2020, df_2021, df_2022, df_2023) 
          en un único DataFrame consolidado, denominado df_2012_2023, para facilitar la gestión y el análisis de todos los registros del período.
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code1}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida3}
        </SyntaxHighlighter>
        <p>
          El DataFrame resultante df_2012_2023 ahora contiene 2556 filas y 8 columnas. Se verificaron los tipos de datos de cada columna y 
          se confirmó que eran correctos, lo que eliminó la necesidad de realizar conversiones de tipo.
        </p>
        <p>
          Tras la consolidación de los datos, se realizó una nueva verificación exhaustiva de valores nulos y duplicados en el DataFrame 
          unificado para garantizar la integridad del conjunto de datos final. Los resultados confirmaron la ausencia total de ambos:
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code2}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida4}
        </SyntaxHighlighter>
        <p>
          Las columnas prod_est, coverage, type, concept, y status ya habían sido revisadas durante el EDA inicial y no se detectaron 
          errores ni la necesidad de limpieza adicional en sus entradas.
        </p>
        <p>
          Un punto crucial abordado en esta fase fue el análisis de los valores negativos identificados en la columna value_usd durante 
          el análisis preliminar:
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code3}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida5}
        </SyntaxHighlighter>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>prod_est</th>
              <th>coveragetype</th>
              <th>year</th>
              <th>month</th>
              <th>concept</th>
              <th>value_usd</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16</td>
              <td>Trade Balance of Goods of Mexico</td>
              <td>National</td>
              <td>Not applicable</td>
              <td>2012</td>
              <td>1</td>
              <td>Total Trade Balance Exports Total - Imports Total</td>
              <td>-267.418000</td>
              <td>Final Figures</td>
            </tr>
            <tr>
              <td>17</td>
              <td>Trade Balance of Goods of Mexico</td>
              <td>National</td>
              <td>Not applicable</td>
              <td>2012</td>
              <td>1</td>
              <td>Total Trade Balance Exports Total - Imports To...</td>
              <td>-1013.224000</td>
              <td>Final Figures</td>
            </tr>
            <tr>
              <td>35</td>
              <td>Trade Balance of Goods of Mexico</td>
              <td>National</td>
              <td>Not applicable</td>
              <td>2012</td>
              <td>2</td>
              <td>Total Trade Balance Exports Total - Imports To...</td>
              <td>-267.776000</td>
              <td>Final Figures</td>
            </tr>
            <tr>
              <td>71</td>
              <td>Trade Balance of Goods of Mexico</td>
              <td>National</td>
              <td>Not applicable</td>
              <td>2012</td>
              <td>4</td>
              <td>Total Trade Balance Exports Total - Imports To...</td>
              <td>-366.619000</td>
              <td>Final Figures</td>
            </tr>
            <tr>
              <td>89</td>
              <td>Trade Balance of Goods of Mexico</td>
              <td>National</td>
              <td>Not applicable</td>
              <td>2012</td>
              <td>5</td>
              <td>Total Trade Balance Exports Total - Imports To...</td>
              <td>-532.382000</td>
              <td>Final Figures</td>
            </tr>
            <tr>
              <td>107</td>
              <td>Trade Balance of Goods of Mexico</td>
              <td>National</td>
              <td>Not applicable</td>
              <td>2012</td>
              <td>6</td>
              <td>Total Trade Balance Exports Total - Imports To...</td>
              <td>-166.668000</td>
              <td>Final Figures</td>
            </tr>
            <tr>
              <td>124</td>
              <td>Trade Balance of Goods of Mexico</td>
              <td>National</td>
              <td>Not applicable</td>
              <td>2012</td>
              <td>7</td>
              <td>Total Trade Balance Exports Total - Imports Total</td>
              <td>-409.644000</td>
              <td>Final Figures</td>
            </tr>
            <tr>
              <td>125</td>
              <td>Trade Balance of Goods of Mexico</td>
              <td>National</td>
              <td>Not applicable</td>
              <td>2012</td>
              <td>7</td>
              <td>Total Trade Balance Exports Total - Imports To...</td>
              <td>-1224.047000</td>
              <td>Final Figures</td>
            </tr>
            <tr>
              <td>142</td>
              <td>Trade Balance of Goods of Mexico</td>
              <td>National</td>
              <td>Not applicable</td>
              <td>2012</td>
              <td>8</td>
              <td>Total Trade Balance Exports Total - Imports Total</td>
              <td>-981.812999</td>
              <td>Final Figures</td>
            </tr>
            <tr>
              <td>143</td>
              <td>Trade Balance of Goods of Mexico</td>
              <td>National</td>
              <td>Not applicable</td>
              <td>2012</td>
              <td>8</td>
              <td>Total Trade Balance Exports Total - Imports To...</td>
              <td>-1844.143000</td>
              <td>Final Figures</td>
            </tr>
          </tbody>
        </table>
        <p>Se investigó el tipo de conceptos asociados a estos valores negativos:</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code4}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida6}
        </SyntaxHighlighter>
        <p>
          Adicionalmente, se verificó si existían valores negativos bajo cualquier otro concepto diferente a la balanza comercial:
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code5}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida7}
        </SyntaxHighlighter>
        <p>
          Los resultados confirman que los valores negativos en value_usd corresponden exclusivamente a los conceptos de balanza comercial 
          (Total Trade Balance Exports Total - Imports Total y Total Trade Balance Exports Total - Imports Total CIF). Esto reitera la 
          conclusión del análisis preliminar: estos valores no son errores de origen, sino una representación válida de periodos con 
          déficit comercial (cuando las importaciones superan a las exportaciones), y por lo tanto, se retienen en el conjunto de datos 
          por su relevancia para el análisis económico del país.
        </p>
        <p>
          Como parte final de la limpieza y el procesamiento, se realizó una búsqueda de valores atípicos (outliers) en la columna 
          value_usd utilizando el método del rango intercuartílico (IQR):
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code6}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida8}
        </SyntaxHighlighter>
        <img src="\MexicoTrade\deteccion_outliers_valores_comerciales.png" alt="Detección de outliers valores" className="imagen-proyecto"/>
        <p>
          No se identificaron valores atípicos que se consideren relevantes o que pudieran afectar negativamente los objetivos del proyecto.
        </p>
        <p>
          Finalmente, el conjunto de datos consolidado y validado fue guardado en formato CSV para su uso en análisis posteriores:
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code7}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default MexicoTradeStatis;