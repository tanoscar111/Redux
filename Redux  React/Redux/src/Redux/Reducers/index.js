import { combineReducers } from 'redux';
// combine reducer

import  todolistreducer from'./todolist.reducer';
//reducer 2
import productreducer from './product.reducer';
 export default combineReducers({
   todolistreducer:todolistreducer,
   productreducer:productreducer
 })
