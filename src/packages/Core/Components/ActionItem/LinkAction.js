import React, { useState } from 'react';
import Link from 'react-router-dom';

const LinkAction = (props) => {
    const [state] = useState(props);
    return (
        <>
            {<Link
                key={index}
                className="waves-effect waves-light btn-small cyan"
                to={{ pathname: url, query: params }}
            >
                <i className="material-icons left">{classname}</i>
            </Link>}
        </>
    )
}
