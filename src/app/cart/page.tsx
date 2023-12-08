'use client'

import styles from './page.module.css'
import CartProductList from '@/Components/Structural_Components/CartProductList'
import CartSummary from '@/Components/Structural_Components/CartSumary'
import { useEffect, useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')!) || []);
  }, [])


  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'view_cart',
      currency: 'BRL',
      value: 10,
      items: cart,
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const handleDeleteItem = (id: number) => {
    const cartItemRemoved = cart.filter((item: any) => item.item_id !== id)
    setCart(cartItemRemoved)
  };

  return (
    <div className={styles.container}>
      <CartProductList
        cart={cart}
        handleDeleteItem={handleDeleteItem}
      />
      <CartSummary
        cart={cart}
      />
    </div>
  )
}
