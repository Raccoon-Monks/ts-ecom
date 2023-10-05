'use client'

import Link from 'next/link'
import styles from './Styles/cart-product-card.module.css'

export default function CartProductCard(props: any) {

    return (
        <div className={styles.container}>
            <Link className={styles.card} href={`/product/${props.item['item_id']}`}>
                <div className={styles['div-product-name']}>
                    {props.item['item_name'].toUpperCase()}
                </div>
            </Link>
            <div className={styles.description}>
                <div>
                    <p>DESCRIÇÃO DO PRODUTO</p>
                    <ul className={styles.ul}>
                        <li>{props.item['item_name'].toUpperCase()}</li>
                        <li>Id do produto: {props.item['item_id']}</li>
                        <li>Quantidade: {props.item.quantity}</li>
                    </ul>
                </div>
                <div className={styles.remove}>
                    <button className={styles['remove-button']} onClick={() => removeFromCart(props.item.item_id)}>
                        Remover
                    </button>
                </div>

            </div>
        </div>
    )
}

async function removeFromCart(id: number) {
    let itemID = id
    let cart = JSON.parse(localStorage.getItem('cart')!)

    cart = cart.filter((item: any) => item.item_id !== itemID)

    localStorage.setItem('cart',JSON.stringify(cart))
}