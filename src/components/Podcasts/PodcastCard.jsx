import { formatDate } from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import styles from "./PodcastCard.module.css";
import GenreTags from "../UI/GenreTags";

/**
 * Renders a single podcast preview card with image, title, number of seasons,
 * genres (as styled tags), and the last updated date.
 */
export default function PodcastCard({ podcast }) {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  const handleNavigate = () => {
    navigate(`/show/${podcast.id}`, {
      state: { genres: podcast.genres },
    });
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // 🚫 prevent card navigation
    toggleFavorite(podcast);
  };

  return (
    <div className={styles.card} onClick={handleNavigate}>
      {/* ⭐ Favorite Button */}
      <button
        className={styles.favoriteBtn}
        onClick={handleFavoriteClick}
        aria-label="Add to favorites"
      >
        {isFavorite(podcast.id) ? "⭐" : "☆"}
      </button>

      <img src={podcast.image} alt={podcast.title} />

      <h3>{podcast.title}</h3>
      <p className={styles.seasons}>{podcast.seasons} seasons</p>

      <GenreTags genres={podcast.genres} />

      <p className={styles.updatedText}>
        Updated {formatDate(podcast.updated)}
      </p>
    </div>
  );
}
