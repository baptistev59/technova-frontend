export default function BackendWake() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white text-gray-700 animate-fadeIn">
      
      <div className="loader mb-5"></div>

      <p className="text-lg font-medium text-blue-600">
        ⏳ Démarrage du serveur… Merci de patienter
      </p>

      <p className="text-sm text-gray-400 mt-2">
        (Initialisation du backend Render)
      </p>
    </div>
  );
}
