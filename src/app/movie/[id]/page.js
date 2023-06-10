import Image from "next/image";
import styles from "@/app/styles/common.module.css"

const page = async({params}) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/titles/details/?ids={id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cfef07d6bfmsh899fc587ad09f57p146facjsnd817b0de3cfe",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

   const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Netflix \ <span>{main_data.type}</span>
        </h2>
        <div>
          <Image src={main_data.backgroundImage.url} alt={main_data.title}
          width={600} height={300}/>
        </div>
        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </>
  );
}

export default page