import React, {useState} from 'react'
import "../assets/stylesheet/items.css"

function Items() {
    
  const [items] = useState([
    {
      product_name:"Product Name",
      brand_name: "BRAND NAME",
      price: "$900",
      description: "table"
    },
    {
      product_name:"Product Name",
      brand_name: "BRAND NAME",
      price: "$900",
      description: "table"
    },
    {
      product_name:"Product Name",
      brand_name: "BRAND NAME",
      price: "$900",
      description: "table"
    },
    {
      product_name:"Product Name",
      brand_name: "BRAND NAME",
      price: "$900",
      description: "table"
    },
    {
      product_name:"Product Name",
      brand_name: "BRAND NAME",
      price: "$900",
      description: "table"
    },
    {
      product_name:"Product Name",
      brand_name: "BRAND NAME",
      price: "$900",
      description: "table"
    }
  ]);

  const addItem = i => {
    console.log(`add cart clicked ${i}`);
  }

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
                    <button className="add_btn" onClick={() => addItem(i)}>+ Add to cart</button>
                    <h4 className="item_price">{item.price}</h4>
                  </div>
                </div>
              </div>
            ))}
        </section>
    )
}

export default Items
