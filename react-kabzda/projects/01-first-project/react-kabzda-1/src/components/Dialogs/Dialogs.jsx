import React from "react"
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogsItem"
import Message from "./Message/Message"

const Dialogs = (props) => {

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
    
    let dialogsElements = dialogs.map( d => <DialogItems name = {d.name} id = {d.id}/>);
    let messagesElements = messages.map ( m=>  <Message message = {m.message}/>);
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            { dialogsElements }                                
            </div>
        <div className={s.messages}>
            { messagesElements }
            </div>
            </div>
    )
    }
    export default Dialogs;