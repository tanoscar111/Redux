
export function createTask(params) {
  console.log("TCL: createTask -> params", params)
  return {
    type: 'CREATE_TASK',
    payload: params,
  }
}
export function editTask(params) {
  return {
    type: 'EDIT_TASK',
    payload: params,
  }
}export function deleteTask(params) {
  return {
    type: 'DELETE_TASK',
    payload: params,
  }
}
