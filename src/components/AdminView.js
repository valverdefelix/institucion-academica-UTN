import React, { useState, useEffect } from 'react';
import { fetchSurveyData } from './firebaseConfig_2';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './AdminView.css'; // Importar el archivo de estilos

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminView = () => {
  const [surveyData, setSurveyData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchSurveyData();
      setSurveyData(data);
    };
    getData();
  }, []);

  if (!surveyData) {
    return <div className="loading">Cargando...</div>;
  }

  const getChartData = (carrera) => {
    const questions = [
      'calidad_ensenanza', 'nivel_preparacion_profesores', 'recursos_educativos', 
      'carga_academica', 'trato_docentes', 'acceso_informacion', 'atencion_administrativa', 
      'instalaciones_recurso_fisicos', 'actividades_extracurriculares', 'comunicacion_institucional'
    ];

    const counts = {
      Alta: Array(questions.length).fill(0),
      Media: Array(questions.length).fill(0),
      Baja: Array(questions.length).fill(0),
    };

    Object.values(surveyData).forEach((survey) => {
      if (!carrera || survey.carrera === carrera) {
        questions.forEach((question, index) => {
          const response = survey[question];
          if (counts[response]) {
            counts[response][index]++;
          }
        });
      }
    });

    return {
      labels: questions.map((q) => q.replace(/_/g, ' ').toUpperCase()),
      datasets: [
        { label: 'Alta', data: counts.Alta, backgroundColor: 'green' },
        { label: 'Media', data: counts.Media, backgroundColor: 'yellow' },
        { label: 'Baja', data: counts.Baja, backgroundColor: 'red' },
      ],
    };
  };

  return (
    <div className="admin-container">
      <h1>Vista Administrador</h1>
<div className="info-container">
  <h2>Informacion sobre las Graficas</h2>
  <p>
    En este panel, se presentan los datos recopilados a partir de las encuestas enviadas. 
    La información está organizada en gráficos que reflejan los resultados generales y 
    específicos por cada carrera, permitiendo un análisis visual claro y detallado.
  </p>
</div>
      <div className="chart-container">
        <h2>Gráfica General</h2>
        <div className="chart-box">
          <Bar data={getChartData(null)} height={400} width={600} />
        </div>
      </div>
      <div className="chart-container">
        <h2>Gráfica Desarrollo de Software</h2>
        <div className="chart-box">
          <Bar data={getChartData('Desarrollo de software multiplataforma')} height={200} width={300} />
        </div>
      </div>
      <div className="chart-container">
        <h2>Gráfica Finanzas</h2>
        <div className="chart-box">
          <Bar data={getChartData('Finanzas')} height={200} width={300} />
        </div>
      </div>
      <div className="chart-container">
        <h2>Gráfica Telemática</h2>
        <div className="chart-box">
          <Bar data={getChartData('Telemática')} height={200} width={300} />
        </div>
      </div>
    </div>
  );
};

export default AdminView;
