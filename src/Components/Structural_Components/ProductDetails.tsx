import ProductDetailsCta from '../CTA/ProductDetailCta'
import style from './Styles/product-details.module.css'

export default function ProductDetails({ addToCartFunction }: any) {


  return (
    <main className={style['product-detail']}>
      <h1>PRODUCT DETAIL</h1>
      <ProductDetailsCta addToCartFunction={addToCartFunction} />
    </main>
  )
}