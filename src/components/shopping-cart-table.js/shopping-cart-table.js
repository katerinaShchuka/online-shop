import React from 'react';
import './shopping-cart-table.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const renderRow = (item, idx) => {

                    const { id, title, count, total } = item;

                    return (
                    <tr key={id}>
                    <td>{idx + 1}</td>
                    <td>{title}</td>
                    <td>{count}</td>
                    <td>${total}</td>
                    <td>
                        <button 
                        onClick={() => onIncrease(id)}
                        className='btn1'> <IconButton aria-label="add" color="primary" size="small">
                        <AddIcon />
                        </IconButton> </button>

                        <button 
                        onClick={() => onDecrease(id)}
                        className='btn3'> <IconButton aria-label="horizontal" color="primary" size="small">
                        <HorizontalRuleIcon />
                        </IconButton> </button>

                       <button 
                       onClick={() => onDelete(id)}
                       className='btn2'> <IconButton aria-label="delete" color="primary" size="small">
                        <DeleteIcon />
                        </IconButton> </button>
                    </td>
                    </tr>
                      )  
                }

    return (
        <div className="shopping-cart-table">
            <h4>Your Order</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
               <tbody>
                {
                    items.map(renderRow)
                }
            </tbody>   
             </table>

        </div>
                    )
         }
                
    const mapStateToProps = ({shoppingCart: { cartItems, orderTotal }}) => {
        return {
            items: cartItems,
            total: orderTotal
        }
    }

    const mapDispatchToProps = {
       
            onIncrease: bookAddedToCart,
            onDecrease: bookRemovedFromCart,
            onDelete: allBooksRemovedFromCart
    }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);