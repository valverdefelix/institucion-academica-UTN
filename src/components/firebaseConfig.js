import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAb3ZVZUVm1P65gJXzMxqDuMwSXggr-fUg",
    authDomain: "felixvalverdesan.firebaseapp.com",
    databaseURL: "https://felixvalverdesan-default-rtdb.firebaseio.com",
    projectId: "felixvalverdesan",
    storageBucket: "felixvalverdesan.appspot.com",
    messagingSenderId: "467387469091",
    appId: "1:467387469091:web:e8d1faafddfdb66490d096"
  };

// Inicializar Firebase y la base de datos
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Función para guardar datos en la base de datos
export const saveSurveyData = async (data) => {
    try {
      const surveysRef = ref(database, "encuestas");
      await push(surveysRef, data);
      alert("✅ ¡Encuesta enviada con éxito!");
      return { success: true };
    } catch (error) {
      console.error("❌ Error al guardar en Firebase:", error);
      alert("⚠️ Hubo un problema al enviar los datos. Intenta de nuevo.");
      return { success: false, error };
    }
  };

export default app;
