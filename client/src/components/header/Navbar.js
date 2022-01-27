import React from 'react';
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';


const Navbar = () => {
  return (
    <header>
        <nav>
        <div className="left">
            <div className="navlogo">
                <img src="./amazon_PNG25.png" alt=""/>
            </div>
            <div className="nav_searchbar">
                <input type="text" name="" id="" />
                <div className="search_icon">
                    <SearchIcon id="search"/>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="nav_btn">
                <a href="">Sign In</a>
            </div>
            <div className="cart_btn">
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon id="icon"/>
                </Badge>
                <p>Cart</p>
            </div>
            <Avatar className="avatar"/>
        </div>
        </nav>
    </header>
  );
};

export default Navbar;
