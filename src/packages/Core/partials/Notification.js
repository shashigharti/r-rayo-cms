import React from 'react';

export const Notification = () => {
    return (<ul className="dropdown-content" id="notifications-dropdown">
        <li>
            <h6>
                NOTIFICATIONS<span className="new badge purple">5</span>
            </h6>
        </li>
        <li className="divider"></li>
        <li>
            <a className="grey-text text-darken-2" href="#!">
                <span className="material-icons icon-bg-circle purple small">
                    add_shopping_cart
                </span>{' '}
                A new order has been placed!
            </a>
            <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">
                2 hours ago
            </time>
        </li>
        <li>
            <a className="grey-text text-darken-2" href="#!">
                <span className="material-icons icon-bg-circle purple small">stars</span>{' '}
                Completed the task
            </a>
            <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">
                3 days ago
            </time>
        </li>
        <li>
            <a className="grey-text text-darken-2" href="#!">
                <span className="material-icons icon-bg-circle purple small">settings
                </span>{' '}
                Settings updated
            </a>
            <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">
                4 days ago
            </time>
        </li>
    </ul>);
}