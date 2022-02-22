import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you ?', likesCount: 15 },
                { id: 1, message: 'It\'s my first post', likesCount: 18 },
            ],
            newPostText: 'gigi'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Petia' },
                { id: 2, name: 'Valera' },
                { id: 3, name: 'Lyda' },
                { id: 4, name: 'Vasia' },
                { id: 5, name: 'Gavrila' },
                { id: 6, name: 'Oksana' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello, how are you?' },
                { id: 3, message: 'Hi' },
                { id: 4, message: 'Hi' },
                { id: 5, message: 'Hi' },
                { id: 6, message: 'Hi' },
            ],
            newMessageBody: "",
        }
    },
    _callSubscriber() {
        console.log('State changet');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
        this._callSubscriber(this._state);
    }
}

export default store;