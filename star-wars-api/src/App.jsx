import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import "./App.css";
import StarshipCard from "./components/StarshipCard";

function App() {
  // data is the list of starships fetched from the API.
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const json = await getAllStarships();
      setData(json.results); // set data
    };

    fetchStarships();
  }, []);

  return (
    <>
      <div className="starship-container">
        {data.map((starship, index) => (
          <div key={index} className="starship-box">
            {starship.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
