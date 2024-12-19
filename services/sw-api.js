const URL = "https://swapi.py4e.com";

async function getAllStarships() {
  try {
    const response = await fetch(`${URL}/api/starships/`);
    if (!response.ok) {
      throw new Error("error!");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getAllStarships };
