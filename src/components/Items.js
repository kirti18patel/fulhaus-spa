import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import { addItem } from '../actions'
import "../assets/stylesheet/items.css"

function Items() {
    
  const [items] = useState([
    {
      product_name:"Product Name 1",
      brand_name: "BRAND NAME",
      price: "900",
      description: "table"
    },
    {
      product_name:"Product Name 2",
      brand_name: "BRAND NAME",
      price: "900",
      description: "table"
    },
    {
      product_name:"Product Name 3",
      brand_name: "BRAND NAME",
      price: "900",
      description: "table"
    },
    {
      product_name:"Product Name 4",
      brand_name: "BRAND NAME",
      price: "900",
      description: "table"
    },
    {
      product_name:"Product Name 5",
      brand_name: "BRAND NAME",
      price: "900",
      description: "table"
    },
    {
      product_name:"Product Name 6",
      brand_name: "BRAND NAME",
      price: "900",
      description: "table"
    }
  ]);  
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

    return (
        <section className="items">
            {items.map((item, i) => (
              <div className="item" key={i}>
                <img
                  src={require(`../assets/images/${i+1}.jpg`).default}
                  alt={item.description}
                  className="item_img"
                  key={`img${i}`}
                />
                <div className="overlay" key={`overlay${i}`}>
                  <div className="item_title">
                    <h2 className="item_name">{item.product_name}</h2>
                    <h4 className="item_brand">{item.brand_name}</h4>
                  </div>
                  <div className="item_buy_price">
                    <button className="add_btn" onClick={()=> {
                      setCartItems({
                        product_name:item.product_name,
                        brand_name: item.brand_name,
                        price: item.price,
                        description: item.description
                      });
                      dispatch(addItem(cartItems))
                      }}>
                        + Add to cart</button>
                    <h4 className="item_price">${item.price}</h4>
                  </div>
                </div>
              </div>
            ))}
        </section>
    )
}

export default Items
