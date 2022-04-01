import "./Reset.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

function App() {
  const userName = "Rodrigo";
  // poner una funcion show que sea pasada por props para que cambie cuando la promesa sea cumplida
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={userName} />
    </>
  );
}

export default App;
