import Link from 'next/link'
import styles from './Styles/category-carousel-card.module.css'

export default function ProductCarouselCard(){
    return (
        <Link href="/category" className={styles['category-card']}>
        <div>
            CATEGORY CARD
        </div>
        </Link>
    )
}