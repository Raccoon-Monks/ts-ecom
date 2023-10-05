import Link from 'next/link'
import styles from './Styles/cart-product-card.module.css'

export default function CartProductCard(props: any) {

    return (
        <div className={styles.container}>
            <Link className={styles.card} href={`/product/${props.item['item_id']}`}>
                <div className={styles['div-product-name']}>
                    {props.item['item_name'].toUpperCase()}
                </div>
            </Link>
            <div className={styles.description}>
                <p>DESCRIÇÃO DO PRODUTO</p>
                <ul className={styles.ul}>
                    <li>{props.item['item_name'].toUpperCase()}</li>
                    <li>Id do produto: {props.item['item_id']}</li>
                </ul>
            </div>
        </div>
    )
}
