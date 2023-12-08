'use client'
import Link from 'next/link'
import styles from './Styles/cart-summary.module.css'
import CartCta from '../CTA/CartCta'

export default function CartSummary({ cart }: any) {

    return (
        <div className={styles['cart-summary']}>
            <p className={styles.title}>CART SUMMARY</p>
            <section className={styles.description}>
                {cart.length > 0 ? (

                    <ul className={styles['item-list']}>
                        <li>Produtos Adicionados</li>
                        <ul>
                            {cart.map((item: any, i: number) => {
                                return (
                                    <li key={i}>{item.item_name.toUpperCase()}
                                        <br />x{item.quantity}</li>
                                )
                            })}
                        </ul>
                        <li>Valor Total</li>
                    </ul>
                ) : (
                    <div className={styles.empty_cart_summary}>
                        <h3>Carrinho vazio</h3>
                    </div>
                )
                }
            </section>
            <CartCta />
        </div>
    )
}