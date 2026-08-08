# 🌾 Krishi Care

**Krishi Care** is a smart agriculture platform designed to help farmers make better decisions using modern web technologies and AI-powered tools. The application provides an accessible interface for accessing agricultural insights, recommendations, and farming-related resources.

The project focuses on combining a **modern React-based interface with machine learning capabilities** to create a practical digital farming assistant.

---

## ✨ Features

* 🌱 **Smart Agriculture Assistance** – Provides farmers with useful agricultural information and decision-support tools.
* 🤖 **AI/ML Integration** – Uses TensorFlow.js to support machine-learning functionality directly within the web application.
* 📊 **Data Visualization** – Presents agricultural data and insights through interactive charts.
* 🧭 **Client-Side Routing** – Smooth navigation between different sections of the application.
* 📱 **Responsive UI** – Designed to work across desktop and mobile devices.
* 🎨 **Modern Component-Based UI** – Built with reusable React components and shadcn/ui.
* ⚡ **Fast Development & Performance** – Powered by Vite for a fast development experience and optimized production builds.
* 🧪 **Testing Support** – Includes Vitest and React Testing Library for application testing.

---

## 🛠️ Tech Stack

### Frontend

* **React 18**
* **TypeScript**
* **Vite**
* **React Router**
* **Tailwind CSS**
* **shadcn/ui**
* **Lucide React**

### AI / Data

* **TensorFlow.js**
* **Recharts**

### Libraries & Tools

* **Axios** – API communication
* **React Hook Form** – Form handling
* **Zod** – Schema validation
* **TanStack React Query** – Data fetching and state management
* **Vitest** – Testing
* **ESLint** – Code quality

---

## 📁 Project Structure

```text
krishi-care/
│
├── public/                 # Static assets
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── contexts/          # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and configurations
│   ├── pages/             # Application pages
│   ├── services/          # API and service-layer logic
│   ├── styles/            # Application styles
│   ├── test/              # Test files
│   │
│   ├── App.tsx            # Main application component
│   ├── App.css            # Application-level styles
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
│
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── vitest.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* **Node.js** (LTS recommended)
* **npm**

### 1. Clone the repository

```bash
git clone https://github.com/Ebad11/krishi-care.git
```

### 2. Navigate to the project

```bash
cd krishi-care
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL displayed by Vite, typically:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

| Command              | Description                     |
| -------------------- | ------------------------------- |
| `npm run dev`        | Start the development server    |
| `npm run build`      | Create a production build       |
| `npm run build:dev`  | Create a development-mode build |
| `npm run preview`    | Preview the production build    |
| `npm run lint`       | Run ESLint                      |
| `npm run test`       | Run tests                       |
| `npm run test:watch` | Run tests in watch mode         |

---

## 🧠 AI Integration

Krishi Care includes **TensorFlow.js**, allowing machine-learning functionality to run within the JavaScript/TypeScript environment. This enables AI-powered features without requiring every inference task to be handled by a separate backend service.

The project can therefore serve as a foundation for integrating agricultural ML models such as:

* Crop recommendations
* Plant/leaf disease detection
* Agricultural predictions
* Farming decision support
* Other image or data-based ML models

---

## 🎯 Objective

The primary objective of Krishi Care is to make agricultural technology more accessible by providing farmers with a **simple, modern, and intelligent digital platform**.

The project aims to bridge the gap between traditional farming practices and emerging technologies such as:

**Artificial Intelligence + Machine Learning + Web Technologies + Data Visualization**

---

## 🔮 Future Enhancements

Potential improvements include:

* 🌦️ Real-time weather and forecast integration
* 🌱 Advanced crop recommendation models
* 🦠 Plant disease detection using image classification
* 📍 Location-based agricultural recommendations
* 💰 Crop price and market information
* 🌐 Multilingual support for regional languages
* 📲 Progressive Web App / mobile support
* ☁️ Backend integration for centralized data management
* 📈 More advanced agricultural analytics

---

## 👨‍💻 Development

Krishi Care follows a modular React architecture, separating UI components, pages, application state, hooks, services, and utility logic. This makes the application easier to maintain and extend as additional agricultural and AI capabilities are introduced.

---

## 📄 License

This project is intended for educational and development purposes.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

**Repository:**
https://github.com/Ebad11/krishi-care
