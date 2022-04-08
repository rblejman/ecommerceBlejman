import "./ItemList.css";
import { Item } from "../Item/Index";

export const ItemList = ({ products }) => {
  return (
    <div className="card__container">
      {products.map((item) => {
        return <Item product={item} key={item.id} />;
      })}
    </div>
  );
};
