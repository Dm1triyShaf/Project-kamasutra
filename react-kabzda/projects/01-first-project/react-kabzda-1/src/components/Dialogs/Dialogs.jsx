import React from "react"
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogsItem"
import Message from "./Message/Message"

const Dialogs = (props) => {


    
    let dialogsElements = props.dialogs.map ( d => <DialogItems name = {d.name} id = {d.id}/>);
    let messagesElements = props.messages.map ( m=>  <Message message = {m.message}/>);
    
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