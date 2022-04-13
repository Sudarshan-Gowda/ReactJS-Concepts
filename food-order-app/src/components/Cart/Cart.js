import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.55 }];

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cItems.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.44</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
