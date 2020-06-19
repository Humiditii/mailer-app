import React from 'react';
import {NavLink} from 'react-router-dom';

const navurl = props => {
    return (
        <li><NavLink to={props.link}>{props.navname}</NavLink></li>
    );
}

export default navurl