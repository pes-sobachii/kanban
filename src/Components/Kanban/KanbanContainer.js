import {connect} from "react-redux";
import {actionCreatorChangeStatus, actionCreatorDeleteTask} from "../../Redux/missionsReducer";
import Kanban from "./Kanban";
import {useState} from "react";
import {useEffect} from "react";

const KanbanContainer = (props) => {

    const [elemID, setElemId] = useState(null)
    const [delID, setDelId] = useState(null)

    useEffect(() => {
        props.deleteTask(delID)
    }, [delID])

    const statuses = ['ToDo', 'InProgress', 'Complete']

    const onDragStartHandler = (e) => {
        e.target.classList.add('hold')
        setTimeout(() => {
            e.target.classList.add('hide')
        }, 0)

        setElemId(e.target.getAttribute('data-id'))
    }

    const onDragOverHandler = (e) => {
        if (e.target.classList.contains('kanbanList')){
            e.preventDefault()
        }

    }
    const onDragEndHandler = (e) => {
        e.target.className = 'kanbanTask'
    }

    const onDragEnterHandler = (e) => {
        if (e.target.classList.contains('kanbanList')){
            e.target.classList.add('hovered')
        }
    }

    const onDragLeaveHandler = (e) => {
        e.target.classList.remove('hovered')
    }

    const onDropHandler = (e) => {
            props.changeStatus(elemID, e.target.classList.item(1))
            e.target.classList.remove('hovered')
            console.log(`${e.target.classList.item(1)}`)
    }

    const onClickDeleteHandler = (id) => {
        setDelId(id)
    }

    return(
        <Kanban onClickDeleteHandler={onClickDeleteHandler} onDragOverHandler={onDragOverHandler} onDropHandler={onDropHandler} onDragEnterHandler={onDragEnterHandler} onDragLeaveHandler={onDragLeaveHandler} onDragStartHandler={onDragStartHandler} onDragEndHandler={onDragEndHandler} statuses={statuses} tasks={props.tasks}/>
    )
}

let mapStateToProps = (state) => {
    return {
        tasks: state.missions.tasksArray
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch(actionCreatorDeleteTask(id))
        },
        changeStatus: (id, status) => {
            dispatch(actionCreatorChangeStatus(id, status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanContainer)