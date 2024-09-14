import { useContext, useEffect } from "react";
import { useState } from "react";
import { getAllProducts } from "./productService";


export function useAllProducts(){
    const [product, setProduct] = useState([]);

    useEffect(() => {
        (async () => {
            const productsAll = await getAllProducts();
            setProduct(productsAll);
        })()
    }, []);

    return [product, setProduct]
}
