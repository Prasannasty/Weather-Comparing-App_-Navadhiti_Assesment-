# 🌤️ Weather App


## 📸 Live Demo
  ### [Live Demo-Click here](https://weather-comparator.netlify.app)

A modern and responsive weather application built with **React**, **Vite**, and **Tailwind CSS**. This app allows users to search for weather information for multiple cities, save favorite cities, and toggle between light and dark modes.

---

## 🚀 Features

- **Search Weather**: Search for real-time weather information by city name.
- **Compare Cities**: View weather details for two cities side by side.
- **Save Favorites**: Save frequently searched cities for quick access.
- **Dark Mode**: Toggle between light and dark themes for better user experience.
- **Responsive Design**: Fully responsive and works seamlessly on all devices.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, Material Icons
- **API**: OpenWeatherMap API
- **State Management**: React Hooks
- **Local Storage**: Save and retrieve favorite cities

---


## ⚙️ Installation

Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:5173
   ```

---

## 🧑‍💻 Usage

1. **Search for a City**:
   - Enter the name of a city in the search bar and press "Search."
   - Weather details for the city will be displayed.

2. **Compare Cities**:
   - Use the two search bars to compare weather details for two cities side by side.

3. **Save Favorites**:
   - Click the "Save" button to add a city to your favorites.
   - Access saved cities in the "Saved Cities" section.

4. **Dark Mode**:
   - Use the toggle switch in the header to switch between light and dark modes.

---

## 📂 Project Structure

```
Weather/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.jsx      # App header with theme toggle
│   │   ├── SearchBar.jsx   # Search bar for city input
│   │   ├── WeatherCard.jsx # Weather details card
│   │   ├── Favorites.jsx   # Saved cities list
│   │   ├── ThemeToggle.jsx # Dark mode toggle
│   ├── services/
│   │   └── weatherAPI.js   # API service for fetching weather data
│   ├── utils/
│   │   └── localStorage.js # Utility functions for local storage
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   ├── index.css           # Global styles
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

---

## 🌐 API Integration

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch real-time weather data. Ensure you have an API key and add it to the `.env` file as shown in the installation steps.

---

Enjoy using the Weather App! 🌦️
