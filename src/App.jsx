import React, { useContext } from "react";
import RantForm from "./features/rant/RantForm";
import RantList from "./features/rant/RantList";
import StreakCounter from "./features/rant/StreakCount";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

    return (
    <div className={`app ${theme}`}>
      <header className="fade-slide">
        <h1>RantBox</h1>
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
        </button>
      </header>
      <main className="fade-slide">
        <StreakCounter />
        <RantForm />
        <RantList />
      </main>
    </div>
  );
}

export default App;