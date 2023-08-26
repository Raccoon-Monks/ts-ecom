import styles from './Styles/category-carousel.module.css'
import CategoryCarouselCard from "../Cards/CategoryCarouselCard"

export default function CategoryCarousel () {
    return (
        <div className={styles.carousel}>
            <CategoryCarouselCard />
            <CategoryCarouselCard/>
            <CategoryCarouselCard/>
        </div>
    )
}