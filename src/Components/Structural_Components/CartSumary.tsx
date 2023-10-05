import Link from 'next/link'
import styles from './Styles/cart-summary.module.css'
import CartCta from '../CTA/CartCta'

export default function CartSummary() {
    return (
        <div className={styles['cart-summary']}>
            CART SUMMARY
            <section className={styles.description}>
                <ul>
                    <li>Items</li>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                    <li>Valor Total</li>
                </ul>
            </section>
            <CartCta />
        </div>
    )
}