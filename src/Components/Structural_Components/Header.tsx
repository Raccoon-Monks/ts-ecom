import styles from './Styles/header.module.css'
import Link from 'next/link'

export default function Header(){
  return (
    <header className={styles.header} > 
      <div>HEADER</div>
      <nav>
        <ul>
          <li ><Link href="/" >LOGO/HOME</Link></li>
          <li><Link href="/login">LOGIN</Link></li>
          <li><Link href="/cart">CART</Link></li>
        </ul>
      </nav>
    </header>
 )
}