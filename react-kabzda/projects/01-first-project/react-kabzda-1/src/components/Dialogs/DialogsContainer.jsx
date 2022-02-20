import React from "react"
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import store, { sendMessageCreator, updateNewMessageBodyCreator } from './../../redux/dialogs-reduser'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNevMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return <Dialogs updateNewMessageBody = {onNevMessageChange}
                    sendMessage = {onSendMessageClick}
                    dialogsPage = {state} />
}
export default DialogsContainer;