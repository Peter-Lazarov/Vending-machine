import { useState } from "react";
import { useProductsContext } from "../products/ProductContext";

export default function Payment() {
    const { selectedProducts } = useProductsContext();
    const [insertedCoins, setInsertedCoins] = useState(0);

    const coinValues = {
        "10 st": 0.10,
        "20 st": 0.20,
        "50 st": 0.50,
        "1 lv": 1.00,
        "2 lv": 2.00
    };

    const totalCost = selectedProducts.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    const addCoin = (value) => {
        setInsertedCoins(insertedCoins + value);
    };

    const resetCoins = () => {
        setInsertedCoins(0);
    };

    const canBuy = insertedCoins >= totalCost;

    return (
        <div className="payment">
            <h1>Payment</h1>
            <div className="coins">
                {Object.keys(coinValues).map(coin => (
                    <button key={coin} onClick={() => addCoin(coinValues[coin])}>
                        Add {coin}
                    </button>
                ))}
            </div>
            <p>Inserted Coins: {insertedCoins.toFixed(2)} lv.</p>
            <p>Total Cost: {totalCost.toFixed(2)} lv.</p>
            <button onClick={resetCoins}>Reset</button>
            {canBuy ? (
                <button onClick={() => alert("Purchase successful!")}>Buy</button>
            ) : (
                <p>Not enough money to buy the selected products.</p>
            )}
        </div>
    );
}
