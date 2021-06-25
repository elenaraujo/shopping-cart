import React, { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export function Basket() {
  const { cartItems, onAdd, onRemove } = useContext(CartContext)

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const shippingPrice = 10
  const totalPrice = itemsPrice + shippingPrice

  return (
    <aside className='block col-1'>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map(item => (
        <div key={item.id} className='row'>
          <div className='col-2'>{item.name}</div>
          <div className='col-2'>
            <button onClick={() => onAdd(item)} className='add'>
              +
            </button>
            <button onClick={() => onRemove(item)} className='remove'>
              -
            </button>
          </div>
          <div className='col-2 text-right'>
            {item.qty} x R${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className='row'>
            <div className='col-2'>Items Price</div>
            <div className='col-1 text-right'>R${itemsPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>Shipping Price</div>
            <div className='col-1 text-right'>R${shippingPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>
              <strong>Total Price</strong>
            </div>
            <div className='col-1 text-right'>R${totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div className='row'>
            <button onClick={() => alert('Implement Checkout')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  )
}
