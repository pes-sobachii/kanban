import TaskInputContainer from "./TaskInput/TaskInputContainer";
import KanbanContainer from "./Kanban/KanbanContainer";
import './Body.css'

export const TodoBody = () => {
    return(
        <div className='container'>
            <TaskInputContainer />
            <KanbanContainer />
        </div>
    )
}
