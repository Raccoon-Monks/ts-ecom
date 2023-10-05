import Link from 'next/link'
import styles from './Styles/cart-product-list.module.css'
import CartProductCard from '../Cards/CartProductCard'
import CartProducts from '../Functionality/CartProducts'

export default function CartProductList() {
    return (
        <div className={styles.div}>
            <div> CART PRODUCT LIST </div>
            <section className={styles['product-list']}>
                <CartProducts />
            </section>
        </div>
    )
}