import "./Reset.css";
import "./App.css";

import { ItemDetailContainer } from "./components/ItemDetailContainer/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/Index.jsx";
import ItemListContainer from "./components/ItemListContainer/Index.jsx";
import { Cart } from "./components/Cart/Index";
import { NotFound } from "./components/NotFound";
import { CustomProvider } from "./components/Context/CartContext";

function App() {
  const userName = "Rodrigo";
  // poner una funcion show que sea pasada por props para que cambie cuando la promesa sea cumplida

  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={userName} />} />
          {/* item list container pero filtrado */}
          <Route
            path="/categories/:categoryId"
            element={<ItemListContainer greeting={userName} />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="*" element={<NotFound />}></Route>

          {/* <ItemListContainer greeting={userName} />
        <ItemDetailContainer /> */}
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
