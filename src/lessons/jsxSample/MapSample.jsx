import React from 'react'

function MapSample() {

    let cities = ['Bakü', 'İstanbul', 'İzmir', 'Ankara', 'Bursa'];

    return (<>
        <ul>
            {
                // cities.map(item => <li>{item}</li>)
                cities.map(item => {
                    return <li>{item}</li>
                })
            }
        </ul>
    </>
    )
}
export default MapSample