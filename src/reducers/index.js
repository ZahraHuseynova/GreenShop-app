import { combineReducers } from "redux";
import authReducer from "./authReducer"
import { reducer as formReducer} from "redux-form";
import {productsReducer} from "./productsReducer";


export default combineReducers({
    auth:authReducer,
    form:formReducer,
    products:productsReducer,
});