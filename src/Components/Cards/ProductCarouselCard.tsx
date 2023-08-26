import Link from 'next/link'
import styles from './Styles/product-carousel-card.module.css'

export default function ProductCarouselCard(){
    return (
        <Link className={styles['product-card']} href="/product/1">
        <div >
            PRODUCT CARD
        </div>
        </Link>
    )
}