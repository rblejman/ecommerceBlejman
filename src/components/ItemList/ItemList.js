import "./ItemList.css";
import { Item } from "../Item/Item.js";

export const ItemList = ({ products = [] }) => {
  return products.map((item) => {
    return <Item product={item} key={item.id} />;
  });
};
