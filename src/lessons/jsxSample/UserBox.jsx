import React from 'react'

function UserBox() {

    var name = 'Çağatay';
    var surname = 'Yıldız';


    return (<>
        <h1>Name: {name.toUpperCase()}</h1>
        <h1>Surname: {surname.toUpperCase()}</h1>
    </>)
}

export default UserBox