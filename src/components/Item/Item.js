import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./item.css";

const Item = (props) => {
  const { img, name, seller, price, stock } = props.product;
  

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="productName">
        <p>{name}</p>

        <p>
          <small>by:{seller}</small>
        </p>
        <h2>${price}</h2>
        <br />
        <p>
          <small>Only:{stock} left in stock</small>
        </p>
        <button onClick={() =>props.handleAddProduct(props.product) }className="cartBtn"><FontAwesomeIcon icon={faShoppingCart}/>Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;
