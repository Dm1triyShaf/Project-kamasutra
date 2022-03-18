const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: 1,followed: falce, fullName: 'Grisha', status: 'Hi, how are you ?', {city: 'Minsk',country: 'Belarus'} },
        { id: 2,followed: true, fullName: 'Vasia', status: 'Hi, how are you ?', {city: 'Moscow',country: 'Russia'} },
        { id: 3,followed: falce, fullName: 'Petia', status: 'Hi, how are you ?', {city: 'Kiev',country: 'Ukraine'} },
    ]
};


const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {

                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

            return state;
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default userReduser;