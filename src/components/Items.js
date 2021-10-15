import React, {useState, useEffect} from 'react'
import {useDispatch} from "react-redux"
import { addItem } from '../actions'
import "../assets/stylesheet/items.css"
import API from '../api';

function Items() {
    
  const [items, setItems] = useState(null);  
  const [cartItems, setCartItems] = useState();
  const dispatch = useDispatch();

  useEffect( async () => {
    const response = await API.get();
    setItems(response.data);
  }, []);

  useEffect(() => {
    if(cartItems){
    dispatch(addItem(cartItems))}
  }, [cartItems, dispatch]);

    return (
        <section className="items flex_center_spaceArround">
            {!items?<h1>loading...</h1> : items.map((item, i) => (
              <div className="item" key={i}>
                <img
                  src={item.itemLink}
                  alt={item.vendorItemDescription}
                  className="item_img"
                  key={`img${i}`}
                />
                <div className="overlay flex_spaceBetween flex_column" key={`overlay${i}`}>
                  <div className="item_title flex_spaceBetween flex_column">
                    <h2 className="item_name">{item.itemName}</h2>
                    {/* not getting brand value is api so adding color for now */}
                    <h4 className="item_brand">{item.color}</h4>
                  </div>
                  <div className="flex_spaceBetween">
                    <button className="add_btn" onClick={()=> {
                      setCartItems({
                        product_name:item.itemName,
                        brand_name: item.color,
                        price: item.MSRP,
                        description: item.vendorItemDescription,
                        id: i
                      })
                    }}>
                        + Add to cart</button>
                    <h4 className="item_price">${item.MSRP}</h4>
                  </div>
                </div>
              </div>
            ))}
        </section>
    )
}

export default Items
