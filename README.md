# 🌍 Country Explorer — React + Firebase + Vite

Country Explorer is a fully responsive web app that lets users explore countries from around the world. It includes user authentication via Firebase, country detail views using the REST Countries API, and favorite country management stored in Firestore.

> ✅ **Live Demo**: [countries-api-integration.vercel.app](https://countries-api-integration-rcbsq0qnm-sachin4reals-projects.vercel.app)

---

## 🚀 Features

- 🌐 View all countries using [REST Countries API](https://restcountries.com)
- 🔍 Search, filter by region and language
- ❤️ Add/Remove countries from Favorites (stored per user in Firestore)
- 🔒 Firebase Authentication (Register, Login, Logout)
- 💾 Firebase Firestore to persist user favorites
- 📱 Fully responsive (mobile-first) with Tailwind CSS
- 🧭 Routing with React Router DOM

---

## 🛠 Tech Stack

- [React + Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase Auth](https://firebase.google.com/products/auth)
- [Firestore](https://firebase.google.com/products/firestore)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [REST Countries API](https://restcountries.com)

---

## 📦 Project Setup

### 1. Clone this repo

```bash
git clone https://github.com/sachin4real/Countries-Api-Integration.git
cd countriesfrontend
2. Install dependencies
bash
Copy
Edit
npm install
3. Create a .env file in the root
ini
Copy
Edit
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
🔐 Replace with values from your Firebase project settings.

4. Run the app locally
bash
Copy
Edit
npm run dev
🔐 Firebase Setup Instructions
Go to Firebase Console

Create a new project

Enable Email/Password under Authentication

Go to Firestore, create a database in test mode

Copy Firebase config to .env file

🧪 Folder Structure
bash
Copy
Edit
├── public/
├── src/
│   ├── components/         # Navbar, CountryCard, Filters, SearchBar, etc.
│   ├── pages/              # LoginPage, RegisterPage, CountryPage, ProfilePage
│   ├── redux/              # userSlice, authActions
│   ├── firebase.js         # Firebase config file
│   └── App.jsx             # App routes
├── .env                    # Firebase credentials
├── package.json
└── vite.config.js
🌐 Deployment (Vercel)
Push code to GitHub

Go to Vercel

Import GitHub repo

Set Framework Preset: Vite

Add the same .env variables in Vercel Dashboard → Settings → Environment Variables

Deploy and enjoy 🚀

📋 APIs Used
REST Countries API

All countries: https://restcountries.com/v3.1/all

Search by name: https://restcountries.com/v3.1/name/{country}

🧠 Challenges & Resolutions
Challenge	Solution
Keeping user logged in after refresh	Used onAuthStateChanged from Firebase and persisted Redux state
Storing user-specific favorites	Used Firestore collections under each user's UID
Making the app responsive	Used Tailwind utility classes and mobile-first design
Managing state across pages	Used Redux Toolkit for global user/favorites state

👨‍💻 Author
GitHub: sachin4real

