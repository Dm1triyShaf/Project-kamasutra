import React from "react"
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItems =(props)=> {
    let path = "/dialogs/"+props.id;

 return (
 <div className={s.dialog+' '+s.active}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
 );
}
const Message = (props) => {
    return (
<div className={s.dialog}>{props.message}</div>
    );
}
const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Petia'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Lyda'},
        {id: 4, name: 'Vasia'},
        {id: 5, name: 'Gavrila'},
        {id: 6, name: 'Oksana'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello, how are you?'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Hi'},
        {id: 6, message: 'Hi'},    
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               
                    <DialogItems name ={dialogsData[0].name} id = {dialogsData[0].id} />
                    <DialogItems name ={dialogsData[1].name} id = {dialogsData[1].id} />
                    <DialogItems name ={dialogsData[2].name} id = {dialogsData[2].id} />
                    <DialogItems name ={dialogsData[3].name} id = {dialogsData[3].id} />
                    <DialogItems name ={dialogsData[4].name} id = {dialogsData[4].id} />
                    <DialogItems name ={dialogsData[5].name} id = {dialogsData[5].id} />
                    
            </div>
        <div className={s.messages}>
        <Message message = {messagesData[0].message}/>
        <Message message = {messagesData[1].message}/>
        <Message message = {messagesData[2].message}/>
        <Message message = {messagesData[3].message}/>
        <Message message = {messagesData[4].message}/>
        <Message message = {messagesData[5].message}/>
       
            </div>
            </div>
    )
    }
    export default Dialogs;