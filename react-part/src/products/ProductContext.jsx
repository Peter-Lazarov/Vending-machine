import { createContext, useContext, useState } from "react";
import { useAllProducts } from "./useProducts";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [productsAll, setProducts] = useAllProducts();
    const [selectedProducts, setSelectedProducts] = useState([]);

    const addToCheckout = (product) => {
        setProducts(prevProducts => 
            prevProducts.map(p => 
                p.id === product.id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p
            )
        );

        setSelectedProducts(prevProducts => {
            const existingProduct = prevProducts.find(p => p.id === product.id);
            if (existingProduct) {
                return prevProducts.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                return [...prevProducts, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCheckout = (productId) => {
        setSelectedProducts(prevProducts => {
            const product = prevProducts.find(p => p.id === productId);
            if (product.quantity > 1) {
                return prevProducts.map(p =>
                    p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
                );
            } else {
                return prevProducts.filter(p => p.id !== productId);
            }
        });

        setProducts(prevProducts => 
            prevProducts.map(p => 
                p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
            )
        );
    };

    return (
        <ProductsContext.Provider value={{ productsAll, setProducts, selectedProducts, addToCheckout, removeFromCheckout }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => useContext(ProductsContext);
