import './Kanban.css'
import KanbanList from "./KanbanList";
import {useEffect} from "react";

const Kanban = (props) => {
    // {props.tasks[0] !== undefined ? `${props.tasks[0].message}` : 'There are no tasks'}
    let key = 0
    let keySecond = 1
    useEffect(() => {
        console.log(props.tasks)
    }, [])
    return (
        <div className='kanbanRow'>
            {props.statuses.map(element => {
                return(
                    <div key={key++} className='kanbanColumn'>
                        {element === 'ToDo' ? <div className='list-name'>To Do</div> : (element === 'Complete' ? <div className='list-name'>Complete</div> : <div className='list-name'>In Progress</div>)}
                        <KanbanList key={'0' + ++keySecond} status={element}  onClickDeleteHandler={props.onClickDeleteHandler} onDragEndHandler={props.onDragEndHandler} onDropHandler={props.onDropHandler} onDragOverHandler={props.onDragOverHandler} onDragEnterHandler={props.onDragEnterHandler} onDragLeaveHandler={props.onDragLeaveHandler} onDragStartHandler={props.onDragStartHandler} tasks={props.tasks.filter( task => {
                            return task.status === element
                        })} />
                    </div>
                )
            })}

            {/*<div className={style.kanbanColumn}>*/}

            {/*</div>*/}
            {/*<div className={style.kanbanColumn}>*/}

            {/*</div>*/}
            {/*KanbanContainer: {props.tasks[0] !== undefined ? `${props.tasks[0].message}` : 'There are no tasks'}*/}
        </div>
    )
}

export default Kanban