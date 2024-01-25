import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Reviews from "./componentes/Reviews";
import data from "./data";

const { reviews } = data;

function App() {
  const [count, setCount] = useState(0);

  return <Reviews revi={reviews}></Reviews>;
}

export default App;
