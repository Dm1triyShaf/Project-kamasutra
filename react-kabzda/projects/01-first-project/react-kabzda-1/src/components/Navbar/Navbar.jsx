import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={s.nav}>
         <div className={`${s.item} ${s.activeNavLink}`} >   
            <NavLink to="/profile"activeClasseName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.activeNavLink}`}>
            <NavLink to="/dialogs"activeClasseName={s.active}>Messages</NavLink>
        </div>
        <div className={`${s.item} ${s.activeNavLink}`}>
            <NavLink to="/news"activeClasseName={s.active}>News</NavLink>
        </div>
        <div className={`${s.item} ${s.activeNavLink}`}>
            <NavLink to="/music"activeClasseName={s.active}>Music</NavLink>
        </div>
        <div className={`${s.item} ${s.activeNavLink}`}>
            <NavLink to="/setting"activeClasseName={s.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;