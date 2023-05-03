import React, { useState } from 'react'

function StateSample1() {

    //name variable is the state variable
    //setName is the function that will change the state variable
    const [name, setName] = useState('Çağatay');


    const change = () => {
        setName('Aykut')
        
    }

    return (<>
        <h1>{name}</h1>
        <h1>{name.length}</h1>

        <button onClick={change}>Change Name</button>
        {/* <button onClick={() => change()}>Change Name</button> */}

    </>
    )
}

export default StateSample1

