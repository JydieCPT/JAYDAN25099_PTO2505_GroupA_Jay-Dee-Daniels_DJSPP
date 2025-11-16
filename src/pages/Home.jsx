import {
  SearchBar,
  SortSelect,
  GenreFilter,
  PodcastGrid,
  Pagination,
  Loading,
  Error,
} from "../components";

import ShowCarousel from "../components/Podcasts/ShowCarousel"; // <-- ADD THIS

import styles from "./Home.module.css";
import { genres } from "../data";
import { PodcastContext } from "../context/PodcastContext";
import { useContext } from "react";

export default function Home() {
  const { podcasts, loading, error } = useContext(PodcastContext);

  return (
    <main className={styles.main}>
      <section className={styles.controls}>
        <SearchBar />
        <GenreFilter genres={genres} />
        <SortSelect />
      </section>

      {loading && <Loading message="Loading podcasts..." />}
      {error && (
        <Error message={`Error occurred while fetching podcasts: ${error}`} />
      )}

      {!loading && !error && (
        <>
          {/* 🚀 NEW FEATURE: Recommended carousel */}
          <ShowCarousel />

          {/* Existing content */}
          <PodcastGrid />
          <Pagination />
        </>
      )}
    </main>
  );
}
