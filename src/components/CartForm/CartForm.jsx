import userEvent from "@testing-library/user-event";
import { useState } from "react";

export const CartForm = ({ submitOrder }) => {
  const handleClick = () => {
    submitOrder();
  };

  // armar el objeto buyer aca y pasar como argumento en submitOrder
  return (
    <form
      onSubmit={handleSubmit}
      onChange={({ target }) => {
        handlerChangeInputs(target);
      }}
    >
      <label>
        Nombre
        <input type="text" name="name" value={user.name} />
      </label>
    </form>
  );
};
