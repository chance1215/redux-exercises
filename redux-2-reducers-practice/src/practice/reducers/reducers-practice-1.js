/*
  Problem #2

  Export a reducer that will increment or decrement the state. It must expect the following action types:
    - INCREMENT
    - DECREMENT
*/

// Theoretically, these action type labels would be imported from an actions file, but we will define them here in this case.
let INCREMENT = 'INCREMENT'
let DECREMENT = 'DECREMENT'

// Write your code below this line!

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state +1

      case DECREMENT:
        return state -1

    default:
      return state
  }
}
