import React from 'react';
import Products from '../Products/Products';
import {add_to_cart} from '../../redux/Action/Action'
import './Shop.css';
import { connect } from 'react-redux';
import Cart from '../Cart/Cart'
const Shop = (props) => {
    const {product,add_to_cart,cart} = props;
    return (
        <div className="div">
            <div className="div">
                {
                    cart.map(cart=> <li>{cart}<button>x</button></li>)
                }
                {
                    product.map(pd => <Products key={pd.id} product={pd} click={add_to_cart} ></Products>)
                }
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        cart:state.cart,
        product:state.product
    }
}
const mapDispatchTooProps = {
    add_to_cart:add_to_cart
}

export default connect(mapStateToProps,mapDispatchTooProps)(Shop);