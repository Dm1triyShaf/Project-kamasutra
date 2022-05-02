import React from "react"
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from 'react-final-form'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}
const addMessageForm = (props) => {
    return (
        <Form
            initialValues={{
                firstName: 'Dan'
            }}
            onSubmit={values => {
                // send values to the cloud
            }}
            validate={values => {
                // do validation here, and return errors object
            }}
            >
                {({ handleSubmit, pristine, form, submitting }) => (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            )}
                
        </Form>
    )
}
export default Dialogs;