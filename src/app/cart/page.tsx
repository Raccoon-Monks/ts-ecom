import styles from './page.module.css'
import CartProductList from '@/Components/Structural_Components/CartProductList'
import CartSummary from '@/Components/Structural_Components/CartSumary'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <CartProductList />
        <CartSummary />
      </div>
    </main>
  )
}
