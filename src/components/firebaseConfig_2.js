import { getDatabase, ref, get } from "firebase/database";

// Obtener los datos de las encuestas
export const fetchSurveyData = async () => {
  const db = getDatabase();
  const surveyDataRef = ref(db, 'encuestas');
  try {
    const snapshot = await get(surveyDataRef);
    if (snapshot.exists()) {
      return snapshot.val(); // Retorna todos los datos de las encuestas
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error getting data: ", error);
    return null;
  }
};
