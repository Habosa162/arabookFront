import {
  APIURL
  } from "../actionType/actionType" ; 
import axios from "axios" ; 
import validator from 'validator';

// const getOpenedTasksAction = (tasks)=>{
//    return{
//       type:LIST_OPENED_TASKS,
//       payload:tasks
//    }
// }


// export const getOpenedTasks = (number)=>{

//    const userToken = localStorage.getItem('userToken') ; 
//    return function(dispatch){
//       axios.get(`http://localhost:6500/api/list/openedtasks?page=${number}`,{
//          headers: {
//             'Access-Control-Allow-Origin' : '*',
//             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//             "token": userToken
//          }
//        })
//       .then((res)=>{
//          dispatch(getOpenedTasksAction(res.data)) ; 
//       }).catch((err)=>{console.log(err)})
//    }
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// export const reopenTask =(taskID)=>{
//    const userToken = localStorage.getItem('userToken') ; 
//    if(validator.isInt(`${taskID}`)){

//       return function (dispatch){
//          axios.post(`http://localhost:6500/api/reopen/task`,
//            {
//            "taskID":taskID
//         },{
//            headers: {
//               'Access-Control-Allow-Origin' : '*',
//               'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//               "token": userToken
//            }
//          }).then((res)=>{
//            if(res.data.reopend===true){
//               dispatch(getClosedTasks()) ; 
//            }
//         }).catch((err)=>{
//            console.log(err) ; 
//         })
//      }
  
//    }
   
// }




