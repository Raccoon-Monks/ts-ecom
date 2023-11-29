import CategoryProductCard from '../Cards/CategoryProductCard';

export default function ProductsCategory(props: any) {

    let items = props?.items

    return (
        <>
            {items.map((item: any, i: number) => {
                return (
                    <CategoryProductCard key={i} item={item} />
                )
            })}
        </>
    )
}