'use client';

import Link from 'next/link'
import styles from './Styles/product-detail-cta.module.css'

export default function ProductDetailsCta() {
    return (
        <Link href="/cart" className={styles.cta} onClick={AddToCartStorageItem} >

            ADD TO CART

        </Link>
    )
}

async function AddToCartStorageItem() {
    let itemName = location.pathname.replace(/\//g, " ").replace(/ /, "")
    let itemID = itemName.split(' ')[1]
    let cart
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        cart = JSON.parse(localStorage.getItem('cart')) || []
      }
      

    let item = {
        item_name: itemName,
        item_id: itemID
    }
    
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart))
}