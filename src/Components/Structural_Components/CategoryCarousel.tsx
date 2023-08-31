import styles from './Styles/category-carousel.module.css'
import Carousel from '../Functionality/Carousel'

export default function CategoryCarousel () {
    let mockItems = [
      {item_id:1, item_name:"Category 1"},
      {item_id:2, item_name:"Category 2"},
      {item_id:3, item_name:"Category 3"},
      {item_id:4, item_name:"Category 4"},
      {item_id:5, item_name:"Category 5"},
      {item_id:6, item_name:"Category 6"},
      {item_id:7, item_name:"Category 7"},
      {item_id:8, item_name:"Category 8"},
    ]

    return (
        <div className={styles.carousel}>
            <Carousel type={"category"} items={mockItems}/>
        </div>
    )
}