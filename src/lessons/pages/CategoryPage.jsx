import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query'

function CategoryPage() {

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');

    const { data, isLoading, error, refetch } = useQuery("categoryData", () => {
        return axios.get('https://northwind.vercel.app/api/categories');
    })


    const mutation = useMutation({
        mutationFn: async (data) => {
            const response = await axios.post('https://northwind.vercel.app/api/categories', data);
            return response.data
        },
        onSuccess: () => {
            console.log('Success');
            refetch();
        },
        onError: () => {
            console.log('Error');
        }
    })

    const add = () => {
        mutation.mutate({ name: name, description: description });
    }

    return (<>
        {
            mutation.isLoading ? <h1>Loading...</h1> : <></>
        }
        <div>
            <h1>Category Page</h1>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div>
                <button onClick={add}>Add</button>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Category Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {data?.data?.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
    )
}

export default CategoryPage