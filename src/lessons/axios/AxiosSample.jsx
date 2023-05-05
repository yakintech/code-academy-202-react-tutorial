import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AxiosSample() {

    const [categories, setcategories] = useState([])


    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/categoriessss')
            .then(res => {
                setcategories(res.data);
            })
            .catch(err => {
                console.log('Err', err);
            })
    })

    return (<>
    <h1>Length: {categories.length}</h1>
    </>
    )
}

export default AxiosSample