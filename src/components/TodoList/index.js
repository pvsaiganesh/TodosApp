import { useState } from 'react'
import ListItem from '../ListItem'
import TodosEditInput from '../TodosEditInput';
import './index.css'
import 'antd/dist/antd.css';
import { Button } from 'antd'

const TodoList = () => {
    const [listItems, setListItems] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [inputView, setInputView] = useState(false);
    const [editView, setEditView] = useState(false);
    const [editId, setEditId] = useState(null)
    const [id, setId] = useState(1);


    const editListItemExternal = (id) => {
        setEditId(id)
        setEditView(true)
    }

    const deleteListItemExternal = (id) => {
        const filteredListItems = listItems.filter(item => item.id !== id)
        setListItems(filteredListItems)
    }




    const renderTable = () => {
        return <table>
            <thead>
                <tr className="table-headings">
                    <td width="10%" className="table-heading">#</td>
                    <td width="50%" className="table-heading">Task Name</td>
                    <td width="20%" className="table-heading">Status</td>
                    <td width="10%" className="table-heading">Edit</td>
                    <td width="10%" className="table-heading">Remove</td>
                </tr>
            </thead>
            <tbody>
                {listItems.map(item => <ListItem changeStatusExternal={changeStatusExternal} deleteListItemExternal={deleteListItemExternal} editListItemExternal={editListItemExternal} key={item.id} item={item} />)}
            </tbody>
        </table>
    }

    const setStateInputView = () => {
        if (inputView === false) {
            setInputView(true)
        }
    }

    const getTaskName = (e) => { setTaskName(e.target.value) }

    const addToListItems = (e) => {
        e.preventDefault();
        const obj = { id, taskName, statusCount: 1, status: 'Todo' }
        if (taskName !== '') {
            setListItems([...listItems, obj])
            setTaskName('')
            setInputView(false)
            setId(id + 1)
        }
    }




    const renderInputView = () => {
        return <form onSubmit={addToListItems} className="input-view">
            <div>
                <h1 className="heading">Add Task Name</h1>
                <input className="input-box" type="text" value={taskName} onChange={getTaskName} />
            </div>
            <button id="button" type="submit" ></button>
        </form>
    }

    const renderUpdatedList = (editedName) => {
        const updatedList = listItems.map(item => {
            if (item.id === editId) {
                return { ...item, taskName: editedName }
            }
            return item
        })
        setListItems(updatedList)
        setEditView(false)
    }

    const changeStatusExternal = (id) => {
        const updatedListItems = listItems.map(item => {
            if (item.id === id && item.statusCount === 1) {
                return { ...item, statusCount: item.statusCount + 1, status: 'In Progress' }
            }
            else if (item.id === id && item.statusCount === 2) {
                return { ...item, statusCount: item.statusCount + 1, status: 'Complete' }
            }
            return item
        })
        setListItems(updatedListItems)
    }



    return <div>
        <h1 className="heading">TODO List Demo App</h1>
        <span className="sub-heading">Do it now.</span>
        {editView ?
            <TodosEditInput renderUpdatedList={renderUpdatedList} /> :
            <div>
                {inputView ?
                    <div>{renderInputView()}</div>
                    :
                    <div>
                        <div className="add-button">
                            <Button data-testid="button" onClick={setStateInputView} type="primary" ghost>Add Task</Button>
                            <div className="todoList">{renderTable()}</div>
                        </div>
                    </div>}</div>}
    </div>
}

export default TodoList