import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // Importante para las tablas HTML
import rehypeSanitize from 'rehype-sanitize';

const ReadmeViewer = ({ repoName }) => {
  const [markdown, setMarkdown] = useState('Cargando...');
  const usuarioGitHub = "saitoM17"; 

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/${usuarioGitHub}/${repoName}/main/README.md`;
    fetch(url)
      .then((res) => res.text())
    //   .then((text) => setMarkdown(text))
       .then((text) => {
  // Este código busca rutas de imágenes locales y las convierte en rutas de GitHub
  const baseUrl = `https://raw.githubusercontent.com/${usuarioGitHub}/${repoName}/main/`;
  const fixedMarkdown = text.replace(/src="([^http][^"]+)"/g, `src="${baseUrl}$1"`)
                            .replace(/!\[.*\]\(([^http][^\)]+)\)/g, `![img](${baseUrl}$1)`);
  setMarkdown(fixedMarkdown);
})
      .catch((err) => console.error(err));
  }, [repoName]);

  return (
    <div className="pagina-proyecto">
      <div className="contenedor-proyecto">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ReadmeViewer;