import "./Item.css";
export const Item = (item) => {
  return (
    <div className="tarjeta">
      <img src={item.pictureURL} alt="" />
      <h1>{item.title}</h1>
      <h5>{item.description}</h5>
      <p>{item.price}</p>
      <button>Ver detalle</button>
    </div>
  );
};
