import { useEffect, useState } from "react";

function AnimeList() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/anime");
        const result = await response.json();
        setAnime(result.data); // Set the "data" array as the anime state
      } catch (error) {
        console.error("Error fetching anime:", error);
      }
    };
    fetchAnime();
  }, []);

  return (
    <div>
      <h1 className="text-3x1 mb-6">AnimeList</h1>
      <div className="grid grid-cols-3 gap-4">
        {anime.map((anim) => (
          <div key={anim.mal_id} className="p-2 border-2 rounded-md">
            <img
              src={anim.images.jpg.image_url}
              alt={anim.title}
              className="w-full h-auto rounded-md"
            />
            <div className="truncate mt-2 font-bold">{anim.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimeList;
