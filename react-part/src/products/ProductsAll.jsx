import { useProductsContext } from "./ProductContext";

export default function ProductsAll() {
    const { productsAll, addToCheckout } = useProductsContext();

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
                                    <button 
                                        onClick={() => addToCheckout(product)} 
                                        disabled={product.quantity === 0}
                                    >
                                        {product.quantity === 0 ? "Out of Stock" : "Add to Checkout"}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <div>
                        <h2>There are no products</h2>
                    </div>
                )}
            </div>
        </>
    );
}
