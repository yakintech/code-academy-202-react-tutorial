import axios from 'axios'
import React, { useEffect, useState } from 'react'

function OrderPage() {

    const [orders, setorders] = useState([]);

    const [shipName, setshipName] = useState('');
    const [orderDate, setorderDate] = useState('')

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


    const add = () => {

        let newOrder = {
            shipName: shipName,
            orderDate: orderDate
        }

        axios.post('https://northwind.vercel.app/api/orders', newOrder)
            .then(res => {
                loadData();
            })

    }

    return (<>

        <div>
            <div>
                <label htmlFor="">Ship Name</label>
                <input type='text' onChange={(e) => setshipName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Order Date</label>
                <input type='date' onChange={(e) => setorderDate(e.target.value)} />
            </div>
            <div>
                <button onClick={add}>Add</button>
            </div>
        </div>
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