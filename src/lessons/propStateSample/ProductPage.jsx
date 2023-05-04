import React, { useState } from 'react'
import { productsData } from '../data/productsData'
import ProductsTable from './ProductsTable'

function ProductPage() {

    const [products, setproducts] = useState(productsData);
    const [productId, setproductId] = useState(0);

    const removeProduct = (id) => {
        let filteredProducts = products.filter(q => q.id != id);
        setproducts(filteredProducts)
    }

    // const removeProductById = () => {
    //     let filteredProducts = products.filter(q => q.id != productId);
    //     setproducts(filteredProducts)
    // }

    const search = (value) => {
        
        let filteredProducts = productsData
        .filter(q => q.name.toLowerCase().includes(value.toLowerCase()))

        setproducts(filteredProducts)
    }

    return (<>
        <div>
            <label>Search: </label>
            <input type='text' onChange={(e) => search(e.target.value)} />
        </div>
        <div>
            <button onClick={() => setproducts([])}>Clear All</button>
        </div>

        <div>
            <input type='text' onChange={(e) => setproductId(e.target.value)} />
            <button onClick={() => removeProduct(productId)}>Remove</button>
        </div>

        <ProductsTable products={products} removeProduct={removeProduct} />
    </>
    )
}

export default ProductPage