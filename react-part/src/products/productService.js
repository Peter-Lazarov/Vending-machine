import { server_url } from "../services/apiServerUrl";
import requests from "../services/requests";

export const getAllProducts = async () => {
    console.log(`${server_url}/products`);
    const productsAsJSON = await requests.get(`${server_url}/products`);
    
    const productsAsValues = Object.values(productsAsJSON);

    return productsAsValues;
}
