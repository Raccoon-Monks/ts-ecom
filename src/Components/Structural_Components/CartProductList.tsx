import Link from 'next/link'
import styles from './Styles/cart-product-list.module.css'
import CartProductCard from '../Cards/CartProductCard'
import CartProducts from '../Functionality/CartProducts'

export default function CartProductList() {
    return (
        <div className={styles.div}>
            <p className={styles.title}> CART PRODUCT LIST </p>
            <section className={styles['product-list']}>
                <CartProducts />
            </section>
        </div>
    )
}