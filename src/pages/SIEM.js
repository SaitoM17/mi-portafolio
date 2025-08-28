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

  const code3 = `filas, columnas = df_siem.shape
print(f'{"Filas":<10}{"Columnas"}')
print(f'{filas:<10}{columnas:>7}')`;

  const code4 = `columnas_eliminar = ['cp','telefono', 'e_mail', 'fn_telefono', 'fn_e_mail', 'fn_razon_social', 'fn_giro', 'estado_etq']
n = 1

print('Columnas antes de eliminar')
for nombre_columnas in df_siem.columns:
    print(f'{n}.-{nombre_columnas}')
    n += 1

df_siem.drop(columnas_eliminar, axis=1, inplace=True)

print('\nColumnas después de eliminar')
i = 1 
for columna_nmombre in df_siem.columns:
    print(f'{i}.-{columna_nmombre}')
    i += 1`;

  const code5 = `print('Filas antes de eliminar valores nulos')
print(f'Filas: {filas}')


print('\nFilas después de eliminar valores nulos')
df_siem_sin_nulos = df_siem.dropna()
filas_n, columnas_n = df_siem_sin_nulos.shape
print(f'Filas: {filas_n}')`;

  const code6 = `filas_duplicadas = df_siem_sin_nulos.duplicated().sum()
filas_duplicadas_mask = df_siem_sin_nulos.duplicated()


print(f'Numero total de duplicados: {filas_duplicadas}')

df_siem_sin_nulos_duplicados = df_siem_sin_nulos[filas_duplicadas_mask]
df_siem_sin_nulos_duplicados.head(5)`;

  const code7 = `print('Filas antes de eliminar duplicados')
print(f'Filas: {filas_n}')

print('\\nFilas después de eliminar duplicados')
df_siem_sin_nulos_sin_duplicados = df_siem_sin_nulos.drop_duplicates()
filas_n_d,columnas_n_d = df_siem_sin_nulos_sin_duplicados.shape
print(f'Filas: {filas_n_d}')

# Verificar la filas duplicadas
filas_dupli = df_siem_sin_nulos_sin_duplicados.duplicated().sum()
print(f'\\nFilas duplicadas: {filas_dupli}')`;

  const code8 = `def revisar_giro():
    sector_razon_social = df_siem_sin_nulos_sin_duplicados.groupby('giro')['razon_social'].count()
    print(sector_razon_social)

revisar_giro()`;

  const code9 = `df_siem_sin_nulos_sin_duplicados['giro'] = df_siem_sin_nulos_sin_duplicados['giro'].astype(str).str.lower().str.strip()

non_descriptive_patterns = [
        r'^\\(sin giro\\)$',  
        r'^[,.\\-|\\/]+$',    
        r'^\\d+$',           
        r'^\\d{4}-\\d{2}-\\d{2}$' 
]
for pattern in non_descriptive_patterns:
    df_siem_sin_nulos_sin_duplicados.loc[df_siem_sin_nulos_sin_duplicados['giro'].str.match(pattern, na=False), 'giro'] = np.nan

df_siem_sin_nulos_sin_duplicados['giro'] = df_siem_sin_nulos_sin_duplicados['giro'].apply(lambda x: re.sub(r'^\\d{6,}(?:\\s|$)|^\\d{2}(?:\\s|$)|^\\d{4}-\\d{2}-\\d{2}\\s?', '', str(x)).strip() if pd.notna(x) else x)

df_siem_sin_nulos_sin_duplicados['giro'] = df_siem_sin_nulos_sin_duplicados['giro'].str.replace(r'[^\\w\\s]', ' ', regex=True) # Replace most punctuation with space
df_siem_sin_nulos_sin_duplicados['giro'] = df_siem_sin_nulos_sin_duplicados['giro'].str.replace(r'\\s+', ' ', regex=True).str.strip() # Replace multiple spaces with single space

giro_mapping = {.............}
df_siem_sin_nulos_sin_duplicados['giro'] = df_siem_sin_nulos_sin_duplicados['giro'].replace(giro_mapping)

df_siem_sin_nulos_sin_duplicados['giro'] = df_siem_sin_nulos_sin_duplicados['giro'].fillna('giro desconocido')`;

  const code10 = `df_siem_sin_nulos_sin_duplicados.to_csv('../data/processed/datos_siem_2024.csv', index=False)`;

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

  const salida3 = `Filas     Columnas
147851         17`;

  const salida4 = `Columnas antes de eliminar
1.-razon_social
2.-estado
3.-municipio
4.-domicilio
5.-colonia
6.-cp
7.-telefono
8.-e_mail
9.-giro
10.-scian
11.-rango_de_empleados
12.-registrado_por
13.-fn_razon_social
14.-fn_telefono
15.-fn_e_mail
16.-fn_giro
17.-estado_etq

Columnas después de eliminar
1.-razon_social
2.-estado
3.-municipio
4.-domicilio
5.-colonia
6.-giro
7.-scian
8.-rango_de_empleados
9.-registrado_por`;

  const salida5 = `Filas antes de eliminar valores nulos
Filas: 147851

Filas después de eliminar valores nulos
Filas: 147523`;

  const salida6 = `Numero total de duplicados: 497`;

  const salida7 = `Filas antes de eliminar duplicados
Filas: 147523

Filas después de eliminar duplicados
Filas: 147026

Filas duplicadas: 0`;



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

        <h3>Limpieza y preprocesamiento:</h3>
        <p>En esta fase de limpieza y preprocesamiento de los datos se realizó los siguientes pasos:</p>
        <p>Verificamos la cantidad de filas y columnas de los datos:</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code3}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida3}
        </SyntaxHighlighter>
        <p>Eliminamos las columnas innecesarias para el análisis:</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code4}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida4}
        </SyntaxHighlighter>
        <p>Se eliminaron 8 columnas.</p>
        <p>Se eliminaron valores nulos:</p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code5}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida5}
        </SyntaxHighlighter>
        <p>
          Para abordar los valores duplicados, se optó por analizar y detectar las filas duplicadas. Se comprendía que la 
          duplicación de valores es posible, por lo que el objetivo fue identificar la redundancia a nivel de registro:
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code6}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida6}
        </SyntaxHighlighter>
        <img src="/SIEM/image (3).png" alt="Imagen3" className="imagen-proyecto"/>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code7}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="bash" style={dracula} className="code-block">
          {salida7}
        </SyntaxHighlighter>
        <p>
          La limpieza de la columna 'giro' fue crucial debido a la presencia de datos mal escritos y formatos inconsistentes. 
          Primero, realizamos una exploración para detectar estas irregularidades, revelando entradas como '(Sin Giro)', 
          caracteres sueltos o números sin sentido. Luego, procedimos a corregir estos errores mediante una serie de pasos: 
          se estandarizó el texto a minúsculas y se eliminaron espacios, se identificaron y eliminaron patrones no descriptivos, 
          y finalmente, se agruparon y unificaron términos similares en categorías más coherentes, como 'venta de ropa' o '
          servicios de vigilancia', para mejorar la calidad y utilidad de la información.
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code8}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code9}
        </SyntaxHighlighter>
        <p>
          Finalmente, el DataFrame limpio se guardó en un nuevo archivo CSV para su posterior uso.
        </p>
        <SyntaxHighlighter language="python" style={dracula} className="code-block">
          {code10}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default SIEM;