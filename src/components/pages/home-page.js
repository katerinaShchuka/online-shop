import React from "react";
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table.js";

const HomePage = () => {
    
    return ( 
        <div>
            <BookList />
            <ShoppingCartTable />
         </div>
    )
}

export default HomePage;