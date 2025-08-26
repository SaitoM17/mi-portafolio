import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function AmazonDelivery() {

  const code1 = `CREATE DATABASE amazon_delivery;
USE amazon_delivery; -- Asegúrate de seleccionar la base de datos correcta`;

  const code2 = `SELECT * FROM amazon_delivery;`;

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
        

      </div>
    </div>
  );
}

export default AmazonDelivery;