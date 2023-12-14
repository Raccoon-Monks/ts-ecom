import Link from 'next/link'
import styles from './Styles/category-product-card.module.css'

export default function CategoryProductCard({ item }: any) {

    return (
        <Link className={styles.card} href={`/product/${item.id}`}>
            <div className={styles['div-product-name']}>
                {item.title}
                <img src={item.image} alt={item.description} className={styles.img} />
            </div>
        </Link>
    )
}