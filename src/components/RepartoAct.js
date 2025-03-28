import React from 'react';
import './RepartoAct.css';

const integrantes = [
  {
    foto: 'https://firebasestorage.googleapis.com/v0/b/felixvalverdesan.appspot.com/o/butanda.jpg?alt=media&token=475f2438-64a5-4a68-8121-ef27312ad119',
    nombre: 'Butanda Montero Giovani',
    informacion: [
      'Definir los requerimientos funcionales y no funcionales.',
      'Diseñar la base de datos en MySQL (Infinity Free).',
      'Configurar Firebase y definir la estructura del Real-Time Database.',
      'Programar la funcionalidad para guardar datos en MySQL (Infinity Free).',
      'Implementar la API para recuperar datos desde ambas bases de datos.',
      'Realizar pruebas unitarias en el backend.'
    ]
  },
  {
    foto: 'https://firebasestorage.googleapis.com/v0/b/felixvalverdesan.appspot.com/o/angel.jpg?alt=media&token=a0e5b507-203d-43cb-bcee-0011a105a3d7',
    nombre: 'Elizondo Sandoval Angel Eduardo',
    informacion: [
      'Diseñar la arquitectura de la aplicación.',
      'Configurar el entorno de desarrollo con Laravel y PHP.',
      'Desarrollar el sistema de autenticación (si aplica).',
      'Programar la funcionalidad para guardar datos en Firebase.',
      'Desarrollar la página que muestra los datos combinados en la Vista Usuario.',
      'Optimizar la unión de los datos de MySQL y Firebase.'
    ]
  },
  {
    foto: 'https://firebasestorage.googleapis.com/v0/b/felixvalverdesan.appspot.com/o/hector1.jpg?alt=media&token=1f279d3a-bbe1-4839-ba4b-180cfaa52667',
    nombre: 'Tabarez Lopez Hector Jesus',
    informacion: [
      'Elaborar bocetos y prototipos de la interfaz de usuario.',
      'Implementar el menú con las opciones "Vista Usuario" y "Vista Administrador".',
      'Aplicar estilos y diseño responsivo con Bootstrap.',
      'Desarrollar la aplicación móvil en App Inventor (pantallas y navegación).',
      'Integrar la vista web embebida en la app móvil.'
    ]
  },
  {
    foto: 'https://firebasestorage.googleapis.com/v0/b/felixvalverdesan.appspot.com/o/362d7def-1847-4e7c-ac65-cc173a33b2ff.jpg?alt=media&token=1d86c619-2be5-4df4-b7d8-dc983015b497',
    nombre: 'Valverde Sanchez Felix Marlon',
    informacion: [
      'Configurar la URL de la aplicación web para integrarla en la app móvil.',
      'Probar la conexión entre la aplicación web y las bases de datos.',
      'Validar que los datos ingresados cumplen con las restricciones establecidas.',
      'Realizar pruebas en distintos dispositivos para la aplicación móvil.',
      'Corregir errores y optimizar el rendimiento de ambas aplicaciones.',
      'Redactar la documentación técnica y los manuales de usuario.',
      'Diseñar la arquitectura de la aplicación.',
      'Desarrollar la página que muestra los datos combinados en la Vista Usuario.'
    ]
  }
];

const RepartoAct = () => {
  return (
    <div className="reparto-container">
      <h1>Lista de integrantes y su aportación</h1>
      <section className="integrantes">
        {integrantes.map((integrante, index) => (
          <div className="contenedor" key={index}>
            <img src={integrante.foto} alt={integrante.nombre} className="foto" />
            <div className="info">
              <h3>{integrante.nombre}</h3>
              <ul>
                {integrante.informacion.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RepartoAct;
