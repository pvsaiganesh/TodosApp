import { EditTwoTone, DeleteFilled } from '@ant-design/icons';
import './index.css'

const ListItem = (props) => {

    const { item, changeStatusExternal, deleteListItemExternal, editListItemExternal } = props


    const editListItemInternal = () => {
        editListItemExternal(item.id)
    }
    const deleteListItemInternal = () => {
        deleteListItemExternal(item.id)
    }

    let dynamicstyle = 'black'
    if (item.statusCount === 2) {
        dynamicstyle = 'yellow'
    }
    else if (item.statusCount === 3) {
        dynamicstyle = 'green'
    }


    const changeStatusInternal = () => {
        changeStatusExternal(item.id)
    }

    return <tr className="list-item">
        <td className="table-heading">{item.id}</td>
        <td className="table-heading">{item.taskName}</td>
        <td className="table-heading"><button className={`status-button ${dynamicstyle}`} onClick={changeStatusInternal}>{item.status}</button></td>
        <td className="table-heading"><button className="edit-button" onClick={editListItemInternal} ><EditTwoTone /></button></td>
        <td className="table-heading"><button className="delete-button" onClick={deleteListItemInternal}><DeleteFilled /></button></td>
    </tr>
}


export default ListItem
