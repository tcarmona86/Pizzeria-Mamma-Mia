import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { UserContext } from "./context/UserContext";
import { formatoPrecio } from "./utils/formatoPrecio.js";

function Cart() {
  const { cart, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({ cart, total }), 
      });

      const data = await res.json();
      if (res.ok) {
        alert("Compra simulada con éxito");
        console.log("Checkout:", data);

      } else {
        alert(data.error || "Error en checkout");
      }
    } catch (error) {
      console.error("Error en checkout:", error);
      alert("Hubo un problema al procesar el pago");
    }
  };


  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Pizza</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td><img src={item.img} alt={item.name} className="cart-img" /></td>
                  <td>{item.name}</td>
                  <td>${formatoPrecio(item.price)}</td>
                  <td>{item.quantity}</td>
                  <td>${formatoPrecio(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-footer">
            <p>Total: ${formatoPrecio(total)}</p>
            <button className="pay-button" disabled={!token} onClick={handleCheckout}>Pagar</button>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;
