import React, { useState } from 'react';


function StateArraySample() {

    let cityList = ['Baku', 'İstanbul', 'İzmir', 'Bursa'];
    
    const [cities, setcities] = useState(cityList);

    const clear = () => {
        setcities([]);
    }

    return (<>
        <button onClick={clear}>Clear</button>
        <h1>Cities: {cities.length}</h1>
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default StateArraySample