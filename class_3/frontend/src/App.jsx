// import axios from "axios";
// import { useEffect } from "react";

// function App() {
//   const [jokes, setJoke] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/jokes")
//       .then((response) => {
//         setJoke(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <h1>IH-TUSHAR</h1>

//       <p>JOKES: {jokes.length}</p>
//       {jokes.map((joke, index) => {
//         <div key={joke.id}>
//           <h3>{joke.title}</h3>
//           <p>{joke.content}</p>
//         </div>;
//       })}
//     </>
//   );
// }

// export default App;

// new code

// import axios from "axios";
// import { useState, useEffect } from "react";

// function App() {
//   const [jokes, setJokes] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/api/jokes")
//       .then((response) => {
//         setJokes(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <h1>IH-TUSHAR</h1>
//       <p>JOKES: {jokes.length}</p>

//       {jokes.map((joke, index) => {
//         <div key={joke.id}>
//           <h3>{joke.title}</h3>
//           <p>{joke.content}</p>
//         </div>;
//       })}
//     </>
//   );
// }

// export default App;

// new code

import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
        setLoading(false);
      });
  });

  return (
    <>
      <h1>IH-TUSHAR</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
