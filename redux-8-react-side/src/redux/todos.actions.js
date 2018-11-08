export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

// Your job is to write two action creators:

export const addTodo = (todos) => {
  let action = {
    type:ADD_TODO,
    payload: {
      id: Math.random(),
      title: todos,
      completed:false
    }
  }
  return action
}


export const removeTodo = (id) => {
  let action = {
    type:REMOVE_TODO,
    payload: id

  }
  return action
}
