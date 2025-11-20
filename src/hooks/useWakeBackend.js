import { useEffect, useState } from "react";

const WAKE_MEMORY_DURATION = 15 * 60 * 1000; // 15 min
const TEST_ENDPOINT = "/test";

// Retourne true si le backend est en réveil
export default function useWakeBackend(api) {
    const [waking, setWaking] = useState(true);

    // Test de l'API
    useEffect(() => {
        let interval = null;

        const wakeBackend = () => {
            api.get(TEST_ENDPOINT)
                .then(() => {
                    localStorage.setItem("last_wake", Date.now());
                    setWaking(false);
                    clearInterval(interval);
                })
                .catch(() => {
                    // backend encore en réveil → on attend
                });
        };

        // Test si le backend est en réveil
        const lastWake = Number(localStorage.getItem("last_wake") || 0);
        const recentlyWoken = Date.now() - lastWake < WAKE_MEMORY_DURATION;

        // Si le backend est en réveil, on attend
        if (recentlyWoken) {
            Promise.resolve().then(() => setWaking(false));
            return;
        }

        // Tentative immédiate
        wakeBackend();
        // Puis toutes les 1 sec
        interval = setInterval(wakeBackend, 1000);

        // Nettoyage
        return () => clearInterval(interval);
    }, [api]);

    return waking;
}
