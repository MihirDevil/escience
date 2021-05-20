import '../App.css';
import logo from '../PngItem_3758389.png';

function Navbar(){
    return(
    <div className="navbar">  
    <div className="logo">
      <div className="brinjal">
        <img src={logo} alt="Company Logo"/>
      </div>
      <p>escience</p>
    </div>
      <ul>
        <li>Products</li>
        <li>Login</li>
        <li>Cart</li>
      </ul>
    </div>
    );
}
export default Navbar;