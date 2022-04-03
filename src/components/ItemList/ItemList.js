import "./ItemList.css";
import { Item } from "../Item/Item.js";

export const ItemList = ({ products }) => {
  console.log("Soy Itemlist los productos son:", products);
  return (
    <div className="card__container">
      {products.map((item) => {
        return <Item product={item} key={item.id} />;
      })}
    </div>
  );
};
