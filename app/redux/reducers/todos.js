import { ADD_TODO, COMPLETE_TODO } from '../actions/types';
import { combineReducers } from 'redux';
import TodosQuery from '../queries/todos';

const addTodoEntry = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    [payload.id]: payload
  };
};

const completeTodoEntry = (state, action) => {
  const { payload } = action;
  //console.log("TODOS: ", )
  const todo = TodosQuery.find({todos: { byId: state }} , payload.id);

  return {
    ...state,
    [payload.id]: {
      ...todo, completed: true
    }
  };
};

const todosById = (state = {}, action) => {
  switch(action.type) {
    case ADD_TODO:
      return addTodoEntry(state, action);
    case COMPLETE_TODO:
      return completeTodoEntry(state, action);
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
    default:
      return state;
  }
};


const todos = combineReducers({
  byId: todosById,
  allIds: allTodos
});

export default todos;