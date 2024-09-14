import { useProductsContext } from "./ProductContext"


export default function ProductsAll() {
    const { productsAll } = useProductsContext();

    return (
        <>
            <div className="products-all">
                {productsAll.length > 0 ? (
                    <>
                        <h2>All products</h2>
                        <ul>
                            {productsAll.map(product => (
                                <li className="product" key={product.id}>
                                    <h3>{product.name}</h3>
                                    <p>Price {product.price} lv.</p>
                                    <p>Available {product.quantity}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <div>
                        <h2>There is no products</h2>
                    </div>
                )}
            </div>
        </>
    )
}