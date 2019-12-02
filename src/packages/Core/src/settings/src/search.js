import React, { useEffect, useState } from 'react';
import * as constants from '../constants';
import { apiService, alertService } from '../../..';
import { SettingResource } from '../../../Components/CRUD';

const Search = props => {
  const [state, setState] = useState({
    first_block: [],
    second_block: [],
    third_block: [],
    fourth_block: [],
  });
  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setState({
      first_block: props.payload.first_block || [],
      second_block: props.payload.second_block || [],
      third_block: props.payload.third_block || [],
      fourth_block: props.payload.fourth_block || [],
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
    const response = apiService.update(constants.API_SETTING_UPDATE + 'search', state);
    const status = alertService.update(response);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="row">
        <div class="input-field col s12">
          <select
            value={state.first_block}
            multiple
            onChange={e =>
              setFieldValue(
                'first_block',
                Array.from(e.target.selectedOptions, option => option.value),
              )
            }
          >
            {constants['SEARCH_BLOCKS'].map(block => {
              return <option value={block.value}>{block.display}</option>;
            })}
          </select>
          <label>First Block</label>
        </div>
      </div>

      <div className="row">
        <div class="input-field col s12">
          <select
            value={state.second_block}
            multiple
            onChange={e =>
              setFieldValue(
                'second_block',
                Array.from(e.target.selectedOptions, option => option.value),
              )
            }
          >
            {constants['SEARCH_BLOCKS'].map(block => {
              return <option value={block.value}>{block.display}</option>;
            })}
          </select>
          <label>Second Block</label>
        </div>
      </div>

      <div className="row">
        <div class="input-field col s12">
          <select
            value={state.third_block}
            multiple
            onChange={e =>
              setFieldValue(
                'third_block',
                Array.from(e.target.selectedOptions, option => option.value),
              )
            }
          >
            {constants['SEARCH_BLOCKS'].map(block => {
              return <option value={block.value}>{block.display}</option>;
            })}
          </select>
          <label>Third Block</label>
        </div>
      </div>

      <div className="row">
        <div class="input-field col s12">
          <select
            value={state.fourth_block}
            multiple
            onChange={e =>
              setFieldValue(
                'fourth_block',
                Array.from(e.target.selectedOptions, option => option.value),
              )
            }
          >
            {constants['SEARCH_BLOCKS'].map(block => {
              return <option value={block.value}>{block.display}</option>;
            })}
          </select>
          <label>Fourth Block</label>
        </div>
      </div>

      <div className="row">
        <div className="col s12 mt-3">
          <button type="submit" className="btn gradient-45deg-purple-deep-orange">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SettingResource(Search, constants.API_SETTING + 'search');
