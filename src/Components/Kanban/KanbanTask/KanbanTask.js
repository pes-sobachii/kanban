import '../Kanban.css'

const KanbanTask = ({onClickDeleteHandler, task, onDragStartHandler, onDragEndHandler}) => {
    return(
        <div className={'kanbanTask'} draggable={"true"} onDragStart={onDragStartHandler} onDragEnd={onDragEndHandler} data-id={task.id}>
            <p className='taskText'>{task.message}</p>
            <div className={'delete-button'} onClick={() => onClickDeleteHandler(task.id)}><div>X</div></div>
        </div>
    )
}

export default KanbanTask