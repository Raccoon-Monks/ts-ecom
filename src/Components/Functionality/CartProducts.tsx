'use client'

import CartProductCard from '../Cards/CartProductCard';
import styles from './Styles/cart-products.module.css';
export default function CartProducts({ cart, deleteItem }: any) {

    let items;

    if (typeof window !== 'undefined') {
        // Perform localStorage action
        items = cart
    }

    if (items.length === 0) {
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
                {items.map((item: any) => {

                    return (
                        <CartProductCard item={item} deleteItem={deleteItem} />
                    )

                })}
            </>
        )
    }


}

