import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reduser";
import sibebarReduser from "./sibebar-reduser";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sibebar: sibebarReduser
});

let store = createStore(redusers);



export default store;