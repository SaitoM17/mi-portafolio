// src/pages/AmazonDelivery.js
import React from 'react';
import ReadmeViewer from '../components/ReadmeViewer';
import "./proyectPages.css"; // Tu CSS de páginas

const AnimeAnalisis = () => {
  return (
    <>
      {/* Puedes mantener un banner manual si quieres, o dejar que el Readme lo haga todo */}
      <ReadmeViewer repoName="anime_analisis" /> 
    </>
  );
};

export default AnimeAnalisis;