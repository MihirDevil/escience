import watch from "../assets/watch.png";
function CartItem() {
  return (
    <div className="cart-item-wrapper">
      <div className="for-flex">
        <div className="cart-item-img-wrapper">
          <img src={watch} alt="watch" id="cart-item-img" />
        </div>
        <div className="prod-desc">
          <div id="prod-name">Way Kambas Mini Ebony</div>
          <div className="prod-price">₹ 1,00,000</div>
        </div>
      </div>
      <div className="controls">
        <div className="ar">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 12H20" stroke="white" />
          </svg>
        </div>
        <div className="quantity">2</div>
        <div className="ar">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 12H20M12 4V20" stroke="white" />
          </svg>
        </div>
        <div className="price">₹ 1,00,000</div>
        <div className="delete">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.6972 5.29715H16.0601L15.7033 3.87001C15.5755 3.3587 15.1161 3.00001 14.589 3H9.49104C8.964 3.00001 8.50459 3.3587 8.37677 3.87001L8.02002 5.29715H4.38286C4.17141 5.29715 4 5.46857 4 5.68001C4 5.89146 4.17141 6.06287 4.38286 6.06287H5.56972L6.28069 20.2866C6.31157 20.8977 6.816 21.3772 7.42781 21.3772H16.6912C17.3032 21.3772 17.8077 20.8972 17.8382 20.2859L18.5493 6.06287H19.6972C19.9087 6.06287 20.0801 5.89146 20.0801 5.68001C20.0801 5.46857 19.9087 5.29715 19.6972 5.29715ZM10.1255 16.4001C10.1255 16.6115 9.95411 16.7829 9.74267 16.7829C9.53122 16.7829 9.35981 16.6115 9.35981 16.4001V10.2743C9.35981 10.0629 9.53122 9.89147 9.74267 9.89147C9.95411 9.89147 10.1255 10.0629 10.1255 10.2743V16.4001ZM12.0397 17.5486C12.2512 17.5486 12.4226 17.3772 12.4226 17.1658V9.5086C12.4226 9.29715 12.2512 9.12574 12.0397 9.12574C11.8283 9.12574 11.6569 9.29715 11.6569 9.5086V17.1658C11.6569 17.3772 11.8283 17.5486 12.0397 17.5486ZM14.7204 16.4001C14.7204 16.6115 14.549 16.7829 14.3376 16.7829C14.1261 16.7829 13.9547 16.6115 13.9547 16.4001V10.2743C13.9547 10.0629 14.1261 9.89147 14.3376 9.89147C14.549 9.89147 14.7204 10.0629 14.7204 10.2743V16.4001ZM9.11937 4.05584L8.80911 5.29715H15.2705L14.9602 4.05584C14.9178 3.88524 14.7645 3.76552 14.5887 3.76571H9.49082C9.31503 3.76552 9.16176 3.88524 9.11937 4.05584Z"
              fill="#D93F3F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
