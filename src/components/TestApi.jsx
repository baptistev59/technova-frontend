import { useEffect, useState } from "react";
import api from "../api/api"; // ajuste si ton api.js est ailleurs

/**
 * Affiche la réponse de l'API /test
 *
 * @returns {JSX.Element} Un élément JSX affichant la réponse de l'API
 */
function TestApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/test")
       .then((res) => setData(res.data))
       .catch((err) => console.error("Erreur API :", err));
  }, []);

  if (!data) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Réponse API :</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TestApi;
