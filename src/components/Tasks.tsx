import { useState } from 'react'
import axios from 'axios'
import Button from './Button'

interface Task {
    id: string,
    title: string
}

export default function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([])

    const handleOnClick = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        setTasks(data)
    }

    return(
        <>
            <h1>Tasks from API</h1>
            <Button disabled={false} onClick={handleOnClick}>Get taasks from API</Button>

            {tasks.map((task) => (
                <p key={task.id} id={task.id}>{task.title}</p>
            ))}
        </>
        
    )
}