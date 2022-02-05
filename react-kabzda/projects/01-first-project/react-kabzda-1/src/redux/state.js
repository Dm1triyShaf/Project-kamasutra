
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 1, message: 'It\'s my first post', likesCount: 18},
              ],
            newPostText: 'gigi'
            },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Petia'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Lyda'},
                {id: 4, name: 'Vasia'},
                {id: 5, name: 'Gavrila'},
                {id: 6, name: 'Oksana'},
            ], 
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello, how are you?'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Hi'},
                {id: 6, message: 'Hi'},    
            ], 
        }
    },
    getState () {
        return this._state;
    },
    _callSubscriber () {
        console.log('State changet'); 
    },
    addPost  () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
    
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText ='';
    this._callSubscriber (this._state);
    },
    updateNewPostText (newText) {  
        this._state.profilePage.newPostText = newText;
        this._callSubscriber (this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
  }
        
    export default store;
    window.store = store;