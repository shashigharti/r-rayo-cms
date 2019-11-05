import React from 'react';
import { Link } from 'react-router-dom';

const Row = props => {
  const color = props.status ? 'purple' : 'red darken-1';
  return (
    <tr>
      <td>{props.sn}</td>
      <td>{props.name}</td>
      <td>
        <button
          className="waves-effect waves-light btn-small"
          style={{
            backgroundColor: props.color,
          }}
        >
          {props.color}
        </button>
      </td>
      <td className="text right-align">
        <Link
          className="waves-effect waves-light btn-small cyan"
          to={{
            pathname: '/edit-group',
            state: {
              group: {
                id: props.sn,
                name: props.name,
                color: props.color,
                status: props.status,
              },
            },
          }}
        >
          <i className="material-icons left">edit</i>          
        </Link>
        <a
          className="waves-effect waves-light btn-small amber modal-trigger"
          onClick={() => {
            props.onDeleteClick(props.sn);
          }}
          data-target="modal1"
        >
          <i className="material-icons left">delete</i>          
        </a>
        <a
          className={`waves-effect waves-light btn-small ${color}`}
          onClick={() => {
            props.onClick(props.sn, props.status);
          }}
        >
          {props.status ? (
            <>
              <i className="material-icons left">check</i>
            </>
          ) : (
            <>
              <i className="material-icons left">clear</i>
            </>
          )}
        </a>
      </td>
    </tr>
  );
};

export { Row };
