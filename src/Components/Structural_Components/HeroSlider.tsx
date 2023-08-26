import Link from 'next/link'
import styles from './Styles/hero-slider.module.css'

export default function HeroSlider(){
    return (
        <Link href="/category/variedades">
        <div className={styles.hero}>
            HERO/SLIDER
        </div>
        </Link>
    )
}