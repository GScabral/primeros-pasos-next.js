"use client";
import {  createContext, useState } from "react";
import { ProductModel } from "../models/product"

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
    const [cart, setCart] = useState<ProductModel[]>([]);
    const [listProduct, setListProduct] = useState<ProductModel[]>([
        { id: 1, name: "shoes", price: 9999 },
        { id: 2, name: "shoes2", price: 1111 }
    ])

    return(
        <CardContext.Provider value={{ cart, setCart, listProduct }}>
            {children }
        </CardContext.Provider>
    )
}