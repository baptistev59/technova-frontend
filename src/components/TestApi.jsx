import { useEffect, useState } from "react";
import api from "../api/api";

function TestApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/test")
      .then(res => setData(res.data))
      .catch(err => console.error("Erreur API :", err));
  }, []);

  if (!data) return <p>Chargement…</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Réponse API :</h2>
      <pre className="bg-gray-100 p-4 rounded mt-3">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default TestApi;
