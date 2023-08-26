import style from './Styles/related-products.module.css'
import RelatedProductsCard from "../Cards/RelatedProductsCard"

export default function RelatedProducts(){
    return(
        <section className = {style['related-products']}>
            {[1,2,3].map((item,index) => {
                return (
                    <RelatedProductsCard key={index}/>
                )
            })}
        </section>
    )
}