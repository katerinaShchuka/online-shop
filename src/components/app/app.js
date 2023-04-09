import React from "react";
import { Route, Routes } from 'react-router-dom';
import './app.css';
import { HomePage, CartPage } from '../pages';
import ShopHeader from "../shop-header";

const App = () => {
    
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210}/>
        <Routes>
            <Route 
                path="/"
                element={<HomePage />}>

            </Route>
           
            <Route 
                path="/cart"
                element={<CartPage />}>
             </Route>
        </Routes>
         </main>
    )
};

export default App;