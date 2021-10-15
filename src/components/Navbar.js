import React, {useState} from 'react'
import "../assets/stylesheet/navbar.css"

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
    </>
    )
}

export default Navbar
