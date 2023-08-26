import ProductDetailsCta from '../CTA/ProductDetailCta'
import style from './Styles/product-details.module.css'

export default function ProductDetails(){
    return (
        <main className={style['product-detail']}>
          <h1>PRODUCT DETAIL</h1>
          <ProductDetailsCta/>  
        </main>
    )
}