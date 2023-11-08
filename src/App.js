import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppContainer,
  Header,
  Title,
  APODImage,
  Explanation,
} from "./components/StyledComponents.js";

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
    <AppContainer>
      <Header>
        <Title>NASA Astronomy Picture of the Day</Title>
      </Header>
      {apodData && (
        <div>
          <APODImage src={apodData.url} alt={apodData.title} />
          <Title>{apodData.title}</Title>
          <Explanation>{apodData.explanation}</Explanation>
        </div>
      )}
    </AppContainer>
  );
}

export default App;
