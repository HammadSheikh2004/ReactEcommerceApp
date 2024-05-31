import React, { createContext, useEffect, useState } from 'react'
import Routing from '../Routing/Routing';
import Links from '../Routing/NavLinks';
export const Context = createContext();
const ContextApi = () => {

    const [apiData, setApiData] = useState(null);
    const [products, setProducts] = useState(0)
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                return res.json();
            }).then((data) => {
                setApiData(data.products);
            })
    }, []);

    const productsCount = (e) => {
        setProducts(e);
    }

    return (
        <>
            <Context.Provider value={{ apiData, products, productsCount }}>
                <Links />
                <Routing />
            </Context.Provider>
        </>
    )
}

export default ContextApi