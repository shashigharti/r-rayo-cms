import React, { useEffect } from 'react';

const AnchorAction = ({ callback, classname, url, id, params }) => {
    return (
        <>
            {<a className="waves-effect waves-light btn-small amber"
                href="#"
                onClick={(e) => callback(e, { ...params, url, id })}
            >
                <i className="material-icons left">
                    {classname}
                </i>
            </a>}
        </>
    )
}

export default AnchorAction;
