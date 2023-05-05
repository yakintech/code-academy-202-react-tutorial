import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ToDosSample() {

    const [todos, settodos] = useState([]);
    const [completed, setcompleted] = useState(0);
    const [uncompleted, setuncompleted] = useState(0);

    //long title
    const [longTitleCount, setlongTitleCount] = useState(0)


    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                settodos(res.data);

                let completedCount = todos.filter(q => q.completed).length;
                let uncompletedCount =  todos.filter(q => !q.completed).length;
                let longTitle = todos.filter(q => q.title?.length > 55).length

                setcompleted(completedCount);
                setuncompleted(uncompletedCount);
                setlongTitleCount(longTitle);

            })

    }, [])


    return (<>
        <h1>Total: {todos.length}</h1>
        <h1>Completed: {completed}</h1>
        <h1>Uncompleted: {uncompleted}</h1>
        <h1>Long Title: {longTitleCount}</h1>
    </>
    )
}

export default ToDosSample