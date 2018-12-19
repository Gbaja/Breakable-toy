const TodosQuery = {
    allIds: (state) => {
        return state.todos.allIds
    },
    find: (state, id) => {
        return state.todos.byId[id]
    }
}

export default TodosQuery;