import { createContext, useContext, useState } from "react";
import { useAllProducts } from "./useProducts";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [productsAll, setProducts] = useAllProducts();
    const [selectedProducts, setSelectedProducts] = useState([]);

    const addToCheckout = (productSelected) => {
        setProducts(previousProducts => 
            previousProducts.map(previousProduct => 
                previousProduct.id === productSelected.id && previousProduct.quantity > 0 ? { ...previousProduct, quantity: previousProduct.quantity - 1 } : previousProduct
            )
        );

        setSelectedProducts(previousProducts => {
            const existingProduct = previousProducts.find(previousProduct => previousProduct.id === productSelected.id);
            if (existingProduct) {
                return previousProducts.map(previousProduct =>
                    previousProduct.id === productSelected.id ? { ...previousProduct, quantity: previousProduct.quantity + 1 } : previousProduct
                );
            } else {
                return [...previousProducts, { ...productSelected, quantity: 1 }];
            }
        });
    };

    const removeFromCheckout = (productSelectedId) => {
        setSelectedProducts(previousProducts => {
            const product = previousProducts.find(previousProduct => previousProduct.id === productSelectedId);
            if (product.quantity > 1) {
                return previousProducts.map(previousProduct =>
                    previousProduct.id === productSelectedId ? { ...previousProduct, quantity: previousProduct.quantity - 1 } : previousProduct
                );
            } else {
                return previousProducts.filter(previousProduct => previousProduct.id !== productSelectedId);
            }
        });

        setProducts(previousProducts => 
            previousProducts.map(previousProduct => 
                previousProduct.id === productSelectedId ? { ...previousProduct, quantity: previousProduct.quantity + 1 } : previousProduct
            )
        );
    };

    const clearSelectedProducts = () => {
        setSelectedProducts([]);
    };

    return (
        <ProductsContext.Provider value={{ productsAll, setProducts, selectedProducts, addToCheckout, removeFromCheckout, clearSelectedProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => useContext(ProductsContext);
