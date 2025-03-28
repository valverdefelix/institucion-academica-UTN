const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'encuesta',
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error de conexión a MySQL:', err);
    return;
  }
  console.log('✅ Conectado a la base de datos MySQL');
});

app.post('/submit-form', (req, res) => {
  console.log('📩 Datos recibidos en el servidor:', req.body);

  const { 
    calidad_ensenanza,
    nivel_preparacion_profesores,
    recursos_educativos,
    carga_academica,
    trato_docentes,
    acceso_informacion,
    atencion_administrativa,
    instalaciones_recurso_fisicos,
    actividades_extracurriculares,
    comunicacion_institucional,
    nombre,
    edad,
    genero,
    carrera
  } = req.body;

  if (!nombre || !edad || !genero || !carrera) {
    console.error('⚠️ Faltan datos obligatorios');
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  const query = `
    INSERT INTO encuesta_respuestas (
      calidad_ensenanza, 
      nivel_preparacion_profesores, 
      recursos_educativos, 
      carga_academica, 
      trato_docentes, 
      acceso_informacion, 
      atencion_administrativa, 
      instalaciones_recurso_fisicos, 
      actividades_extracurriculares, 
      comunicacion_institucional, 
      nombre, 
      edad, 
      genero, 
      carrera
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    calidad_ensenanza || '',
    nivel_preparacion_profesores || '',
    recursos_educativos || '',
    carga_academica || '',
    trato_docentes || '',
    acceso_informacion || '',
    atencion_administrativa || '',
    instalaciones_recurso_fisicos || '',
    actividades_extracurriculares || '',
    comunicacion_institucional || '',
    nombre,
    edad,
    genero,
    carrera,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('❌ Error al insertar los datos:', err);
      return res.status(500).json({ message: 'Error al guardar los datos' });
    }
    console.log('✅ Datos insertados correctamente');
    res.status(200).json({ message: 'Datos enviados correctamente' });
  });
});

app.listen(5000, () => {
  console.log('🚀 Servidor corriendo en http://localhost:5000');
});
