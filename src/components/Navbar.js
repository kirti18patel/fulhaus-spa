import React, {useState} from 'react'
import "../assets/stylesheet/navbar.css"
import Cart from './Cart';

function Navbar() {
    
  const [showCart, setShowCart] = useState(false);
  
    return ( 
    <>       
    <nav className="navbar">
        <h1 className="logo">F&uuml;lhaus Shop</h1>
        <button className="btn_cart" onClick = {() => {
            setShowCart(!showCart);
        }}>Cart</button>
    </nav>
    {showCart ? <Cart/>:null}
    </>
    )
}

export default Navbar
