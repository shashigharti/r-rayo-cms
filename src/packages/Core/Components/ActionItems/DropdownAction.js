import React from 'react';

const DropdownAction = (props) => {
    return (
        <>
            <a className="dropdown-trigger waves-effect waves-light btn-small amber"
                href='#'
                data-target='dropdown1'
            >
                <i className="material-icons left" >
                    remove_red_eye
                </i>
            </a>
            <div id='dropdown1' class='dropdown-content'>
                {props.children}
            </div>
        </>
    )
}


export default DropdownAction;