import CategoryProductCard from '../Cards/CategoryProductCard';

export default function ProductsCategory({ products }: any) {

    return (
        <>
            {products.map((prod: any) => {
                return (
                    <CategoryProductCard key={prod.id} item={prod} />
                )
            })}
        </>
    )
}