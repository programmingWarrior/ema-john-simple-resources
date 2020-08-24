import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart = props.cart;
    
    // const totalPrice = cart.reduce((total,prd)=> total+prd.price,0);
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total+product.price;

    }
    let shipping = 0;

    if(total< 35 && total>15){
        shipping = 4.12;
    }else if(total<15 && total>0){
        shipping = 0;
    }else if(total>100){
        shipping = 12.99;
    }
    let tax = 0;
    if(total>100){
        tax = 5;
    }else if(total<1000 && total > 100){
        tax = 10;
    }else if(total>1000){
        tax = 20;
    }
    let vat = 0;
    if(total > 100){
        vat = 5;
    }else if(total<100){
        vat = 0;
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length} </p>
            <p>Product Price:{total}</p>
            <p>Shipping Cost:{shipping}</p>
            <p>Tax+VAT:{tax+vat}</p>
            <p>Total Price:{total+shipping +tax+ vat}</p>
            
        </div>
    );
};

export default Cart;