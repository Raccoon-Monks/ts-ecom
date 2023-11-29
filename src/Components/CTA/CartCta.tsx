'use client';

import Link from 'next/link'
import styles from './Styles/begin-checkout-cta.module.css'

export default function CartCta() {
    return (
        <Link href="/checkout/payment" className={styles.cta} >

            BEGIN CHECKOUT

        </Link>
    )
}