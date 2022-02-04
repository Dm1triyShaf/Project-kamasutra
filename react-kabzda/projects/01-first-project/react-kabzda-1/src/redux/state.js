import { rerenderEntireTree } from "../render";

let state = {
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
    }

    window.state=state;

    export let addPost = ()=>{
        let newPost = {
            id: 5,
            message: state.profilePage.newPostText,
            likesCount: 0,
        };
    
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText ='';
    rerenderEntireTree (state);
    }

    export let updateNewPostText = (newText)=>{  
    state.profilePage.newPostText = newText;
    rerenderEntireTree (state);
    }

    export default state;