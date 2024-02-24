import { combineReducers } from "redux";
import userReducer from "../reducers/user.reducer";
import courseReducer from "../reducers/course.reducer";
const rootReducer = combineReducers({
   userData : userReducer,
   courseData:courseReducer,
})


export default rootReducer ; 