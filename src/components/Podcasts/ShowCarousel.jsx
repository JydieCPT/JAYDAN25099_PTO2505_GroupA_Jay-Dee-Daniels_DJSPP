import { useContext } from "react";
import { PodcastContext } from "../../context/PodcastContext";
import { Link } from "react-router-dom";
import styles from "./ShowCarousel.module.css";

export default function ShowCarousel() {
  const { podcasts } = useContext(PodcastContext);

  // show only 10 random recommended items
  const recommended = podcasts?.slice(0, 10) || [];

  if (!recommended.length) return null;

  return (
    <div className={styles.carouselWrapper}>
      <h2 className={styles.title}>Recommended Shows</h2>

      <div className={styles.carousel}>
        {recommended.map((show) => (
          <Link key={show.id} to={`/show/${show.id}`} className={styles.card}>
            <img className={styles.image} src={show.image} alt={show.title} />
            <p className={styles.name}>{show.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
