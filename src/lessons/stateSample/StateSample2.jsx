import React, { useState } from 'react'

function StateSample2() {

    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1);
    }

    return (<>
        <h1>Counter: {counter}</h1>
        <button onClick={increase}>Increase</button>
    </>
    )
}

export default StateSample2