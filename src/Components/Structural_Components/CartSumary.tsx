'use client'
import Link from 'next/link'
import styles from './Styles/cart-summary.module.css'
import CartCta from '../CTA/CartCta'

export default function CartSummary() {

    let items = JSON.parse(localStorage.getItem('cart')!) || []

    return (
        <div className={styles['cart-summary']}>
            <p className={styles.title}>CART SUMMARY</p>
            <section className={styles.description}>
                <ul className={styles['item-list']}>
                    <li>Produtos Adicionados</li>
                    <ul>
                        {items.map((item: any) => {
                                return (
                                    <li>{item.item_name.toUpperCase()} 
                                    <br/>x{item.quantity}</li>
                                )
                            })}
                    </ul>
                    <li>Valor Total</li>
                </ul>
            </section>
            <CartCta />
        </div>
    )
}