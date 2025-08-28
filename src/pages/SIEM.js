import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function SIEM() {

  const code1 = `print('Valores nulos por columnas')
valores_nulos = df_siem.isnull().sum()
print(valores_nulos)`;

  const code2 = `for nombre_columna in df_siem.columns:
    valores_duplicados = df_siem[nombre_columna].duplicated().sum()
    print(f'Valores duplicados en la columna {nombre_columna:<20}{valores_duplicados}')
    print('-' * 60)`;

  const salida1 = `Valores nulos por columnas
razon_social              71
estado                     0
municipio                  0
domicilio                  0
colonia                    0
cp                         0
telefono               34331
e_mail                 59180
giro                     257
scian                      0
rango_de_empleados         0
registrado_por             0
fn_razon_social       147849
fn_telefono            34353
fn_e_mail             147832
fn_giro               147694
estado_etq                 0
dtype: int64`;

  const salida2 = `Valores duplicados en la columna razon_social        33812
------------------------------------------------------------
Valores duplicados en la columna estado              147819
------------------------------------------------------------
Valores duplicados en la columna municipio           146712
------------------------------------------------------------
Valores duplicados en la columna domicilio           10739
------------------------------------------------------------
Valores duplicados en la columna colonia             117825
------------------------------------------------------------
Valores duplicados en la columna cp                  136820
------------------------------------------------------------
Valores duplicados en la columna telefono            71874
------------------------------------------------------------
Valores duplicados en la columna e_mail              89647
------------------------------------------------------------
Valores duplicados en la columna giro                116164
------------------------------------------------------------
Valores duplicados en la columna scian               147171
------------------------------------------------------------
Valores duplicados en la columna rango_de_empleados  147847
------------------------------------------------------------
Valores duplicados en la columna registrado_por      147703
------------------------------------------------------------
Valores duplicados en la columna fn_razon_social     147848
------------------------------------------------------------
Valores duplicados en la columna fn_telefono         71901
------------------------------------------------------------
Valores duplicados en la columna fn_e_mail           147849
------------------------------------------------------------
Valores duplicados en la columna fn_giro             147806
------------------------------------------------------------
Valores duplicados en la columna estado_etq          147819
------------------------------------------------------------`;

  return (
    <div className="pagina-proyecto">
      <div className="contenedor-proyecto">

        <h1>📊 Sistema de Información Empresarial Mexicano (SIEM)</h1>
        <img src="/img/SIEM.jpg" alt="SIEM" className="imagen-principal"/>
        <br/>

        <h2>Análisis Empresaral Mexicano SIEM 2024</h2>

        <h2>🎯 Propósito</h2>
        <p>
          Analizar la distribución y características de las empresas registradas en el Sistema de Información 
          Empresarial Mexicano (SIEM) para obtener insights sobre su localización, tamaño, sector económico predominante y 
          diferencias regionales, usando técnicas estadísticas y visualización de datos.
        </p>

        <h2>🧪 Desarrollo del Proyecto</h2>

        <h3>Carga y exploración inicial de los datos:</h3>
        <p>
          El proyecto comenzó con la obtención del conjunto de datos sobre el Sistema de Información Empresarial en Mexicano, 
          publicado en Datos.gob por la Secretaría de Economía (SE). Se realizó una exploración preliminar para entender la 
          estructura del dataset, la cantidad de registros, las variables disponibles, y la granularidad temporal y geográfica. 
          Esta fase incluyó el uso de funciones como .head(), .info() y .describe() para detectar inconsistencias básicas y comprender 
          las dimensiones generales del problema.
        </p>
        <p>
          Se identificaron valores nulos en las columnas: telefono, e_mail, giro, fn_razon_social, fn_telefono, fn_e_mail y fn_giro.
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code1}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {salida1}
        </SyntaxHighlighter>
        <p>Se identificaron valores duplicados en varias columnas:</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code2}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {salida2}
        </SyntaxHighlighter>
        <p>Para estos valores duplicados en la face de limpieza se explorara más a profundidad.</p>
      </div>
    </div>
  );
}

export default SIEM;