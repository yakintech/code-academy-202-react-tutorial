import React, { useState } from 'react'

function StateStyleSample() {

    const [size, setsize] = useState(10);

    const changeFont = () => {
        let randomNumber = Math.floor(Math.random() * 100);
        setsize(randomNumber);
    }

    return (<>
        <h1 style={{ fontSize: size }}>Code Academy</h1>
        <button onClick={changeFont}>Change</button>
    </>)
}

export default StateStyleSample