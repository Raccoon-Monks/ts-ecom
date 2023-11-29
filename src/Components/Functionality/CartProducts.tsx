import CartProductCard from '../Cards/CartProductCard';
import styles from './Styles/cart-products.module.css';
export default function CartProducts({ cart, deleteItem }: any) {
    if (cart.length === 0) {
        return (
            <div className={styles.empty}>
                <p className={styles['empty-title']}>
                    CARRINHO VAZIO
                </p>
            </div>
        )
    } else {
        return (
            <>
                {cart.map((item: any, i: any) => {

                    return (
                        <CartProductCard key={i} item={item} deleteItem={deleteItem} />
                    )

                })}
            </>
        )
    }


}

