import { useState } from "react";
import "./styles.css";

export const CartForm = ({ submitOrder }) => {
  const [user, setUser] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `enviando del form a carrito nombre: ${user.name} telefono ${user.phone} email ${user.email} `
    );
    submitOrder(user);
  };

  const handleChangeInputs = (target) => {
    setUser({ ...user, [target.name]: target.value });
  };

  return (
    <form
      className="cartForm shadow"
      onSubmit={handleSubmit}
      onChange={({ target }) => {
        handleChangeInputs(target);
      }}
    >
      <label className="cartForm__label">
        <p>Nombre</p>
        <input
          className="cartForm__input"
          type="text"
          name="name"
          value={user.name}
        />
      </label>
      <label className="cartForm__label">
        <p>Email</p>
        <input
          className="cartForm__input"
          type="email"
          name="email"
          value={user.email}
        />
      </label>
      <label className="cartForm__label">
        <p>Telefono</p>
        <input
          className="cartForm__input"
          type="text"
          name="phone"
          value={user.phone}
        />
      </label>
      <input className="cartForm__btn btn" type="submit" value="Comprar" />
    </form>
  );
};
