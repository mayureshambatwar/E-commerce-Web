import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";
import './shopcategory.css'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shop-banner" src={props.banner} alt="" />
      <div className="shop-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        <div className="shop-sort">
          Sort By <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
      <div className="explore">
        Explore Me
      </div>
    </div>
  );
};

export default ShopCategory;
