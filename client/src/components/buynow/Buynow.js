import React from "react";
import "./buynow.css";
import { Divider } from "@mui/material";

const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuy">Price</span>
          <Divider />

          <div className="item_container">
            <img src="https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70" />
            <div className="item_details">
              <h3>Molife Sense 500 Smartwatch (Black Strap, Freesize)</h3>
              <h3>Smart Watches</h3>
              <h3 className="diffrentprice">₹4049.00</h3>
              <h3 className="diffrentprice">$4049</h3>
              <p className="unusall">Usually dispatched in 8 days.</p>
            </div>
          </div>
        </div>
        <div className="right_buy"></div>
      </div>
    </div>
  );
};

export default Buynow;
