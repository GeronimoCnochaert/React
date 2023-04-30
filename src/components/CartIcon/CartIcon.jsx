import React from 'react'
import './CartIcon.css'

const CartIcon = () => {
    const imageCarrito = './src/assets/carrito-compra.png';  
    return (
    <div>
      <img className='cartIcon' src={imageCarrito} alt="Carrito de Compras" />
      <p>5</p>
    </div>
  )
}

export default CartIcon
