import React, { useContext } from 'react'
import { CartContext } from '../contexts/cart'
import Product from './Product'

export function Main() {
  const { products, onAdd } = useContext(CartContext)

  return (
    <main className='block col-2'>
      <h2>Products</h2>
      <div className='row'>
        {products.map(product => (
          <Product onAdd={onAdd} key={product.id} product={product}></Product>
        ))}
      </div>
    </main>
  )
}
