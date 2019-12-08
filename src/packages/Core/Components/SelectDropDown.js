import React, { useState, useEffect } from 'react';
import { apiService } from '..';

const SelectDropDown = props => {
  const { endpointURL = null, maps, ...elemProp } = props;
  const [options, setOptions] = useState(props.options);
  useEffect(() => {
    M.AutoInit();
  });
  useEffect(() => {
    // Make an ajax call
    if (endpointURL != null) {
      apiService
        .getAll(endpointURL)
        .then(response => {
          setOptions(response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);
  useEffect(() => {
    M.updateTextFields();
  });
  return (
    <div className="select-dropdown">
      <select {...elemProp}>
        {options.length > 0 &&
          options.map((option, index) => {
            return (
              <option key={index} value={option[maps['value']]}>
                {option[maps['title']]}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default SelectDropDown;
