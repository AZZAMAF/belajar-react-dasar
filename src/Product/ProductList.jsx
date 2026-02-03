import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList(){
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false)


    function handleClick(){
        setLoad(true)
    }
    useEffect(() =>{
        async function fetchProducts() {
            const response = await fetch("/public/products.json")
            const data = await response.json();
            setProducts(data)
        }
        if(load){
            fetchProducts();
        }
        return () =>{
            console.info("product List component unmouted")
        }

    }, [load]);

    return(
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product) =>(
                <Product product={product} key={product.id}/>
            ))}
        </>
    )
}