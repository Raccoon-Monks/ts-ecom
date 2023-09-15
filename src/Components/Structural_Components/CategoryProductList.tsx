import styles from './Styles/category-product-list.module.css'
import CategoryProductCard from '../Cards/CategoryProductCard'
import ProductsCategory from '../Functionality/ProductsCategory'
export default function CategoryProductList() {

    let mockItems = [
        {item_id:1, item_name:"Product 1"},
        {item_id:2, item_name:"Product 2"},
        {item_id:3, item_name:"Product 3"},
        {item_id:4, item_name:"Product 4"},
        // {item_id:5, item_name:"Product 5"},
        // {item_id:6, item_name:"Product 6"},
        // {item_id:7, item_name:"Product 7"},
        // {item_id:8, item_name:"Product 8"},
      ]

    return (
        <span className={styles['product-list']}>
            CATEGORY LIST
            <div className={styles['inside-list']}>
                <ProductsCategory/>
            </div>
        </span>
    )
}