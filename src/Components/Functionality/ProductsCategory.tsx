import Link from 'next/link'
import styles from './Styles/category-product-card.module.css'
import CategoryProductCard from '../Cards/CategoryProductCard';

export default function ProductsCategory(props: any) {

    let items = props?.items

    return (
        <>
            {items.map((item: any) => {
                return (
                    <CategoryProductCard item={item} />
                )
            })}
        </>
    )
}