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
    let matchesItem = [];
    let quantity

    cart = JSON.parse(localStorage.getItem('cart')!) || []

    let item = {
        item_name: itemName,
        item_id: itemID,
        quantity: 1
    }
    if (cart.length !== 0) {

        matchesItem = cart.filter((item: any) => item.item_id === itemID)
    }

    if (matchesItem.length >= 1) {
        quantity = matchesItem[0].quantity
        cart = cart.filter((item: any) => item.item_id !== itemID)
        item.quantity += quantity
        cart.push(item)
        localStorage.setItem('cart', JSON.stringify(cart))
    } else {
        cart.push(item)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}