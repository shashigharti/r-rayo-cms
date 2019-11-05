import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const Profile = (props) => {
    const { dispatch } = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch({ type: 'LOGOUT' });
        props.history.push('/logout');
    }

    return (
        <ul className="dropdown-content" id="profile-dropdown">
            <li>
                <Link className="grey-text text-darken-1" to="/">
                    <i className="material-icons">person_outline</i> Profile
                </Link>
            </li>
            <li>
                <Link className="grey-text text-darken-1" to="/settings">
                    <i className="material-icons">settings</i> Settings
                </Link>
            </li>
            <li className="divider"></li>
            <li>
                <a className="grey-text text-darken-1" href="#" onClick={handleLogout}>
                    <i className="material-icons">keyboard_tab</i> Logout
                </a>
                <a className="grey-text text-darken-1" href="#" >
                    <i className="material-icons">keyboard_tab</i> Logout
                </a>
            </li>
        </ul>
    );
}