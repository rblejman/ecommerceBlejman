import "./Reset.css";
import "./App.css";
import NavBar from "./components/NavBar/Index.jsx";
import ItemListContainer from "./components/ItemListContainer/Index.jsx";

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
