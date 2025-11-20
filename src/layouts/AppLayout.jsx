import useWakeBackend from "../hooks/useWakeBackend";
import BackendWake from "../components/BackendWake";
import api from "../api/api";

/**
 * Layout global :
 * - Applique le Wake Mode intelligent à tout le site
 * - Affiche l'écran de réveil Render avant tout le reste
 */
export default function AppLayout({ children }) {

  const waking = useWakeBackend(api);

  if (waking) {
    return <BackendWake />; // splash screen global
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
