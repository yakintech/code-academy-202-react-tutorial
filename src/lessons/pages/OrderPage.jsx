import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { queryClient } from '../..';

function OrderPage() {

    const [shipName, setshipName] = useState('');

    // const { error, isLoading, data } = useQuery("orderData", () => {
    //     return fetch("https://northwind.vercel.app/api/orders")
    //         .then(res => res.json())
    // })
    //data

    const { error, isLoading, data, refetch } = useQuery("orderData", () => {
        return axios.get('https://northwind.vercel.app/api/orders');
    },
        {
            //refetchInterval ile data 10 saniyede bir fetch edilir
            //refetchInterval: 10000,

            //20 saniye boyunca datayı cache de tut!
            staleTime: 2000000

        }
    )

    const clearCache = () => {
        //refetch function ile datayı tekrar çekiyorum.
        refetch();
    }



    const mutation = useMutation({
        mutationFn: async (params) => {
            const { data } = await axios.post('https://northwind.vercel.app/api/orders', params);
            return data
        },
        onSuccess: (res) => {
            console.log('Success!!', res);
            queryClient.invalidateQueries('orderData')
        },
        onError: () => {
            console.log('Error!!');

        }
    })


    const add = () => {
        mutation.mutate({ shipName: shipName })
    }

    return (<>
        <div>
            <div>
                <label htmlFor="">Ship Name</label>
                <input type='text' onChange={(e) => setshipName(e.target.value)} />
                <button onClick={add}>Add</button>
            </div>
        </div>
        <button onClick={() => clearCache()}>Clear Cache</button>
        {
            isLoading ? <h1>loading...</h1> : <table className="w3-table w3-striped">
                <thead>
                    <tr>
                        <th>Order Date</th>
                        <th>Ship Name</th>
                        <th>Ship City</th>
                        <th>Ship Country</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map(order => (
                        <tr key={order.id}>
                            <td>{order.orderDate}</td>
                            <td>{order.shipName}</td>
                            <td>{order.shipAddress?.city}</td>
                            <td>{order.shipAddress?.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        }

    </>)
}

export default OrderPage