import './Kanban.css'
import KanbanTask from "./KanbanTask/KanbanTask";

const KanbanList = ({
                        status,
                        tasks,
                        onDragOverHandler,
                        onDragEnterHandler,
                        onDropHandler,
                        onDragLeaveHandler,
                        onClickDeleteHandler,
                        onDragStartHandler,
                        onDragEndHandler
                    }) => {
    //             {props.tasks[0] !== undefined ? `${props.tasks[0].message}` : 'There are no tasks'}<br/>
    return (
        <div className={`kanbanList ${status}`} onDragOver={onDragOverHandler} onDragEnter={onDragEnterHandler}
             onDrop={onDropHandler} onDragLeave={onDragLeaveHandler}>
            {tasks[0] !== undefined ? tasks.map(task => <KanbanTask key={task.id} task={task}
                                                                    onClickDeleteHandler={onClickDeleteHandler}
                                                                    onDragStartHandler={onDragStartHandler}
                                                                    onDragEndHandler={onDragEndHandler}/>) : 'There are no tasks'}<br/>
        </div>
    )
}

export default KanbanList
