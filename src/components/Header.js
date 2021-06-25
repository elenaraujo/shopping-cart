import React, { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export function Header() {
  const { cartItems } = useContext(CartContext)
  const countCartItems = cartItems.lenght

  return (
    <header className='row block center'>
      <div>
        <a href='#/'>
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href='#/cart' className='opt'>
          Cart
          {countCartItems ? (
            <button className='badge'>{countCartItems}</button>
          ) : (
            ''
          )}
        </a>
        <a href='#/signin'>SignIn</a>
      </div>
    </header>
  )
}
