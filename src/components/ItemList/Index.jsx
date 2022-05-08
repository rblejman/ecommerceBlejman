import "./styles.css";
import { Item } from "../Item/Index";

export const ItemList = ({ products }) => {
  return (
    <div className="gallery">
      {products.map((item) => {
        return <Item product={item} key={item.id} />;
      })}
    </div>
  );
};
