//constant 3
import {
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK
} from '../constants'

//reducer 1
const initialState = {
  todolist: [
    {
      id: 1,
      title: "hoc react",
      note: "ahihi"
    },
    {
      id: 2,
      title: "hoc HTML",
      note: "ahihi"
    },
  ],

};

function todolistReducer(state = initialState, action) {
  console.log("TCL: myReducer -> action", state)
  switch (action.type) {
    case CREATE_TASK : {
      console.log(action.payload)
      return {
        ...state,
        todolist: [
          action.payload,
          ...state.todolist,
        ],
      }
    }
    case EDIT_TASK: {
      console.log('Log: myReducer -> myReducer', { state, action });
      const { id, title } = action.payload
      const newTodolist = state.todolist;
      const taskindex = state.todolist.findIndex((item) => item.id === id)
      const edittask = {
        ...state.todolist[taskindex],
        id,
        title,

      }
      newTodolist.splice(taskindex, 1, edittask)
      return {

        ...state,
        todolist: [
          ...newTodolist
        ],
      }
    } case DELETE_TASK: {
      const { id } = action.payload
      const newTodolist = state.todolist;
      const taskindex = state.todolist.findIndex((item) => item.id === id)
      newTodolist.splice(taskindex, 1,)
      return {
        ...state,
        todolist: [
          ...newTodolist
        ],
      }
    }

    default: {
      return state;
    }
  }
}

export default todolistReducer;
