import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function PrecioTortilla() {

  const code1 = `# Identificar valores nulos
print('Identificar Valores Nulos por Columnas')
valores_nulos = df_tortilla_price.isnull().sum()
print(valores_nulos)`;

  const salida1 = `Identificar Valores Nulos por Columnas
State                    0
City                     0
Year                     0
Month                    0
Day                      0
Store type               0
Price per kilogram    6390
dtype: int64`;

  return (
    <div className="pagina-proyecto">
      <div className="contenedor-proyecto">
        <h1>📊 Precio de las tortillas en México</h1>
        <img src="/img/Tortillas.png" alt="Amazon Delivary" className="imagen-principal" />

        <h2>Análisis del Precio de las Tortillas en México 2007 - 2024</h2>
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
      </div>
    </div>
  );
}

export default PrecioTortilla;