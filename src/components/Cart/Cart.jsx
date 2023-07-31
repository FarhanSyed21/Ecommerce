import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import "./Cart.css";

const Cart = ({ cartElements }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  // const [items, setItems] = useState(cartElements);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  };

  const buyHandler = (item) => {
    addToCart(item);
  };

  const removeHandler = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="cart-container">
      <button onClick={toggleCart}>Cart {itemCount}</button>

      {cartItems.length > 0 && isCartOpen && (
        <div className="cart-table">
          <h1>CART</h1>
          <table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="item-info">
                      <img src={item.imageUrl} alt={item.title} />
                      <div>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </td>
                  <td>₹{item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        addToCart({
                          ...item,
                          quantity: parseInt(e.target.value)
                        })
                      }
                    />
                  </td>
                  <td>
                    <button onClick={() => removeHandler(item)}>REMOVE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>TOTAL ₹{calculateTotalPrice()}</h3>
          <button className="purchase">PURCHASE</button>
        </div>
      )}
    </div>
  );
};
export default Cart;
