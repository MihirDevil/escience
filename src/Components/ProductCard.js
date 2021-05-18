import "../App.css";
import iphone from "../Iphone.png";

function ProductCard() {
  return (
    <div class="product-card">
      <img src={iphone} class="product-img" alt="Product" />
      <p class="product-name">Iphone 12</p>
      <div class="product-footer">
        <div>
          <p class="product-price">₹ 1,00,000</p>
          <lord-icon
            src="https://cdn.lordicon.com/slkvcfos.json"
            trigger="hover"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: 50, height: 50 }}
          ></lord-icon>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
