import styles from './Styles/cart-product-list.module.css'
import CartProducts from '../Functionality/CartProducts'

export default function CartProductList({ cart, handleDeleteItem }: any) {
    return (
        <div className={styles.container}>
            <p className={styles.title}> CART PRODUCT LIST </p>
            <section className={styles['product-list']}>
                <CartProducts cart={cart} deleteItem={handleDeleteItem} />
            </section>
        </div>
    )
}