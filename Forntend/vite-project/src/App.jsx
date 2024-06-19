import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:3000/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Chai and full stack</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h3></h3>
        </div>;
      })}
    </>
  );
}

export default App;
