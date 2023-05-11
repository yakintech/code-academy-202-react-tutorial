import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AntTable() {

    const [products, setproducts] = useState([]);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a,b) => a.name.localeCompare(b.name)
        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice',
            key: 'unitPrice',
            sorter: (a,b) => a.unitPrice - b.unitPrice
        },
        {
            title: 'Stock',
            dataIndex: 'unitsInStock',
            key: 'unitsInStock',
        },
    ];

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })

    }, [])


    return (<>
        <Table
            dataSource={products}
            columns={columns}
            pagination={
                {
                    pageSize:5
                }
            }
        />
    </>)
}

export default AntTable