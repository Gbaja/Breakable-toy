const TodosQuery = {
    allIds: (state) => {
        return state.todos.allIds
    },
    all: (state) => {
        return TodosQuery.allIds(state).map(id=> TodosQuery.find(state, id))
    },
    find: (state, id) => {
        console.log("state: ", state)
        return state.todos.byId[id]
    }
}

export default TodosQuery;