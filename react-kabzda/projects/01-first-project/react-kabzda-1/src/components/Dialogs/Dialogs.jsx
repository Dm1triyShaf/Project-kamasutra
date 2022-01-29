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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               
                    <DialogItems name ="Petia" id ="1"/>
                    <DialogItems name ="Valera" id ="2"/>
                    <DialogItems name ="Lyda" id ="3"/>
                    <DialogItems name ="Vasia" id ="4"/>
                    <DialogItems name ="Gavrila" id ="5"/>
                    <DialogItems name ="Oksana" id ="6"/>
                    
            </div>
        <div className={s.messages}>
        <Message message = "Hi"/>
        <Message message = "Hello, how are you?"/> 
        <Message message = "Hi"/>
        <Message message = "Hi"/>
        <Message message = "Hi"/>
        <Message message = "Hi"/>
       
            </div>
            </div>
    )
    }
    export default Dialogs;