import Link from 'next/link'
import styles from './Styles/cart-product-card.module.css'

export default function CartProductCard({item, deleteItem}: any) {

    return (
        <div className={styles.container}>
            <Link className={styles.card} href={`/product/${item['item_id']}`}>
                <div className={styles['div-product-name']}>
                    {item['item_name'].toUpperCase()}
                </div>
            </Link>
            <div className={styles.description}>
                <div>
                    <p>DESCRIÇÃO DO PRODUTO</p>
                    <ul className={styles.ul}>
                        <li>{item['item_name'].toUpperCase()}</li>
                        <li>Id do produto: {item['item_id']}</li>
                        <li>Quantidade: {item.quantity}</li>
                    </ul>
                </div>
                <div className={styles.remove}>
                    <button className={styles['remove-button']} onClick={() => deleteItem(item.item_id)}>
                        Remover
                    </button>
                </div>

            </div>
        </div>
    )
}