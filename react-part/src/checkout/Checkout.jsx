import { Link, useNavigate } from "react-router-dom";
import { useProductsContext } from "../products/ProductContext";

export default function Checkout() {
    const { selectedProducts, removeFromCheckout } = useProductsContext();

    const navigate = useNavigate();

    // Calculate the total cost
    const totalCost = selectedProducts.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0).toFixed(2);

    return (
        <>
            <div className="checkout">
                <h1>Checkout</h1>
                {selectedProducts.length > 0 ? (
                    <>
                        <h4>Selected products</h4>
                        <ul>
                            {selectedProducts.map(product => (
                                <li className="product" key={product.id}>
                                    <h3>{product.name} {product.price} lv.</h3>
                                    <p>Quantity: {product.quantity}</p>
                                    <button onClick={() => removeFromCheckout(product.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <h3>Total cost: {totalCost} lv.</h3>
                        <button onClick={() => navigate('/payment')}>continue to Payment</button>
                    </>
                ) : (
                    <div>
                        <h4>There are no products</h4>
                    </div>
                )}
            </div>
        </>
    );
}

