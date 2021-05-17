import '../App.css';
import logo from '../PngItem_3758389.png';

function Navbar(){
    return(
    <div className="navbar">  
    <div className="logo">
      <img src={logo} alt="Company Logo"/>
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