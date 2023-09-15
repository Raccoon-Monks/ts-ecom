import Link from 'next/link'
import styles from './Styles/category-product-card.module.css'
import CategoryProductCard from '../Cards/CategoryProductCard';

export default function ProductsCategory(props: any) {
    let mockItems = [
        { item_id: 1, item_name: "Product 1" },
        { item_id: 2, item_name: "Product 2" },
        { item_id: 3, item_name: "Product 3" },
        { item_id: 4, item_name: "Product 4" },
        { item_id: 5, item_name: "Product 5" },
        { item_id: 6, item_name: "Product 6" },
        { item_id: 7, item_name: "Product 7" },
        { item_id: 8, item_name: "Product 8" },
        { item_id: 9, item_name: "Product 9" },
        { item_id: 10, item_name: "Product 10" },
        { item_id: 11, item_name: "Product 11" },
        { item_id: 12, item_name: "Product 12" },
        { item_id: 13, item_name: "Product 13" },
        { item_id: 14, item_name: "Product 14" },
        { item_id: 15, item_name: "Product 15" },
        { item_id: 16, item_name: "Product 16" },
        { item_id: 17, item_name: "Product 17" },
        { item_id: 18, item_name: "Product 18" },
        { item_id: 19, item_name: "Product 19" },
        { item_id: 20, item_name: "Product 20" },
    ]
    return (
        <>
            {mockItems.map(e => {
                return (
                    <CategoryProductCard item={e} />
                )
            })}
        </>
    )
}