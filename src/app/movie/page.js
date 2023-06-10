import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"
import { resolve } from "styled-jsx/css";

const Movie = async () => {

await new Promise((resolve) => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cfef07d6bfmsh899fc587ad09f57p146facjsnd817b0de3cfe",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  // console.log(data);
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Movies & Series</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
