import { useState } from "react";

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

  // armar el objeto buyer aca y pasar como argumento en submitOrder
  return (
    <form
      onSubmit={handleSubmit}
      onChange={({ target }) => {
        handleChangeInputs(target);
      }}
    >
      <label>
        Nombre
        <input type="text" name="name" value={user.name} />
      </label>
      <label>
        Email
        <input type="email" name="email" value={user.email} />
      </label>
      <label>
        Telefono
        <input type="text" name="phone" value={user.phone} />
      </label>
      <input type="submit" value="Comprar" />
    </form>
  );
};
