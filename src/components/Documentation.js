import React from 'react';
import './Documentation.css';
import { Link } from 'react-router-dom';


const Documentation = () => {
  return (
    <div className="documentation-container">
      {/* Contenedor de Documentación del Proyecto */}
      <div className="section-container">
        <h1>Documentación del Proyecto</h1>
        <p>
          En esta sección, encontrarás una descripción detallada de los componentes, tecnologías y metodología utilizada en el desarrollo de este proyecto. Además, se incluyen los diagramas, especificaciones técnicas y ejemplos de uso que te permitirán comprender a fondo la arquitectura y funcionamiento de la solución.
        </p>
      </div>

      {/* Lista de navegación */}
      <ul className="buttons-list">
        <li><a href="https://firebasestorage.googleapis.com/v0/b/felixvalverdesan.appspot.com/o/Caso%20de%20Uso_Vista%20Usuario.pdf?alt=media&token=6e088900-cb24-4a1b-9e7a-eb359b6a942b" className="large-button">Casos de uso "Vista Usuario"</a></li>
        <li><a href="https://firebasestorage.googleapis.com/v0/b/felixvalverdesan.appspot.com/o/Caso%20de%20Uso_Vista%20Administrador.pdf?alt=media&token=2c74638f-c203-4675-a23a-5721d6788e93" className="large-button">Casos de uso "Vista Administrador"</a></li>
        <li><a href="https://firebasestorage.googleapis.com/v0/b/felixvalverdesan.appspot.com/o/Carga%20del%20proyecto.pdf?alt=media&token=a9ec0922-b56d-4e45-812f-e3d64250e0c7" className="large-button">Carga de proyecto</a></li>
        <li><Link to="/reparto" className="large-button">Reparto de tareas</Link></li>
        <li><a href="#" className="large-button">.ZIP Del Proyecto</a></li>
      </ul>

      {/* Contenedor de Video Explicativo */}
      <div className="section-container">
        <h2>Video Explicativo</h2>
        <p>
          A continuación, te ofrecemos un video técnico que explica en detalle el funcionamiento del proyecto, su estructura interna, así como los procesos clave de implementación. En este video, se abordan los aspectos fundamentales del diseño y desarrollo, proporcionando una visión clara de las decisiones tomadas en el proceso.
        </p>
        <p>
          Este video está diseñado para usuarios con conocimientos técnicos y está dirigido a desarrolladores, ingenieros de software y otros profesionales interesados en comprender los aspectos más profundos de la solución implementada.
        </p>
        {/* Espacio para el video */}
        <div className="video-container">
          <iframe 
            width="730" 
            height="420" 
            src="https://www.youtube.com/embed/bBzz_9Ir0kw" 
            title="Video Explicativo" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
