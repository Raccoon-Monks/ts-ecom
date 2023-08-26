import Image from 'next/image'
import styles from './page.module.css'
import LoginForm from '@/Components/Structural_Components/LoginForm'

export default function Home() {
  return (
    <main className={styles.main}>
      LOGIN
      <LoginForm/>
    </main>
  )
}
