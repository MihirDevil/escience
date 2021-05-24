import "./App.css";
import "./Better.css";
import Navbar from "./Components/Navbar.jsx";
import FeaturedCard from "./Components/FeaturedCard.jsx";
import ProductCard from "./Components/ProductCard.jsx";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Cart />
        <FeaturedCard />
        <div class="monthly-deals">
          <div class="title">Monthly Deals</div>
          <hr />
          <div class="prod-cards-wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
