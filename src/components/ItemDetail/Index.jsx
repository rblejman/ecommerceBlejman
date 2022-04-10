import { ItemCount } from "../ItemCount/Index";

export const ItemDetail = ({ product }) => {
  console.log(`item detail recibido:`, product);

  const onAdd = (counter) => {
    console.log(`producto agregado ${counter} a carrito`);
  };

  return (
    <div>
      <h2>ItemDetail</h2>
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <ItemCount product={product} initial={0} onAdd={onAdd} />
    </div>
  );
};
