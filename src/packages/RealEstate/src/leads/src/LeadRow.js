import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Partials from './partials';

const LeadRow = ({ row, onDelete, GetLeads }) => {
  const [state, setState] = useState({
    show: false,
    name: '',
    id: '',
    selected: [],
  });

  useEffect(() => {
    M.AutoInit();
  });

  const showBox = (name, id) => {
    const boxes = document.querySelectorAll('.view-box');
    boxes.forEach(box => {
      box.style.display = 'none';
    });
    setState({
      ...state,
      ['show']: true,
      ['name']: name,
      ['id']: id,
    });
    const box = document.querySelector(`.${name}[data-id="${id}"]`);
    box.style.display = 'block';
  };

  const renderBoxComponent = () => {
    const BoxComponent = Partials[state.name];
    return (
      <BoxComponent
        key={row.id}
        id={row.id}
        results={row[state.name]}
        firstname={row.firstname}
        lastname={row.lastname}
        closeBox={closeBox}
      />
    );
  };

  const renderAddComponent = (name, id) => {
    const AddComponent = Partials[state.name];
    return <AddComponent id={row.id} closeBox={closeBox} />;
  };
  const closeBox = () => {
    setState({
      ...state,
      ['show']: false,
      ['name']: '',
      ['id']: '',
    });
  };
  const handleSelected = id => {
    let { selected } = state;
    if (selected.includes(id)) {
      selected = selected.first(e => e !== id);
    } else {
      selected.push(id);
    }
    setState({
      ...state,
      ['selected']: selected,
    });
  };
  return (
    <tr>
      <td>
        <label>
          <input value={row.id} type="checkbox" onChange={e => handleSelected(e.target.value)} />
        </label>
      </td>
      <td>
        <div className="row">
          <div className="col s12">
            <span className="name lead">
              <Link to={`/leads/${row.id}`} className="">
                {row.firstname + ' ' + row.lastname}
              </Link>
            </span>
            {row.phone_number && (
              <div>
                <i className="fa fa-phone mr-2" />
                <small>{row.phone_number || 'NA'}</small>
              </div>
            )}
            <div>
              <i className="fa fa-envelope mr-2" />
              <small>{row.email || 'NA'}</small>
            </div>
          </div>
        </div>
      </td>
      <td />
      <td className="center-align">
        <small>unknown</small>
      </td>
      <td>
        <div>
          <a href="#">{row.agent && row.agent.first_name + ' ' + row.agent.last_name}</a>
        </div>
        <div>
          <select name="status" defaultValue={row.status}>
            <option value="untouched">Untouched</option>
            <option value="assigned">Assigned</option>
            <option value="contacted">Contacted</option>
            <option value="showing">Showing</option>
          </select>
        </div>
      </td>
      <td>
        <small>
          <span>{row.last_login || 'NA'}</span>
        </small>
        <br />
        <small>{row.metadata ? row.metadata.login_count + ' times' : 'N/A'}</small>
        <br />
      </td>
      <td>
        <small>{row.age || 'NA'}</small>
        <br />
        <small>-</small>
        <br />
      </td>
      <td>
        <table className="table-custom">
          <tbody>
            <tr>
              <td>
                <div className="info-unit">
                  <div>
                    <div className="leads__view-container">
                      <i
                        onClick={e => {
                          e.preventDefault();
                          return showBox('views', row.id);
                        }}
                        aria-hidden="true"
                        className="fa fa-eye fa-fw"
                      />
                      <small>
                        <sub>{row['views'].length}</sub>
                      </small>
                      {state.show &&
                        state.name == 'views' &&
                        state.id == row.id &&
                        renderBoxComponent()}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="info-unit">
                  <div>
                    <div className="leads__view-container">
                      <i
                        onClick={e => {
                          e.preventDefault();
                          return showBox('favourites', row.id);
                        }}
                        aria-hidden="true"
                        className="fa fa-heart"
                      />
                      <small>
                        <sub>{row['favourites'].length}</sub>
                      </small>
                      {state.show &&
                        state.name == 'favourites' &&
                        state.id == row.id &&
                        renderBoxComponent()}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="info-unit has-tooltip" aria-describedby="tooltip_2xmnz29knb">
                  <div>
                    <a
                      href="#"
                      title="Feature Coming Soon"
                      className="tooltipped"
                      data-position="bottom"
                      data-tooltip="Feature Coming Soon"
                    >
                      <i aria-hidden="true" className="fa fa-home" />
                      <small>
                        <sub>0</sub>
                      </small>
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <div className="info-unit">
                  <div>
                    <div className="leads__view-container">
                      <i
                        onClick={e => {
                          e.preventDefault();
                          return showBox('reports', row.id);
                        }}
                        aria-hidden="true"
                        className="fa fa-eye fa-fw"
                      />
                      <small>
                        <sub>{row['reports'].length}</sub>
                      </small>
                      {state.show &&
                        state.name == 'reports' &&
                        state.id == row.id &&
                        renderBoxComponent()}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="info-unit">
                  <div>
                    <div className="leads__view-container">
                      <i
                        onClick={e => {
                          e.preventDefault();
                          return showBox('alerts', row.id);
                        }}
                        aria-hidden="true"
                        className="fa fa-bullhorn"
                      />
                      <small>
                        <sub>{row['alerts'].length}</sub>
                      </small>
                      {state.show &&
                        state.name == 'alerts' &&
                        state.id == row.id &&
                        renderBoxComponent()}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="info-unit">
                  <div>
                    <div className="leads__view-container">
                      <i
                        onClick={e => {
                          e.preventDefault();
                          return showBox('distances', row.id);
                        }}
                        aria-hidden="true"
                        className="fa fa-car fa-fw"
                      />
                      <small>
                        <sub>{row['distances'].length}</sub>
                      </small>
                      {state.show &&
                        state.name == 'distances' &&
                        state.id == row.id &&
                        renderBoxComponent()}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table className="table-custom">
          <tbody>
            <tr>
              <td>
                <div className="info-unit">
                  <div>
                    <div className="leads__view-container">
                      <i
                        onClick={e => {
                          e.preventDefault();
                          return showBox('emails', row.id);
                        }}
                        aria-hidden="true"
                        className="fa fa-envelope fa-fw"
                      />
                      <small>
                        <sub>{row['emails'].length}</sub>
                      </small>
                      {state.show &&
                        state.name == 'emails' &&
                        state.id == row.id &&
                        renderBoxComponent()}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="info-unit">
                  <div>
                    <div className="leads__view-container">
                      <i
                        onClick={e => {
                          e.preventDefault();
                          return showBox('notes', row.id);
                        }}
                        aria-hidden="true"
                        className="fa fa-sticky-note"
                      />
                      <small>
                        <sub>{row['notes'].length}</sub>
                      </small>
                      {state.show &&
                        state.name == 'notes' &&
                        state.id == row.id &&
                        renderBoxComponent()}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="info-unit">
                  <div>
                    <div className="leads__view-container">
                      <i
                        onClick={e => {
                          e.preventDefault();
                          return showBox('calls', row.id);
                        }}
                        aria-hidden="true"
                        className="fa fa-phone fa-fw"
                      />
                      <small>
                        <sub>{row['calls'].length}</sub>
                      </small>
                      {state.show &&
                        state.name == 'calls' &&
                        state.id == row.id &&
                        renderBoxComponent()}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="info-unit">
                  <div>
                    <div className="leads__view-container">
                      <i
                        onClick={e => {
                          e.preventDefault();
                          return showBox('replies', row.id);
                        }}
                        aria-hidden="true"
                        className="fa fa-reply"
                      />
                      <small>
                        <sub>{row['replies'].length}</sub>
                      </small>
                      {state.show &&
                        state.name == 'replies' &&
                        state.id == row.id &&
                        renderBoxComponent()}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="info-unit">
                  <div>
                    <div className="leads__view-container">
                      <i
                        onClick={e => {
                          e.preventDefault();
                          return showBox('rating', row.id);
                        }}
                        aria-hidden="true"
                        className="fa fa-star"
                      />
                      <small>
                        <sub>{row.rating ? row['rating'].ratings : ''}</sub>
                      </small>
                      {state.show &&
                        state.name == 'rating' &&
                        state.id == row.id &&
                        renderBoxComponent()}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <a href="#">{row.contact_status || 'Not Contacted yet'}</a>
      </td>
      <td>
        <div className="leads__view-container">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              return showBox('AddFollowUp', row.id);
            }}
          >
            <i className="fa fa-plus" />
            Add
          </a>
          {state.show && state.name == 'AddFollowUp' && state.id == row.id && renderAddComponent()}
        </div>
      </td>
      <td>
        <div className="leads__view-container">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              return showBox('AddNote', row.id);
            }}
          >
            <i className="fa fa-plus" />
            Add
          </a>
          {state.show && state.name == 'AddNote' && state.id == row.id && renderAddComponent()}
        </div>
      </td>
    </tr>
  );
};

export default LeadRow;
