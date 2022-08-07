const ADD_TASK = 'ADD-TASK'
const DELETE_TASK = 'DELETE-TASK'
const CHANGE_TASK_STATUS = 'CHANGE-TASK-STATUS'

export const actionCreatorAddTask = (message, id) => ({type: ADD_TASK, message, id});

export const actionCreatorChangeStatus = (id, status) => ({type: CHANGE_TASK_STATUS, status, id});

export const actionCreatorDeleteTask = (id) => ({type: DELETE_TASK,  id});


let initialState = {
    tasksArray: []
}

export const missionsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasksArray: [...state.tasksArray, {
                    id: action.id,
                    message: action.message,
                    status: 'ToDo'
                }]
            }
        }
        case DELETE_TASK : {
            return {
                ...state,
                tasksArray: state.tasksArray.filter(task => task.id != action.id)
            }
        }
        case CHANGE_TASK_STATUS: {
            return {
                ...state,
                tasksArray: state.tasksArray.map(task => {
                    if (task.id == action.id){
                        return {...task, status: action.status}
                    } else {
                        return {...task}
                    }
                })
            }
        }
        default: {
            return state;
        }
    }
}