import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={s.nav}>
         <div className={`${s.item} ${s.activeNavLink}`} >   
            <NavLink to="/profile"activeClasseName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs"activeClasseName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music">Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/setting">Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;