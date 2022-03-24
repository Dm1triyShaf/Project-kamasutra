import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://s3.cdn.eg.ru/wp-content/uploads/2017/06/81350696120082256.jpg',
            followed: false,
            fullName: 'Grisha',
            status: 'Hi, how are you ?',
            location: {city: 'Minsk', country: 'Belarus'}
        }, {
            id: 2,
            photoUrl: 'https://s3.cdn.eg.ru/wp-content/uploads/2017/06/81350696120082256.jpg',
            followed: true,
            fullName: 'Vasia',
            status: 'Hi, how are you ?',
            location: {city: 'Moscow', country: 'Russia'}
        }, {
            id: 3,
            photoUrl: 'https://s3.cdn.eg.ru/wp-content/uploads/2017/06/81350696120082256.jpg',
            followed: false,
            fullName: 'Petia',
            status: 'Hi, how are you ?',
            location: {city: 'Kiev', country: 'Ukraine'}
        },])
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photoUrl} className={styles.userPhoto}/>
    </div>
    <div>
        {u.followed ? <button onClick={() => {
            props.unfollow(u.id)
        }}>Unfollow</button> : <button>onClick={() => {
            props.follow(u.id)
        }}>Follow</button>}
    </div>
</span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
                </span>
        </div>)}
    </div>
}

export default Users;