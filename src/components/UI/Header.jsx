import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Header.module.css";

export default function Header() {
  // ✅ Destructure theme and toggleTheme from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.appHeader}>
      <h1>
        <Link to="/">🎙️ Podcast App</Link>
      </h1>

      <button className={styles.themeToggle} onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
}
