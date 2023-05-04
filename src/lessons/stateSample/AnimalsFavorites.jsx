import React, { useState } from 'react'

function AnimalsFavorites() {

    let animalList = ['dog', 'cat', 'bird', 'fish', 'rabbit', 'hamster', 'turtle', 'snake', 'lizard', 'frog', 'spider', 'scorpion', 'crab', 'shrimp', 'lobster', 'octopus', 'squid', 'jellyfish', 'starfish', 'TAYUQ'];

    const [animals, setAnimals] = useState(animalList);
    const [favorites, setfavorites] = useState([]);

    const add = (item) => {

        //öncelikle hayvanlardan çıkarıyorum.
        let filteredAnimals = animals.filter(q => q != item);
        setAnimals(filteredAnimals);

        setfavorites([...favorites, item]);

    }


    const remove = (item) => {
        //öncelikle favorilerden çıkarıyorum.

        let filteredFavorites = favorites.filter(q => q != item);
        setfavorites(filteredFavorites);

        setAnimals([...animals, item]);
    }

    return (<>
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>
                <h1>Length: {animals.length}</h1>
                <ul>
                    {
                        animals && animals.map(item =>
                            <li onClick={() => add(item)} style={{ fontSize: 20, cursor: 'pointer' }}>{item}</li>)
                    }
                </ul>
            </div>
            <hr style={{ width: 5, height: 1000, backgroundColor: 'black' }}></hr>
            <div>
                <h1>Length: {favorites.length}</h1>
                <ul>
                    {
                        favorites && favorites.map(item => <li style={{ fontSize: 20, cursor: 'pointer' }} onClick={() => remove(item)}>{item}</li>)
                    }
                </ul>
            </div>
        </div>

    </>
    )
}

export default AnimalsFavorites