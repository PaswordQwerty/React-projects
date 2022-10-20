import DiagramBar from "./components/Diagram/DiagramBar";
import Shop from "./components/Shop/Shop";
import Player from "./components/Player/Player";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <div className="App">
      <Stats />
      <DiagramBar />
      <Player />
      <Shop />
    </div>
  );
}

export default App;
