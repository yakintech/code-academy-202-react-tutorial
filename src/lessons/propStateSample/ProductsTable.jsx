import React from 'react'

function ProductsTable(props) {

    let { products, removeProduct } = props

    return (<>
        <h1>Length: {products.length}</h1>
        <table className="w3-table w3-striped">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item => {
                        let color = '';
                        if (item.unitPrice > 20)
                            color = 'tomato'
                            
                        return <tr style={{backgroundColor:color}}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>

                            <td>{item.unitPrice}</td>
                            <td><button onClick={() => removeProduct(item.id)}>Delete Product</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ProductsTable