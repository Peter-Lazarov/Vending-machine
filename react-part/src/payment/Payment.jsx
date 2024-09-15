import { useEffect, useState } from "react";
import { useProductsContext } from "../products/ProductContext";
import { useNavigate } from "react-router-dom";

export default function Payment() {
    const { selectedProducts, clearSelectedProducts } = useProductsContext();
    const [insertedCoins, setInsertedCoins] = useState([]);
    const [returnedCoins, setReturnedCoins] = useState([]);
    const [delayedReturnedCoins, setDelayedReturnedCoins] = useState([]);
    const [message, setMessage] = useState("");
    const [showPayment, setShowPayment] = useState(true);
    const navigate = useNavigate();

    const coinValues = {
        "10 st": 0.10,
        "20 st": 0.20,
        "50 st": 0.50,
        "1 lv": 1.00,
        "2 lv": 2.00
    };

    const totalCost = selectedProducts.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0).toFixed(2);

    const totalInsertedCoins = insertedCoins.reduce((total, coin) => total + coinValues[coin], 0).toFixed(2);

    const addCoin = (coin) => {
        setInsertedCoins([...insertedCoins, coin]);
    };

    const resetCoins = () => {
        setShowPayment(false);
        setReturnedCoins(insertedCoins);
        setMessage("You have canceled the order. Here are your inserted coins.");
        setInsertedCoins([]);
        clearSelectedProducts();
    };

    useEffect(() => {
        returnedCoins.forEach((coin, index) => {
            setTimeout(() => {
                setDelayedReturnedCoins(prev => [...prev, coin]);
            }, index * 700);
        });
    }, [returnedCoins]);

    const buyProducts = () => {
        if (totalInsertedCoins >= totalCost) {
            setShowPayment(false);

            let change = (totalInsertedCoins - totalCost).toFixed(2);
            //console.log('totalInsertedCoins ' + totalInsertedCoins);
            //console.log('totalCost ' + totalCost);
            let coinsToReturn = [];
            //console.log('1 change ' + change);
            Object.keys(coinValues).reverse().forEach(coin => {
                while (change >= coinValues[coin]) {
                    //console.log('coin '+ coinValues[coin]);
                    //console.log('2 change ' + change);

                    coinsToReturn.push(coin);
                    change = (change - coinValues[coin]).toFixed(2);
                }
            });

            setReturnedCoins(coinsToReturn);
            setInsertedCoins([]);
            
            if(totalInsertedCoins > totalCost){
                setMessage("You successfully bought the products! Here is your change");    
            }else{
                setMessage("You successfully bought the products!");
            }
        }
    };

    const returnToProducts = () => {
        setReturnedCoins([]);
        setDelayedReturnedCoins([]);
        clearSelectedProducts();
        navigate('/');
    }

    const canBuy = totalInsertedCoins >= totalCost;

    return (
        <div className="payment">
            {message != 'You have canceled the order. Here are your inserted coins.' ? (<>
                <div className="bought-products">
                    <h2>Selected Products</h2>
                    <ul>
                        {selectedProducts.map((product, index) => (
                            <li key={index}>
                                {product.name} - {product.quantity} x {product.price} lv.
                            </li>
                        ))}
                    </ul>
                    <p>Total Cost: {totalCost} lv.</p>
                </div></>) : (<></>)}
            {showPayment ? (
                <>
                    <h1>Payment</h1>
                    <div className="coins-nominal">
                        {Object.keys(coinValues).map((coin, index) => (
                            <button key={index} onClick={() => addCoin(coin)}>
                                Insert {coin}
                            </button>
                        ))}
                    </div>
                    <div>
                        <button onClick={resetCoins}>Reset</button>
                        <button onClick={buyProducts} disabled={!canBuy}>Buy</button>
                    </div>
                    <div className="coins-inserted">
                        <h2>Inserted Coins</h2>
                        <ul>
                            {insertedCoins.map((coin, index) => (
                                <li key={index}>{coin}</li>
                            ))}
                        </ul>
                        <p>Total Inserted Coins: {totalInsertedCoins} lv.</p>
                    </div>
                </>
            ) : (<>
                <div className="coins-returned">
                    {message && <p>{message}</p>}
                    <ul>
                        {delayedReturnedCoins.map((coin, index) => (
                            <li key={index}>{coin}</li>
                        ))}
                    </ul>
                    <button onClick={() => returnToProducts()}>return to Products</button>
                </div>
            </>)}

        </div>
    );
}
