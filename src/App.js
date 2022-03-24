import "./Reset.css";
import "./App.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";

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
