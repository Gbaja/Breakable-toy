import { ADD_TODO} from "./types";

const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

export { addTodo }