import "./App.css";
import Navbar from "./Components/Navbar";
import FeaturedCard from "./Components/FeaturedCard";
import ProductCard from "./Components/ProductCard";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturedCard />
        <div class="monthly-deals">
          <div class="title">Monthly Deals</div>
          <hr />
          <div class="prod-cards-wrapper">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
