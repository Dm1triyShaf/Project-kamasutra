import message from "../components/Dialogs/Message/Message";

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
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE,newMessageBody })

export default dialogsReducer;