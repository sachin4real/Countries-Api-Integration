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
- 🧪 Unit testing with Vitest + Testing Library

---

## 🛠 Tech Stack

| Feature           | Tech                                      |
|------------------|-------------------------------------------|
| Frontend         | React (Vite)                              |
| Styling          | Tailwind CSS                              |
| Authentication   | Firebase Auth                             |
| Database         | Firestore                                 |
| State Management | Redux Toolkit                             |
| API              | REST Countries API                        |
| Routing          | React Router DOM                          |
| Testing          | Vitest + Testing Library                  |
| Deployment       | Vercel                                     |

---

## 📦 Project Setup

### 1. Clone this repo

```bash
git clone https://github.com/sachin4real/Countries-Api-Integration.git
cd countriesfrontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

🔐 Replace with values from your Firebase project settings.

### 4. Run the app locally

```bash
npm run dev
```

Visit `http://localhost:5173`

---

## 🔐 Firebase Setup Instructions

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable **Email/Password** under Authentication
4. Create a **Firestore** database in test mode
5. Copy Firebase config and paste in `.env`

---

## 🧾 Folder Structure

```bash
├── public/
├── src/
│   ├── components/         # Navbar, CountryCard, Filters, SearchBar, etc.
│   ├── pages/              # LoginPage, RegisterPage, CountryPage, FavoritesPage
│   ├── redux/              # userSlice, favoriteSlice
│   ├── services/           # Firebase + API logic
│   ├── __tests__/          # Vitest test cases
│   ├── firebase.js         # Firebase config file
│   └── App.jsx             # App routes and layout
├── .env                    # Firebase credentials
├── package.json
└── vite.config.js
```

---

## ✅ Running Tests

Run all unit tests with Vitest:

```bash
npx vitest run
```

Run in watch mode:

```bash
npx vitest --watch
```

Test files are in the `src/__tests__/` directory and cover key components such as:

- `SearchBar.test.jsx`
- `CountryPage.test.jsx`
- `FavoritesPage.test.jsx`
- `AllCountriesPage.test.jsx`

---

## 🌐 Deployment (Vercel)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import GitHub repo
4. Set Framework Preset to `Vite`
5. Add `.env` variables in Vercel → Settings → Environment Variables
6. Deploy and enjoy 🚀

---

## 📋 APIs Used

- REST Countries API
  - All countries: `https://restcountries.com/v3.1/all`
  - Search by name: `https://restcountries.com/v3.1/name/{country}`

---

## 🧠 Challenges & Resolutions

| Challenge                          | Solution                                                                 |
|-----------------------------------|--------------------------------------------------------------------------|
| Keeping user logged in after refresh | Used `onAuthStateChanged` and Redux persistence                         |
| Storing user-specific favorites   | Used Firestore subcollections under user UID                             |
| Making the app responsive         | Tailwind CSS utility classes and mobile-first design                     |
| Managing state across pages       | Centralized state with Redux Toolkit                                     |
| Testing key functionality         | Added unit tests using Vitest and Testing Library                        |

---

## 👨‍💻 Author

- GitHub: [sachin4real](https://github.com/sachin4real)

---

## 📄 License

MIT License © 2025
