export const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>ItemDetail</h2>
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
    </div>
  );
};
