import React from "react"
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>
                    Petia
                    </div>
                    <div className={s.dialog}>
                    Valera
                    </div>
                    <div className={s.dialog}>
                    Lyda
                    </div>
                    <div className={s.dialog}>
                    Vasia
                    </div>
                    <div className={s.dialog}>
                    Gavrila
                    </div>
                    <div className={s.dialog}>
                    Oksana
                    </div>
            </div>
        <div className={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>Hello, how are you?</div>
        <div className={s.dialog}>Vasappi</div>
            </div>
            </div>
    )
    }
    export default Dialogs;