'use client'

import styles from './page.module.css'
import CartProductList from '@/Components/Structural_Components/CartProductList'
import CartSummary from '@/Components/Structural_Components/CartSumary'
import { useEffect, useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')!) || []);
  
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'view_cart',
      currency: 'BRL',
      value:  10,
      items: cart,
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);
  
  const deleteItem = (id: number) => {
    const cartItemRemoved = cart.filter((item: any) => item.item_id !== id)
    setCart(cartItemRemoved)
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <CartProductList cart={cart} deleteItem={deleteItem} />
        <CartSummary />
      </div>
    </main>
  )
}
