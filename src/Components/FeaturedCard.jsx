import laptop from "../assets/laptop.png";
function FeaturedCard() {
  return (
    <div class="featured-card">
      <div class="fc-image">
        <img src={laptop} alt="laptop" />
      </div>
      <div class="fc-desc">
        <div class="fc-prod-name">Rolex Explorer</div>
        <hr />
        <p class="fc-prod-desc">
          The Oyster Perpetual Explorer and Oyster Perpetual Explorer II evolved
          from Rolex’s deep involvement with exploration. They go where few
          people venture.
        </p>
        <p class="fc-prod-price-title">Starting from</p>
        <p class="fc-prod-price">₹ 1,00,000</p>
        <div class="cart-btn-wrapper">
          <button class="cart-btn">
            <p>Know More -&#62;</p>
          </button>
        </div>
      </div>
      <div class="arrow-btns-wrapper">
        <button class="arrow-btn-left">
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1.05505L1.5 12.5551L13 24.0551"
              stroke="#488FFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="arrow-btn-right">
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.05505L12.5 12.5551L1 24.0551"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <svg
        class="pattern"
        width="553"
        height="472"
        viewBox="0 0 553 472"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M682.187 617.107L411.554 530.708L462.554 284.343L208.751 180.718L198.787 -63.9939"
          stroke="#99C2FF"
        />
        <path
          d="M717.549 578.742L460.601 500.428L516.521 253.034L252.276 149.877L245.307 -117.74"
          stroke="#80B2FF"
        />
        <path
          d="M754.416 538.745L505.262 478.184L566.464 221.477L300.571 120.414L299.48 -176.511"
          stroke="#72A9FF"
        />
      </svg>
    </div>
  );
}

export default FeaturedCard;
