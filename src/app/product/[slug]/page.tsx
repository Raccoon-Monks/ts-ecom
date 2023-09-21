import ProductShippingCalculation from '@/Components/Structural_Components/ProductShippingCalculation'
import ImageGallery from '../../../Components/Structural_Components/ImageGallery'
import ProductDetails from '../../../Components/Structural_Components/ProductDetails'
import styles from './page.module.css'
import RelatedProducts from '@/Components/Structural_Components/RelatedProducts'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <section>
        <ImageGallery/>
        <ProductDetails/>
      </section>
      
      <ProductShippingCalculation/>
      <RelatedProducts/>

    </main>
  )
}
