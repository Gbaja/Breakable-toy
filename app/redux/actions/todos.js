import { ADD_TODO, COMPLETE_TODO} from './types';

const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

const completeTodo = payload => ({
  type: COMPLETE_TODO,
  payload
});

export { addTodo, completeTodo };