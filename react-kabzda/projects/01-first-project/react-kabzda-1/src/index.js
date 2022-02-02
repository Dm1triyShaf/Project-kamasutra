import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 1, message: 'It\'s my first post', likesCount: 18},
  ]
let dialogs = [
    {id: 1, name: 'Petia'},
    {id: 2, name: 'Valera'},
    {id: 3, name: 'Lyda'},
    {id: 4, name: 'Vasia'},
    {id: 5, name: 'Gavrila'},
    {id: 6, name: 'Oksana'},
]  
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello, how are you?'},
    {id: 3, message: 'Hi'},
    {id: 4, message: 'Hi'},
    {id: 5, message: 'Hi'},
    {id: 6, message: 'Hi'},    
]
 
  ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
