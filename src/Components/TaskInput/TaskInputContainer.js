import {connect} from "react-redux";
import {TaskInput} from "./TaskInput";
import {actionCreatorAddTask} from "../../Redux/missionsReducer";
import '../Body.css'

const TaskInputContainer = (props) => {
    return(
        <div className='TaskInputContainer'>
            <TaskInput addTask={props.addTask} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTask: (message, id) => {
            dispatch(actionCreatorAddTask(message, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskInputContainer)