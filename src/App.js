import "./Reset.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

function App() {
  const userName = "Rodrigo";
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={userName} />
    </>
  );
}

export default App;
