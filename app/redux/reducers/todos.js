import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../actions/types";
import { combineReducers } from "redux";
import TodosQuery from "../queries/todos";

const addTodoEntry = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    [payload.id]: payload
  };
};

const completeTodoEntry = (state, action) => {
  const { payload } = action;

  const todo = TodosQuery.find({ todos: { byId: state } }, payload.id);

  return {
    ...state,
    [payload.id]: {
      ...todo,
      completed: true
    }
  };
};

const deleteTodoEntry = (state, { payload: { id } }) => {

  const todo = TodosQuery.find({ todos: { byId: state } }, id);

  const stateCopy = Object.assign({}, state);
  delete stateCopy[id];

  return {
    ...state,
    ...stateCopy
  };
};

const deleteTodoId = (state, { payload: { id } }) =>
  state.filter(item => item !== id);

const todosById = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodoEntry(state, action);
    case COMPLETE_TODO:
      return completeTodoEntry(state, action);
    case DELETE_TODO:
      return deleteTodoEntry(state, action);
    default:
      return state;
  }
};

const addTodoId = (state, action) => {
  const { payload } = action;

  return [...state, payload.id];
};

const allTodos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodoId(state, action);
    case DELETE_TODO:
      return deleteTodoId(state, action);
    default:
      return state;
  }
};

const todos = combineReducers({
  byId: todosById,
  allIds: allTodos
});

export default todos;
