import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Item from '../Item/Item';
import './shop.css';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first = fakeData.slice(0,15);

    const [products, setProduct] = useState(first);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        console.log(product,"product added");
        const newCart = [...cart, product];
        setCart(newCart);
    };
   
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Item 
                        handleAddProduct = {handleAddProduct}
                        product={pd}></Item>)
                }  
            </div>

            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;