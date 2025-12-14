import { useState } from "react";
import { pizzaCart as initialCart } from "./pizzas";
import { formatoPrecio } from "./utils/formatoPrecio.js";
import "./App.css";

function Cart() {
  const [cart, setCart] = useState(initialCart);

  // Aumentar cantidad
  const aumentar = (id) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  // Disminuir cantidad
  const disminuir = (id) => {
    setCart(
      cart
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0) // elimina pizzas con count 0
    );
  };

  // Total del carrito
  const total = cart.reduce(
    (acc, p) => acc + p.price * p.count,
    0
  );

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>

      {cart.map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} className="cart-img" />

          <div className="cart-info">
            <h3>{pizza.name}</h3>
            <p>Precio: ${formatoPrecio(pizza.price)}</p>

            <div className="cart-qty">
              <button onClick={() => disminuir(pizza.id)}>-</button>
              <span>{pizza.count}</span>
              <button onClick={() => aumentar(pizza.id)}>+</button>
            </div>
          </div>
        </div>
      ))}

      <h3>Total: ${formatoPrecio(total)}</h3>

      <button className="btn-pagar">Pagar</button>
    </div>
  );
}

export default Cart;
