import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        setApodData(response.data);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Astronomy Picture of the Day</h1>
        {apodData && (
          <>
            <img src={apodData.url} alt={apodData.title} />
            <h2>{apodData.title}</h2>
            <p>{apodData.explanation}</p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
