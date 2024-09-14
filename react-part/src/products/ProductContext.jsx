import { createContext, useContext, useState } from "react";
import { useAllProducts } from "./useProducts";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [productsAll, setProducts] = useAllProducts();

    return (
        <ProductsContext.Provider value={{ productsAll, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext);
