import React, { useState } from 'react';
import { saveSurveyData } from './firebaseConfig';
import './UserView.css';

const preguntas = {
  calidad_ensenanza: "¿Cómo calificas la calidad de enseñanza en la universidad?",
  nivel_preparacion_profesores: "¿Qué tan preparados consideras a los profesores?",
  recursos_educativos: "¿Cómo evalúas la disponibilidad de recursos educativos?",
  carga_academica: "¿Qué opinas de la carga académica?",
  trato_docentes: "¿Cómo describirías el trato de los docentes hacia los estudiantes?",
  acceso_informacion: "¿Es fácil acceder a la información académica?",
  atencion_administrativa: "¿Cómo evalúas la atención del personal administrativo?",
  instalaciones_recurso_fisicos: "¿Qué tan adecuadas son las instalaciones y los recursos físicos?",
  actividades_extracurriculares: "¿Cómo calificas las actividades extracurriculares ofrecidas?",
  comunicacion_institucional: "¿Cómo consideras la comunicación institucional?"
};

const UserView = () => {
  const [personalData, setPersonalData] = useState({ nombre: '', edad: '', genero: '', carrera: '' });
  const [formData, setFormData] = useState(Object.keys(preguntas).reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
  const [showSurvey, setShowSurvey] = useState(false);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const { nombre, edad, genero, carrera } = personalData;
    if (nombre && edad && genero && carrera) {
      setShowSurvey(true);
    } else {
      alert('Por favor completa todos los campos antes de continuar.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = { ...personalData, ...formData };
    console.log('📤 Enviando datos a Firebase:', requestData);
    
    try {
      const response = await saveSurveyData(requestData);
      if (response.success) {
        alert("✅ Datos enviados correctamente a Firebase.");
        setPersonalData({ nombre: '', edad: '', genero: '', carrera: '' });
        setFormData(Object.keys(preguntas).reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
        setShowSurvey(false);
      }
    } catch (error) {
      console.error('❌ Error al enviar los datos:', error);
      alert('⚠️ Hubo un problema al enviar los datos. Intenta nuevamente.');
    }
  };

  return (
    <div>
      <h1>Encuesta "Situación Académica UTN"</h1>
      <form className="personal-info" onSubmit={handleContinue}>
        <h3>Por favor ingresa tus datos personales para poder responder el formulario.</h3>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={personalData.nombre} onChange={handlePersonalChange} required />
        
        <label>Edad:</label>
        <input type="number" name="edad" value={personalData.edad} onChange={handlePersonalChange} required />
        
        <label>Género:</label>
        <select name="genero" value={personalData.genero} onChange={handlePersonalChange} required>
          <option value="">Seleccione una opción</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
        
        <label>Carrera:</label>
        <select name="carrera" value={personalData.carrera} onChange={handlePersonalChange} required>
          <option value="">Seleccione una opción</option>
          <option value="Desarrollo de software multiplataforma">Desarrollo de software multiplataforma</option>
          <option value="Finanzas">Finanzas</option>
          <option value="Telemática">Telemática</option>
        </select>
        
        <button type="submit">Continuar</button>
      </form>

      {showSurvey && (
        <form className="survey-form show-survey" onSubmit={handleSubmit}>
          <h3>Bienvenido a la encuesta para calificar la situación académica dentro de la Universidad Tecnológica de Nezahualcóyotl. Te pedimos que seas sincero/a con tu respuesta.</h3>
          <h3>¡Gracias por tu participación!</h3>
          {Object.keys(formData).map((key, index) => (
            <div key={index}>
              <label>{index + 1}. {preguntas[key]}</label>
              <select name={key} value={formData[key]} onChange={handleFormChange} required>
                <option value="">Seleccione una opción</option>
                <option value="Alta">Excelente</option>
                <option value="Media">Aceptable</option>
                <option value="Baja">Deficiente</option>
              </select>
            </div>
          ))}
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default UserView;
