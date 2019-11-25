import React, { useEffect, useState } from 'react';
import * as constants from '../../constants';
import { apiService, alertService } from '../../../..';
import { SettingResource } from '../../../../Components/CRUD';
import * as Types from './types';

const AdvanceSearch = props => {
  const [state, setState] = useState({
    elements: [],
  });
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      elements: props.payload,
    });
  }, [props]);

  useEffect(() => {
    M.updateTextFields();
  });

  const setFieldValue = (field, value) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const handleSubmit = e => {
    event.preventDefault();
    const response = apiService.update(constants.API_SETTING_UPDATE + 'advance-search', state);
    const status = alertService.update(response);
  };
  const elements = state.elements;
  return (
    <form onSubmit={handleSubmit} className="mb-10">
      {elements.length > 0 &&
        elements.map(block => {
          const element = JSON.parse(block);
          if (element.type == 'select') {
            const TypeTemplate = Types[element.type];
            return (
              <TypeTemplate
                block={element.block}
                display={element.display}
                name={element.name}
                options={element.options}
                setFieldValue={setFieldValue}
              />
            );
          }
        })}
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <button type="submit" className="btn gradient-45deg-purple-deep-orange">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SettingResource(AdvanceSearch, constants.API_SETTING + 'advance-search');
