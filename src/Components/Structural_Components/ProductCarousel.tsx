import styles from './Styles/product-carousel.module.css'
import ProductCarouselCard from "../Cards/ProductCarouselCard"

export default function ProductCarousel () {
    return (
        <div className={styles.carousel}>
            <ProductCarouselCard />
            <ProductCarouselCard/>
            <ProductCarouselCard/>
        </div>
    )
}