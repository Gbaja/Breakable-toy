import { ADD_TODO } from "../actions/types";
import { combineReducers } from "redux";

const addTodoEntry = (state, action) => {
    const { payload } = action;

    return {
        ...state,
        [payload.id]: payload
    }
}


const todosById = (state = {}, action) => {
  switch(action.type) {
     case ADD_TODO:
        return addTodoEntry(state, action)
    default: 
        return state
  }
}

const addTodoId = (state, action) => {
    const { payload } = action

    return [...state, payload.id]
}

const allTodos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return addTodoId(state, action)
        default:
            return state
    }
}

const todos = combineReducers({
    byId: todosById,
    allIds: allTodos
})

// const todos = (state=[], action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             return [...state, action.payload];
//         default: 
//         return state
//     }
// }

export default todos;