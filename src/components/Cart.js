import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { removeItem } from '../actions'
import "../assets/stylesheet/cart.css"

function Cart() {
  const dispatch = useDispatch();
  const itemList = useSelector((state)=> state.itemReducer.itemList);

  const totalPrice = () => {
    let total = 0;
    itemList.forEach(item => {
      total+= parseInt(item.price)
    });
    return total
  }
    return (
        <div className="cart_drawer flex_center_spaceBetween flex_column">
            <div className="cart_items">
              {itemList.length ?
              itemList.map((item, i) => (
                <div className="cart_item flex_spaceBetween" key={i}>
                  <div className="cart_item_image_container">
                    <img
                      src={require(`../assets/images/${item.id+1}.jpg`).default}
                      alt={item.description}
                      className="cart_item_img"
                      key={`img${i}`}
                    />
                  </div>
                  <div className="cart_item_details flex_spaceArround flex_column" key={`itemName${i}`}>
                    <div className="item_title">
                      <h2>{item.product_name}</h2>
                      <h4>{item.brand_name}</h4>
                    </div>
                    <div>
                      <h4>${item.price}</h4>
                    </div>
                  </div>
                  <div className="close">
                    <button className="close_btn" onClick={()=> {
                      dispatch(removeItem(i))
                      }}><i className="fa fa-times" aria-hidden="true"></i></button>
                  </div>
                </div>
              )) : <h1>Add items to cart</h1> }
            </div>

            <div className="checkout flex_spaceBetween flex_column">
              <div className="total flex_center_spaceBetween">
                <h3>Total:</h3>
                <h3>{`$${totalPrice()}`}</h3>
              </div>
              <button className="checkout_btn">Checkout</button>
            </div>
        </div>
    )
}

export default Cart
