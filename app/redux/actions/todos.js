import { ADD_TODO, COMPLETE_TODO, DELETE_TODO} from "./types";

const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

const completeTodo = payload => ({
  type: COMPLETE_TODO,
  payload
})

const deleteTodo = payload => ({
  type: DELETE_TODO,
  payload
})

export { addTodo, completeTodo, deleteTodo }