import React, { useState } from 'react';
import Link from 'react-router-dom';

const AnchorAction = (props) => {
    const [state] = useState(props);
    return (
        <>
            {<a className="waves-effect waves-light btn-small amber">
                <i
                    className="material-icons left"
                    onClick={callback}
                >
                    {classname}
                </i>
            </a>}
        </>
    )
}
