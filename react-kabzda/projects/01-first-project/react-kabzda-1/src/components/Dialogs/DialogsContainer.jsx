import React from "react"
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import store, {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reduser'
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
            let state = store.getState().dialogsPage;
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNevMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs updateNewMessageBody={onNevMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;