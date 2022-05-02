import React from "react"
import s from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import { Redirect } from "react-router-dom";
import { Formik,Form, Field } from "formik"



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
            <AddMassageForm sendMessage={props.sendMessage} /> 
        </div>
    )
}
const AddMassageForm = (props) => {
   
   
    let addNewMessage = (values) => {
       
       props.sendMessage( values );
       
    }
 
    return (
       <Formik
          initialValues={{
             newMessageBody: ""
          }}
          onSubmit={(values, {resetForm}) => {
             addNewMessage( values.newMessageBody );
             resetForm( {values: ''} );
          }
          }
       >
          {() => (
             <Form>
                <div>
                   <Field
                      name={'newMessageBody'}
                      as={'textarea'}
                      placeholder={'enter text'}
                   />
                </div>
 
                <button type={'submit'}>Send2</button>
             </Form>
          )}
       </Formik>
    )
 }
export default Dialogs;