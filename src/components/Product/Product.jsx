import React from 'react';
import { NavLink } from 'react-router-dom';
import Data from './../../Data.jsx';

const Product = () => {

  const productItem = (item)=>{
    return (
      <div className='card my-5 py-5 px-4' key={item.id} style={{width:"30%"}} >
        <img src={item.image} alt={item.title} />
        <div className='card-content text-center'>
          <h5 className='card-title'>{item.title}</h5>
          <p className='card-price'>${item.price}</p>
          <NavLink to={`/products/${item.id}`} className='btn btn-outline-primary'>Buy Now</NavLink>
        </div>
      </div>
    );
  }
  
  return (
    <>
     <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h1>Product</h1>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row justify-content-around'>
        {Data.map(productItem)}
      </div>
    </div>
    </>
  )
}

export default Product