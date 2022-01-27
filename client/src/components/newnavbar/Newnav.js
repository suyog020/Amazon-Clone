import React from "react";
import "./newnav.css";

const Newnav = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>All</p>
          <p>Best Sellers</p>
          <p>Mobiles</p>
          <p>Today's Deals</p>
          <p>Electronics</p>
          <p>Customer Service</p>
          <p>Prime</p>
          <p>New Releases</p>
          <p>Fashion</p>
          <p>Home & Kitchen</p>
          <p>Amazon Pay</p>
        </div>
        <div className="right_data">
          <img src="/nav.jpg" alt="navata" />
        </div>
      </div>
    </div>
  );
};

export default Newnav;
