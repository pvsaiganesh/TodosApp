import { useState } from "react"
import './index.css'

const TodosEditInput = (props) => {

    const [editedName, setEditedName] = useState('')

    const getEditedName = (e) => {
        setEditedName(e.target.value)
    }

    const sendEditedName = (e) => {
        e.preventDefault()
        const { renderUpdatedList } = props
        renderUpdatedList(editedName)
        setEditedName('')

    }

    return <form onSubmit={sendEditedName} className="input-view">
        <div>
            <h1 className="heading">Edit Task Name</h1>
            <input className="input-box" type="text" value={editedName} onChange={getEditedName} />
        </div>
        <button id="button" type="submit" ></button>
    </form>
}

export default TodosEditInput