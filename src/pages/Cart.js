import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

// If you want to change the store than you need to dispatch the action
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state=> state.cart);
  const handleRemove = (productId) => {
      dispatch(remove(productId))
  }
  return ( 
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
             products.map(product => (
                <div key={product.id} className='cartCard'>
                    <img src={product.image} alt=""/>
                    <h5>{product.title}</h5>
                    <h5>${product.price}</h5>
                    <button className='btn' onClick={() => handleRemove(product.id)}>Delete</button>
                </div>
             ))
        }
      </div>
    </div>
  )
}

export default Cart