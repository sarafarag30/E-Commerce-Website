import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from './../../Data.jsx';
import { useDispatch } from 'react-redux';
import style from './ProductSpecifics.module.css';
import { addItem, deleteItem } from './../../redux/actions/index';

const ProductSpecifics = () => {
    const [cartButton , setCartButton] = useState("Add To Cart");
    const productId = useParams();
    const productSpecific = Data.filter( x => x.id == productId.id );
    const product = productSpecific[0];

    console.log(product);
    
    const dispatch = useDispatch();

    const cartBtn = (product)=>{
        if(cartButton === "Add To Cart"){
            dispatch(addItem(product));
            setCartButton("Remove From Cart");
        }else{
            dispatch(deleteItem(product));
            setCartButton("Add To Cart");
        }
    }

  return (
    <div>
        <div className='container my-5 py-4'>
            <div className='row'>
                <div className='col-lg-6  mx-auto d-flex justify-content-center'>
                    <img src={product.image} alt={product.title} className={style.productImg} />
                </div>
                <div className='col-lg-6 d-flex justify-content-center flex-column'>
                    <h1 className='display-5'>{product.title}</h1>
                    <h2 className='my-4'>${product.price}</h2>
                    <p>{product.description}</p>
                    <button onClick={()=>cartBtn(product)} className='btn btn-outline-primary my-4'>{cartButton}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSpecifics

