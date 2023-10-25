'use client'

import styles from './page.module.css'
import CartProductList from '@/Components/Structural_Components/CartProductList'
import CartSummary from '@/Components/Structural_Components/CartSumary'
import { useEffect, useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')!) || []);

  const deleteItem = (id: number) => {
    let itemID = id

    setCart(cart.filter((item: any) => item.item_id !== itemID))
    localStorage.setItem('cart',JSON.stringify(cart))

    console.log(cart)
  };

  useEffect(() => {
    console.log("Atualizou carrinho!")
  }, [cart])
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <CartProductList cart={cart} deleteItem={deleteItem} />
        <CartSummary />
      </div>
    </main>
  )
}
