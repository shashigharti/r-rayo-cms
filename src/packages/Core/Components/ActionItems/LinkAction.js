import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LinkAction = (props) => {
    const { params, url, classname } = props;
    return (
        <>
            {<Link
                className="waves-effect waves-light btn-small cyan"
                to={{ pathname: url, query: params }}
            >
                <i className="material-icons left">{classname}</i>
            </Link>}
        </>
    )
}

export default LinkAction;
