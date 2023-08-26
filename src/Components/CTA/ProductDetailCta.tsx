import Link from 'next/link'
import styles from './Styles/product-detail-cta.module.css'

export default function ProductDetailsCta (){
    return (
        <Link href="/product/1" className={styles.cta}>
        <button>
            CTA
        </button>
        </Link>
    )
}