import axios from 'axios'
import React, { useEffect, useState } from 'react'

function OrderPage() {

    const [orders, setorders] = useState([]);

    useEffect(() => {
        loadData();
    }, [])


    const loadData = () => {
        axios.get('https://northwind.vercel.app/api/orders')
        .then(res => {
            setorders(res.data);
        })
    }

    const deleteProduct = (id) => {

        axios.delete('https://northwind.vercel.app/api/orders/' + id)
            .then(res => {

                loadData();

            })
    }


    return (<>

        <table className="w3-table w3-striped">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Ship Name</td>
                    <td>Order Date</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {
                    orders && orders.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.shipName}</td>
                            <td>{item.orderDate}</td>
                            <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default OrderPage