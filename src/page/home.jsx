const Home = () => {
  return (
          <section className="home">
        <div className="home-container">

          <div className="home-left">
            <h1>
              Find a New <br />
              <span>Pet</span> For You
            </h1>

            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document.
            </p>

            <div className="search-box">
              <input placeholder="Find Your Favourite Pet Here" />
              <button>🔍</button>
            </div>
          </div>

          <div className="home-right">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
              alt="pet"
            />
          </div>

        </div>
      </section>
  );
};

export default Home;