import React from 'react';
import './shop-header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header">    
            <div className="logo" >Online Book Store</div>
            <div className="shopping-cart"> {numItems} items (${total})</div> 
             <Link to="/cart">
              <div className="shopping-icon"> <ShoppingCartIcon /> </div>
              </Link>
        </header>
    )
}

export default ShopHeader;