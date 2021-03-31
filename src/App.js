import "./App.css";
import Slider from "./components/Slider/index";
import { myCollection } from "./data/index.jsx";

function App() {
  return (
    <Slider slides={myCollection} widthInitial={800} heightInitial={600} />
  );
}

export default App;
