import { useState, createContext } from 'react'
import data from '../../data'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const { products } = data
  const [cartItems, setCartItems] = useState([])

  const onAdd = product => {
    const exists = cartItems.find(item => item.id === product.id)

    if (exists) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...exists, qty: exists.qty + 1 } : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = product => {
    const exists = cartItems.find(item => item.id === product.id)
    if (exists.qty === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...exists, qty: exists.qty - 1 } : item
        )
      )
    }
  }

  return (
    <CartContext.Provider
      value={{ products, cartItems, setCartItems, onAdd, onRemove }}
    >
      {children}
    </CartContext.Provider>
  )
}
