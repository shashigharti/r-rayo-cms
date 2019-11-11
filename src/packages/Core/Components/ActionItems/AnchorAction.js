import React, { useState } from 'react';

const AnchorAction = (props) => {
    const { callback, classname } = props;
    return (
        <>
            {<a className="waves-effect waves-light btn-small amber">
                <i
                    className="material-icons left"
                    onClick={() => callback}
                >
                    {classname}
                </i>
            </a>}
        </>
    )
}

export default AnchorAction;
