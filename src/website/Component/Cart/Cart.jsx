import React from 'react'
import "./Cart.css"

const Cart = () => {
  return (
    <div>
        <div className='cart-container'>
            <div className='Cart-id'>id</div>
            <div className='Cart-img'>img</div>
            <div className='Cart-name'>Name</div>
            <div className='Cart-price'>Price</div>
            <div className='Cart-amount'>Amount</div>
            <button>Submitte now</button>
        </div>
        <div className='cart-container'>
            <div className='Cart-id'>id</div>
            <div className='Cart-img'>img</div>
            <div className='Cart-name'>Name</div>
            <div className='Cart-price'>Price</div>
            <div className='Cart-amount'>Amount</div>
            <button>Submitte now</button>
        </div>
    </div>
  )
}

export default Cart