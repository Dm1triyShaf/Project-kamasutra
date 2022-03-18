const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://s3.cdn.eg.ru/wp-content/uploads/2017/06/81350696120082256.jpg', followed: false, fullName: 'Grisha', status: 'Hi, how are you ?', {city: 'Minsk',country: 'Belarus'} },
        { id: 2, photoUrl: 'https://s3.cdn.eg.ru/wp-content/uploads/2017/06/81350696120082256.jpg',followed: true, fullName: 'Vasia', status: 'Hi, how are you ?', {city: 'Moscow',country: 'Russia'} },
        { id: 3, photoUrl: 'https://s3.cdn.eg.ru/wp-content/uploads/2017/06/81350696120082256.jpg', followed: false, fullName: 'Petia', status: 'Hi, how are you ?', {city: 'Kiev',country: 'Ukraine'} },
    ]
}



const usersReduser = (state = initialState, action) => {
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
            return {...state, users: [ ...action.users]}
        }
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReduser;