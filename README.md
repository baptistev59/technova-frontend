# 🧩 TechNova Frontend (React)

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-Build-orange)
![Axios](https://img.shields.io/badge/API-Axios-green)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 Présentation
Le **frontend TechNova** est une application **React 18 (Vite)** permettant aux **clients** et **vendeurs** d’interagir avec l’API Symfony.
Elle offre une expérience utilisateur fluide : navigation produit, panier, paiement Stripe, espace vendeur et authentification JWT.

---

## ⚙️ Stack technique
- **React 18**
- **Vite 5**
- **Axios** pour les requêtes API
- **React Router DOM** pour la navigation
- **Context API / Reducer** pour la gestion d’état
- **JWT** pour l’authentification

---

## 🧩 Installation locale
```bash
git clone https://github.com/baptistev59/technova-frontend.git
cd technova-frontend
npm install
npm run dev
```

L’application sera accessible sur : **http://localhost:5173**

---

## 🌐 Configuration
Créer un fichier `.env` à la racine :
```env
VITE_API_URL=http://localhost:8000/api
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

---

## 💻 Scripts utiles
```bash
npm run dev       # Démarrer le serveur de développement
npm run build     # Construire la version production
npm run preview   # Prévisualiser le build
```

---

## ☁️ Déploiement (Vercel)
1. Connecter le dépôt GitHub
2. Ajouter les variables `VITE_API_URL` et `VITE_STRIPE_PUBLIC_KEY`
3. Déployer automatiquement via Vercel

---

## 👤 Auteur
**Développé par : Baptiste VANDAELE**

---

## 📜 Licence
Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus d’informations.
