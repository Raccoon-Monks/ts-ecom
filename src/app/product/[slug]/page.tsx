'use client'

import { useEffect, useState } from 'react'
import ProductShippingCalculation from '@/Components/Structural_Components/ProductShippingCalculation'
import ImageGallery from '../../../Components/Structural_Components/ImageGallery'
import ProductDetails from '../../../Components/Structural_Components/ProductDetails'
import styles from './page.module.css'
import RelatedProducts from '@/Components/Structural_Components/RelatedProducts'

export default function Home() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')!) || []);

  console.log(cart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCartFunction = () => {
    // setCart(JSON.parse(localStorage.getItem('cart')!) || [])
    const itemName = location.pathname.replace(/\//g, " ").replace(/ /, "")
    const itemID = itemName.split(' ')[1]
    let matchesItem: any = [];
    let quantity = 1;
    const product = {
      item_name: itemName,
      item_id: itemID,
      quantity: quantity,
    };

    console.log("product")
    console.log(product)

    if (cart.length !== 0) {
      matchesItem = cart.filter((item: any) => item.item_id === itemID) || []
    };

    if (matchesItem.length > 0) {
      let equalItem = cart.filter((item: any) => item.item_id === itemID)
      const manageCart = cart.filter((item: any) => item.item_id !== itemID)

      equalItem = equalItem.map((item: any) => {
        return {
          item_name: item.item_name,
          item_id: item.item_id,
          quantity: Number(item.quantity) + 1,
        }
      })

      console.log("Manage Cart")
      console.log(manageCart)

      manageCart.push(equalItem[0]);
      setCart(manageCart);

    } else {
      setCart((prevCart: any) => {
        return [
          ...prevCart,
          product
        ]
        console.log(cart)
      })
    }

  }

  return (
    <main className={styles.main}>

      <section>
        <ImageGallery />
        <ProductDetails addToCartFunction={addToCartFunction} />
        <button onClick={addToCartFunction}>Clique aqui para testar função</button>
      </section>

      <ProductShippingCalculation />
      <RelatedProducts />

    </main>
  )
}
