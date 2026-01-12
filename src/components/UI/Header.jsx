import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { FavoritesContext } from "../../context/FavoritesContext";
import styles from "./Header.module.css";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <header className={styles.appHeader}>
      <h1>
        <Link to="/">🎙️ Podcast App</Link>
      </h1>

      <nav className={styles.nav}>
        <Link to="/favorites" className={styles.favoritesLink}>
          ⭐ Favorites
          {favorites.length > 0 && (
            <span className={styles.badge}>{favorites.length}</span>
          )}
        </Link>

        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </nav>
    </header>
  );
}
