import React, { Component, useState } from 'react';
import Resource from '../../../../Core/Components/Resource';
import * as constants from './../constants';
import ToolBar from '../../../../Core/Components/ToolBar';
import LeadRow from './LeadRow';

const LeadList = () => {
  const [state, setState] = useState({
    LEADS_API: constants.API_LEAD,
  });

  const setFieldValue = (field, value) => {
    console.log(value);
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <div id="main">
      <ToolBar breadcrumbs={constants.BREADCRUMB_LEAD} toolbar={constants.TOOLBAR} />
      <div id="">
        <div className="row">
          <div className="col s12">
            <div className="container-fluid">
              <div className="row filter--bar">
                <div className="col s12">
                  <div className="left">
                    <ul className="tabs theme__tabs">
                      <li className="tab">
                        <a
                          className="active"
                          onClick={e => {
                            e.preventDefault();
                            return setFieldValue('LEADS_API', constants.API_LEAD_TYPE + 'active');
                          }}
                        >
                          Active
                        </a>
                      </li>
                      <li className="tab">
                        <a
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            return setFieldValue('LEADS_API', constants.API_LEAD_TYPE + 'new');
                          }}
                        >
                          New
                        </a>
                      </li>
                      <li className="tab">
                        <a
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            return setFieldValue(
                              'LEADS_API',
                              constants.API_LEAD_TYPE + 'unassigned',
                            );
                          }}
                        >
                          Unassigned
                        </a>
                      </li>
                      <li className="tab">
                        <a
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            return setFieldValue('LEADS_API', constants.API_LEAD_TYPE + 'archived');
                          }}
                        >
                          Archived
                        </a>
                      </li>
                      <li className="tab">
                        <a
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            return setFieldValue(
                              'LEADS_API',
                              constants.API_LEAD_TYPE + 'discarded',
                            );
                          }}
                        >
                          Discarded
                        </a>
                      </li>
                      <li className="tab">
                        <a
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            return setFieldValue(
                              'LEADS_API',
                              constants.API_LEAD_TYPE + 'unregistered',
                            );
                          }}
                        >
                          Unregistered
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="input-field theme--select col s2">
                    <Resource
                      path={'api/leads/agents'}
                      render={data => {
                        if (data.loading) return <option value="">Loading agents...</option>;
                        if (data.payload.data != undefined) {
                          if (data.loading)
                            return <p className="center-align"> Loading agents ... </p>;
                          if (data.payload.data != undefined) {
                            const rows = data.payload.data;
                            return (
                              <select
                                onChange={e => {
                                  e.preventDefault();
                                  return setFieldValue(
                                    'LEADS_API',
                                    constants.API_LEAD_AGENT + e.target.value,
                                  );
                                }}
                              >
                                <option value="0">All Agents</option>
                                {rows.length > 0 &&
                                  rows.map(row => {
                                    return (
                                      <option value={row.id}>
                                        {row.first_name} {row.last_name}
                                      </option>
                                    );
                                  })}
                              </select>
                            );
                          }
                          return <div>No Agents Found</div>;
                        }
                        return <div>No Agents Found</div>;
                      }}
                    />
                  </div>
                  <div className="col s12 btn--bar">
                    <button className="btn btn-sm lead-action-btn">
                      <i className="material-icons">checked</i>
                    </button>
                    <button className="btn btn-sm lead-action-btn">
                      <i className="material-icons left">add</i> Add
                    </button>
                    <button id="filter_leads_btn" className="btn btn-sm">
                      <i
                        className="material-icons left"
                        onClick={e => {
                          e.preventDefault();
                          return setFieldValue('LEADS_API', constants.API_LEAD_TYPE);
                        }}
                      >
                        refresh
                      </i>{' '}
                      Refresh
                    </button>
                  </div>
                  <div className="col s12">
                    <div className="container-fluid">
                      <div className="card">
                        <div className="card-content">
                          <table className="table striped leads-table responsive-table">
                            <thead>
                              <tr>
                                <th />
                                <th className="name-col">Name</th>
                                <th className="tags-col">Tags</th>
                                <th className="budg-city-time-col text-center">
                                  <div className="sortable-head col-sub-heading">
                                    <i className="fas fa-dollar-sign" />
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                  <span className="v-line" />
                                  <div className="sortable-head col-sub-heading">
                                    TimeFrame
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                  <span className="v-line" />
                                  <div className="sortable-head col-sub-heading">
                                    City
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                </th>
                                <th>
                                  <div className="sortable-head col-sub-heading">
                                    Realtor
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                  <span className="v-line" />
                                  <div className="sortable-head col-sub-heading">
                                    Status
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                </th>
                                <th>
                                  <div className="sortable-head col-sub-heading">
                                    Last Login
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                  <span className="v-line" />
                                  <div className="sortable-head col-sub-heading">
                                    Login Count
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                </th>
                                <th>
                                  <div className="sortable-head col-sub-heading">
                                    Age
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                  <span className="v-line" />
                                  Source
                                </th>
                                <th className="info-col">
                                  <div className="sortable-head col-sub-heading">
                                    Info
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                </th>
                                <th>
                                  <div className="sortable-head col-sub-heading">
                                    Actions
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                </th>
                                <th id="last_contact">
                                  <div className="sortable-head col-sub-heading">
                                    Last Contact
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                </th>
                                <th id="follow_up">
                                  <div className="sortable-head col-sub-heading">
                                    Followup
                                    <i aria-hidden="true" className="fa fa-sort sortable-icon" />
                                  </div>
                                </th>
                                <th />
                              </tr>
                            </thead>

                            <Resource
                              path={state.LEADS_API}
                              key={state.LEADS_API}
                              render={data => {
                                if (data.loading) return <p> Loading leads ... </p>;
                                if (data.payload.data != undefined) {
                                  if (data.loading)
                                    return <p className="center-align"> Loading leads ... </p>;
                                  if (data.payload.data != undefined) {
                                    const rows = data.payload.data;
                                    return (
                                      <tbody>
                                        {rows.length > 0 &&
                                          rows.map(row => {
                                            return <LeadRow row={row} key={row.id} />;
                                          })}
                                      </tbody>
                                    );
                                  }
                                  return <div>No Data Found</div>;
                                }
                                return <div>No Data Found</div>;
                              }}
                            />
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadList;
