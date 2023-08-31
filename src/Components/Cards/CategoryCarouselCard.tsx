import Link from 'next/link'
import styles from './Styles/category-carousel-card.module.css'

export default function ProductCarouselCard(props: any){
    return (
        <Link href="/category/various" className={styles['category-card']}>
        <div>
            CATEGORY CARD
        </div>
        </Link>
    )
}