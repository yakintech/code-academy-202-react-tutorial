import React from 'react'

function ProductsTable(props) {

    let { products } = props

    return (<>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </>
      )
}

export default ProductsTable