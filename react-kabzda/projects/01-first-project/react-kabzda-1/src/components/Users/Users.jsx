import React from "react";

let Users = (props) => {
    return <div>
        {
            props.users.map(callbackfn: u => <div key={u.id}>
            <span>
            <div>
            <img/>
            </div>
            </span>
            <span></span>
            </div>)
        }
    </div>
}
export default Users;