import { useContext, useEffect, useRef, useState } from "react";
import { PodcastContext } from "../../context/PodcastContext";
import { Link } from "react-router-dom";
import styles from "./ShowCarousel.module.css";

export default function ShowCarousel() {
  const { podcasts } = useContext(PodcastContext);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  if (!podcasts || podcasts.length === 0) return null;

  // Duplicate items for infinite loop
  const slides = [...podcasts, ...podcasts, ...podcasts];
  const total = podcasts.length;

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  // Reset position seamlessly
  useEffect(() => {
    if (index === total * 2) {
      setTimeout(() => setIndex(total), 0);
    }
    if (index === 0) {
      setTimeout(() => setIndex(total), 0);
    }
  }, [index, total]);

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.heading}>Recommended Shows</h2>

      <div className={styles.carouselWrapper}>
        <button onClick={prev} className={styles.prevBtn}>
          &#10094;
        </button>

        <div className={styles.carouselViewport}>
          <div
            ref={trackRef}
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${index * 220}px)`,
            }}
          >
            {slides.map((show, i) => (
              <div className={styles.carouselItem} key={`${show.id}-${i}`}>
                <Link to={`/show/${show.id}`} className={styles.card}>
                  <img src={show.image} alt={show.title} />
                  <h3>{show.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button onClick={next} className={styles.nextBtn}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
