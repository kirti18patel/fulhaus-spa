import React from 'react'
import "../assets/stylesheet/landing.css"
import hero from "../assets/images/hero.jpg"

function Shop() {
    return (
        <section className="landing">
            <img className="hero" src={hero} alt="yellow sofa chair furniture"></img>
            <div className="cta flex_center_spaceArround flex_column">
                <h1 className="cta_text">Patio Furniture</h1>
                <button className="btn_cta">Shop</button>
            </div>           
        </section>
    )
}

export default Shop
