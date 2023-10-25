import Link from 'next/link'
import styles from './Styles/cart-product-list.module.css'
import CartProducts from '../Functionality/CartProducts'

export default function CartProductList({ cart, deleteItem }: any) {
    return (
        <div className={styles.div}>
            <p className={styles.title}> CART PRODUCT LIST </p>
            <section className={styles['product-list']}>
                <CartProducts cart={cart} deleteItem={deleteItem} />
            </section>
        </div>
    )
}