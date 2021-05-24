import CartItem from "./CartItem";
function Cart() {
  return (
    <div className="modal">
      <div className="og-cart-wrapper">
      <CartItem />
      <hr />
      <CartItem />
      </div>
    </div>
  );
}

export default Cart;
