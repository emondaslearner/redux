import React from 'react';
import './Products.css';
import {add_to_cart} from '../../redux/Action/Action';
import { connect } from 'react-redux';

const Products = (props) => {
    const {product,click} = props;
    const {id,name} = product;
    return (
        <div className="product">
                <h3>Id:{id}</h3>
                <h2>Id:{name}</h2>
                <button className="button" onClick={() => click(id)}>Add to cart</button>
        </div>
    );
};

export default Products;