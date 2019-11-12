import React from 'react';

const AnchorAction = (props) => {
    const { callback, classname } = props;
    return (
        <>
            {<a className="waves-effect waves-light btn-small amber" href="#" onClick={() => callback}>
                <i className="material-icons left">
                    {classname}
                </i>
            </a>}
        </>
    )
}

export default AnchorAction;
