export const addTodo = (todo) => {
  return (dispatch) =>
    dispatch({ type: 'todos/ADD_TODO', payload: todo })
  }

export const updateTodoText = (todoText) => {
  return (dispatch) =>
    dispatch({ type: 'todos/UPDATE_TODO_TEXT', payload: todoText })
  }

export const completeTodo = (todoId) => {
  return (dispatch) =>
    _.delay(() => dispatch({ type: 'todos/COMPLETE_TODO', payload: todoId }), 2000)
  }

export const deleteTodo = (todoId) => {
  return (dispatch) =>
    dispatch({ type: 'todos/DELETE_TODO', payload: todoId })
  }
