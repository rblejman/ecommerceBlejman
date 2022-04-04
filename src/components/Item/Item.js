import "./Item.css";
export const Item = ({ product }) => {
  console.log("hola soy Item", product);
  return (
    <div className="card">
      <img src={product.pictureURL} alt="" />
      <h1>{product.title}</h1>
      <h5>{product.description}</h5>
      <p>{product.price}</p>
      <button>Ver detalle</button>
    </div>
  );
};

// hacer destructuring props
