import React, { useEffect, useState } from 'react';

export default props => {
  useEffect(() => {
    M.AutoInit();
  });
  useEffect(() => {
    M.updateTextFields();
  });
  const { block, display, name, options } = props;
  console.log(options);
  const choices = options.choices || [];
  return (
    <div className="edit--page">
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <div className="row">
              <div className="input-field col s4">
                <label>Name</label>
                <input
                  name="name"
                  value={name}
                  className="materialize-textarea"
                  onChange={e => setFieldValue('name', e.target.value)}
                />
              </div>
              <div className="input-field col s4">
                <label>Display</label>
                <input
                  name="display"
                  value={display}
                  className="materialize-textarea"
                  onChange={e => setFieldValue('display', e.target.value)}
                />
              </div>
              <div className="input-field col s4">
                <label>Block</label>
                <input
                  name="block"
                  value={block}
                  className="materialize-textarea"
                  onChange={e => setFieldValue('block', e.target.value)}
                />
              </div>
            </div>

            {options.length > 0 &&
              options.map(option => {
                const choices = option.choices;
                return (
                  <div className="option--container">
                    <div className="row">
                      <div className="input-field col s6">
                        <label>Name</label>
                        <input
                          name="name"
                          value={option.name}
                          className="materialize-textarea"
                          onChange={e => setFieldValue('name', e.target.value)}
                        />
                      </div>
                      <div className="input-field col s6">
                        <label>Placeholder</label>
                        <input
                          name="placeholder"
                          value={option.placeholder}
                          className="materialize-textarea"
                          onChange={e => setFieldValue('placeholder', e.target.value)}
                        />
                      </div>
                    </div>
                    {choices.length > 0 &&
                      choices.map(choice => {
                        return (
                          <div className="row">
                            <div className="input-field col s6">
                              <label>Title</label>
                              <input
                                name="title"
                                value={choice.title}
                                className="materialize-textarea"
                                onChange={e => setFieldValue('title', e.target.value)}
                              />
                            </div>
                            <div className="input-field col s6">
                              <label>Value</label>
                              <input
                                name="value"
                                value={choice.value}
                                className="materialize-textarea"
                                onChange={e => setFieldValue('value', e.target.value)}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
