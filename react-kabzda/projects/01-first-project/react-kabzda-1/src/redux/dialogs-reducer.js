import message from "../components/Dialogs/Message/Message";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Petia' },
        { id: 2, name: 'Valera' },
        { id: 3, name: 'Lyda' },
        { id: 4, name: 'Vasia' },
        { id: 5, name: 'Gavrila' },
        { id: 6, name: 'Oksana' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello, how are you?' },
        { id: 3, message: 'Hi' },
        { id: 4, message: 'Hi' },
        { id: 5, message: 'Hi' },
        { id: 6, message: 'Hi' },
    ],
    newMessageBody: "",
}


const dialogsReducer = (state = initialState, action) => {

    let stateCopy
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
               newMessageBody: action.body
            };

            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
            return stateCopy;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;