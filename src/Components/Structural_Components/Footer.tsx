import styles from './Styles/footer.module.css'
import Link from 'next/link'

export default function Footer(){
  return (
    <footer className={styles.footer} > 
      <div>FOOTER</div>
        <ul>
          <li><Link href="/">CONTATO</Link></li>
        </ul>
    </footer>
 )
}