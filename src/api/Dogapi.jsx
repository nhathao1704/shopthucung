const BASE_URL = "http://localhost:5000/api/dogs";

const searchDogByName = async (keyword) => {
  const res = await fetch(`${BASE_URL}/search?q=${keyword}`);
  return res.json();
};

const getDogImageByBreedId = async (breedId) => {
  const res = await fetch(`${BASE_URL}/image/${breedId}`);
  return res.json();
};
export { searchDogByName, getDogImageByBreedId };
