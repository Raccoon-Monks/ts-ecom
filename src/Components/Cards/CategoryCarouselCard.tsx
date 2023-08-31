import Link from 'next/link'
import styles from './Styles/category-carousel-card.module.css'

export default function CategoryCarouselCard(props: any){
    return (
        <Link className={styles['category-card']} href={`/category/${props.item['item_id']}`} >
        <div>
            {props.item['item_name']}
        </div>
        </Link>
    )
}