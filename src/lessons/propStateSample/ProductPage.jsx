import React, { useState } from 'react'
import { productsData } from '../data/productsData'
import ProductsTable from './ProductsTable'

function ProductPage() {

    const [products, setproducts] = useState(productsData)


    return (<>
        <ProductsTable products={products} />
    </>
    )
}

export default ProductPage