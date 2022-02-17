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


const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 7, message: body });
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReduser;