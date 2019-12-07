import React, { useState, useEffect } from 'react';
//import { apiService } from '..';

const SelectDropDown = (props) => {
    const { endpointURL = null, ...elemProp } = props;
    const [options, setOptions] = useState(props.options);

    useEffect(() => {
        // Make an ajax call
        if (endpointURL != null) {
            apiService.getAll(endpointURL).then(response => {
                setOptions(response.data);
            }).catch(err => {
                console.log(err)
            })
        }
    }, [])

    return (
        <div className="select-dropdown">
            <select
                {...elemProp}
            >
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>{option.title}</option>
                    );
                })}
            </select>
        </div>
    );
}

export default SelectDropDown;