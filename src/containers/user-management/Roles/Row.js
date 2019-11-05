import React from 'react';
import { Link } from 'react-router-dom';

const Row = props => (
  <tr>
    <td>{props.sn}</td>
    <td>{props.name}</td>
    <td>{props.description}</td>
    <td className="text right-align">
      <Link
        className="waves-effect waves-light btn-small cyan"
        to={{ pathname: `/roles-edit/${props.id}`, query: { id: props.id } }}
      >
        <i className="material-icons left">edit</i>
      </Link>
      <a className="waves-effect waves-light btn-small amber">
        <i
          className="material-icons left"
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          delete
        </i>
      </a>
      <a className="waves-effect waves-light btn-small purple">
        <i className="material-icons left">check</i>
      </a>
    </td>
  </tr>
);

export { Row };
