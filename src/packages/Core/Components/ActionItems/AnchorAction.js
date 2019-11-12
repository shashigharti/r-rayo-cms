import React, { useEffect } from 'react';

const AnchorAction = ({ callback, classname, url, params }) => {
    return (
        <>
            {<a className="waves-effect waves-light btn-small amber"
                href="#"
                onClick={(e) => callback(e, { ...params, url })}
            >
                <i className="material-icons left">
                    {classname}
                </i>
            </a>}
        </>
    )
}

export default AnchorAction;
