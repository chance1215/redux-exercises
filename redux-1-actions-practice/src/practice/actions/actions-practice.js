/*
  EXAMPLE PROBLEM!!!

  Export the following:
    - An action type label that says ADD_TODO
    - An action creator function called "addTodo" that expects a new todo object as an argument.
*/

export const ADD_TODO = 'ADD_TODO'

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}


//   Problem # 1
//
//   Export the following:
//     - An action type label that says INCREMENT
//     - An action creator function called "increment" that expects no arguments.
// */
export const INCREMENT ='INCREMENT'

export const  increment = () => {
     let action = {
       type: INCREMENT
     }
     return action
   }




  //Problem # 2
//
//   Export the following:
//     - An action type label that says ADD_GROCERY
//     - An action creator function called "addGrocery" that expects one argument "newGroceryItem".
// */
export const ADD_GROCERY ='ADD_GROCERY'

export const addGrocery = (newGroceryItem) => {
  return {
    type: ADD_GROCERY,
    payload: newGroceryItem
  }
}

/*
  Problem # 3

  Export the following:
    - An action type label that says UPDATE_CONTACT
    - An action creator function called "updateContact" that expects one argument "updatedContact".
*/
export const UPDATE_CONTACT ='UPDATE_CONTACT'

export const updateContact = (updatedContact) => {
  return {
    type: UPDATE_CONTACT,
    payload: updatedContact
  }
}

/*
  Problem # 4

  Export the following:
    - An action type label that says REMOVE_USER
    - An action creator function called "removeUser" that expects one argument "id".
*/

export const REMOVE_USER ='REMOVE_USER'

export const removeUser = (id) => {
  let action = {
    type: REMOVE_USER,
    payload: id
  }
  return action
}


/*
  Problem # 5

  Export the following:
    - An action type label that says FETCH_USER
    - An action creator function called "fetchUser" that expects one argument "id".
*/
export const FETCH_USER ='FETCH_USER'

export const fetchUser = (id) => {
  let action = {
    type: FETCH_USER,
    payload: id
  }
  return action
}
