import Link from 'next/link'
import styles from './Styles/product-detail-cta.module.css'

export default function ProductDetailsCta({ addToCartFunction } : any) {
    return (
        <Link href="/cart" className={styles.cta} onClick={addToCartFunction} >

            ADD TO CART

        </Link>
    )
}