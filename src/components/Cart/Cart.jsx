import React from 'react';
import style from './Cart.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/actions';

const Cart = () => {

    const state = useSelector((state)=>state.counterReducer);
    const dispatch = useDispatch();
    
    const close = (item)=>{
        dispatch(deleteItem(item));
    }

    const emptyCart = ()=>{
        return(
            <div className='rounded-3 py-4 px-4'>
                <div className='container py-5'>
                    <div className='row'>
                        <h3 className='text-center'>The Cart is empty!</h3>
                    </div>
                </div>
            </div>
        )
    }

    const cartContents = (cartContent)=>{
        return(
            <div className='bg-light px-3 my-4 rounded-3' key={cartContent.id}>
                <div className='container py-5'>
                    <button onClick={()=>close(cartContent)} className="btn btn-outline-danger float-end" aria-label='Close'>Remove</button>
                    <div className='row justify-content-center'>
                        <div className='col-lg-4'>
                            <img src={cartContent.image} alt={cartContent.title} className={style.cartImg}/>
                        </div>
                        <div className='col-lg-4'>
                            <h3>{cartContent.title}</h3>
                            <p>${cartContent.price}</p>
                            <p className='text-muted'>{cartContent.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


  return (
    <div>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartContents)}
    </div>
  )
}

export default Cart

