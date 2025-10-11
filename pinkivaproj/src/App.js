import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://pinkivabackend.vercel.app/api/test")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>React + Node + MongoDB Connection</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;

