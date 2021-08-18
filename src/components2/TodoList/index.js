import { useState, useEffect } from 'react'
import EditableTable from '../Table';
import './index.css'
import 'antd/dist/antd.css';
import { Button } from 'antd'

const TodoList = () => {
    const [listItems, setListItems] = useState([]);
    const [todoId, setTodoId] = useState('')
    const [url, setUrl] = useState('')

    const updateTodoId = (e) => {
        setTodoId(e.target.value)
    }


    useEffect(() => {
        if (url !== '') {
            const fetchData = async () => {
                const response = await fetch(url)
                const responseData = await response.json()
                const item = responseData
                const formattedResponseData = {
                    title: item.title,
                    id: item.id,
                    completed: item.completed.toString().toUpperCase()
                }
                setListItems([...listItems, formattedResponseData])
            }
            fetchData()
        }
    }, [url])

    const fetchData = () => {
        setUrl(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    }
    console.log(listItems)
    return <div>
        <h1 className="heading">TODO List Demo App</h1>
        <span className="sub-heading">Do it now.</span>
        <div>
            <input id="input-box" value={todoId} onChange={updateTodoId} className="input-feild" type='text'></input>
            <Button onClick={fetchData} type="primary" ghost>Fetch</Button>
        </div>
        <div>
            <EditableTable listItems={listItems} />
        </div>
    </div>
}

export default TodoList