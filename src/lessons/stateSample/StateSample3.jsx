import React, { useState } from 'react'

function StateSample3() {

    const [number, setnumber] = useState(0);

    const change = () => {
        let randomNumber = Math.floor(Math.random() * 100);
        
        setnumber(randomNumber);
    }

    return (<>
        <h1>Number: {number}</h1>
        <button onClick={() => change()}>Change Number</button>
    </>
    )
}

export default StateSample3