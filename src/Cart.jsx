import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { formatoPrecio } from './utils/formatoPrecio.js'

function Cart() {
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>🛒 Carrito de compras</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Pizza</th>
              <th>Precio unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((pizza) => (
              <tr key={pizza.id}>
                <td><img src={pizza.imagen} alt={pizza.name} className="cart-img" /></td>
                <td>{pizza.name}</td>
                <td>${formatoPrecio(pizza.precio)}</td>
                <td>{pizza.cantidad}</td>
                <td>${formatoPrecio(pizza.precio * pizza.cantidad)}</td>
                <td>
                  <button onClick={() => addToCart(pizza)} className="btn-add">➕</button>
                  <button onClick={() => removeFromCart(pizza.id)} className="btn-remove">➖</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="cart-total">
        <h2>Total: ${formatoPrecio(total)}</h2>

      </div>
    </div>
  );
}

export default Cart;
