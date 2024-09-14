import { useState } from "react";

export default function Checkout() {
    const [selectedProducts, setSelectedProducts] = useState([]);

    return (
        <>
            <div className="checkout">
            <h1>Checkout</h1>
                {selectedProducts.length > 0 ? (
                    <>
                        <h2>Selected products</h2>
                        <ul>
                            {selectedProducts.map(product => (
                                <li className="product" key={product.id}>
                                    <h3>{product.name} {product.price}</h3>
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