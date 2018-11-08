import { ADD_TODO, REMOVE_TODO } from './todos.actions'

let initialState = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]

    case REMOVE_TODO:
      let selectedTodoId = action.payload
      return state.filter(todo => todo.id !== Number(selectedTodoId))

    default:
      return state
  }
}
