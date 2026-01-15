import { useState } from "react";
import {
  searchDogByName,
  getDogImageByBreedId,
} from "../api/Dogapi.jsx";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!keyword.trim()) return;

    try {
      setLoading(true);
      setError("");
      setDog(null);

      // 1️⃣ Tìm giống chó
      const breeds = await searchDogByName(keyword);

      if (breeds.length === 0) {
        setError("Không tìm thấy giống chó 😢");
        setLoading(false);
        return;
      }

      const breed = breeds[0];

      // 2️⃣ Lấy ảnh theo breed_id
      const imgData = await getDogImageByBreedId(breed.id);

      setDog({
        ...breed,
        image: imgData[0]?.url
      });

    } catch (err) {
      setError("Có lỗi xảy ra, thử lại sau!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="home">
      <div className="home-container">

        {/* LEFT */}
        <div className="home-left">
          <h1>
            Find a New <br />
            <span>Pet</span> For You
          </h1>

          <p>
            Search your favourite dog breed and get detailed information
          </p>

          <div className="search-box">
            <input
              placeholder="Find Your Favourite Pet Here"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>🔍</button>
          </div>

          {error && <p className="error">{error}</p>}
        </div>

        {/* RIGHT */}
        <div className="home-right">
       

          {!loading && dog && (
            <div className="dog-info">
              <img
                src={dog.image}
                alt={dog.name}
                className="dog-img"
              />

              <h2>{dog.name}</h2>

              {dog.temperament && (
                <p><b>Temperament:</b> {dog.temperament}</p>
              )}

              {dog.life_span && (
                <p><b>Life span:</b> {dog.life_span}</p>
              )}

              {dog.weight?.metric && (
                <p><b>Weight:</b> {dog.weight.metric} kg</p>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Home;
