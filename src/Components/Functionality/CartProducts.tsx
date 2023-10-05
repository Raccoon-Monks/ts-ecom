'use client'

import Link from 'next/link'
import styles from './Styles/category-product-card.module.css'
import CartProductCard from '../Cards/CartProductCard';
import { useEffect } from 'react';

export default function CartProducts(props: any) {

    let items


    items = JSON.parse(localStorage.getItem('cart')!) || []


    return (
        <>
            {items.map((item: any) => {
                return (
                    <CartProductCard item={item} />
                )
            })}
        </>
    )
}

