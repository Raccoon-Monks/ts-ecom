'use client'
import styles from './page.module.css'
import Filter from '@/Components/Structural_Components/FilterCategory'
import BreadCrumbs from '@/Components/Structural_Components/BreadCrumbs'
import CategoryProductList from '@/Components/Structural_Components/CategoryProductList'
import { useEffect, useState } from 'react'

export default function CategoryPage() {

  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products/');
        const json = await res.json();
        setProducts(json);
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <main className={styles.main}>

      <div className={styles.container}>
        <span className={styles.left}>
          <Filter />
        </span>
        <span className={styles.right}>
          <BreadCrumbs />
          {products &&
            <CategoryProductList products={products} />
          }
        </span>
      </div>

    </main>
  )
}