import { useContext } from "react";
import { PodcastContext } from "../../context/PodcastContext";
import { Link } from "react-router-dom";
import styles from "./ShowCarousel.module.css";

/**
 * Sliding carousel displaying recommended shows.
 * Shows image, title, and genre tags for user context.
 */
export default function ShowCarousel() {
  const { podcasts } = useContext(PodcastContext);

  if (!podcasts || podcasts.length === 0) return null;

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.heading}>Recommended Shows</h2>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {podcasts.map((show) => (
            <div className={styles.carouselItem} key={show.id}>
              <Link to={`/show/${show.id}`} className={styles.card}>
                <img
                  src={show.image}
                  alt={show.title}
                  className={styles.image}
                />

                <div className={styles.info}>
                  <h3 className={styles.title}>{show.title}</h3>

                  <div className={styles.genres}>
                    {show.genres &&
                      show.genres.map((genre, idx) => (
                        <span className={styles.genreTag} key={idx}>
                          {genre}
                        </span>
                      ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
