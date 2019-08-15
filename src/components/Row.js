import React from 'react';

const Row = props => (
  <tr>
    <td>{props.sn}</td>
    <td>{props.name}</td>
    <td className="text right-align">
      <a className="waves-effect waves-light btn-small cyan" onClick={() => console.log('wowowo')}>
        <i className="material-icons left">edit</i>
        Edit
      </a>
      <a className="waves-effect waves-light btn-small amber">
        <i className="material-icons left">delete</i>
        Delete
      </a>
      <a className="waves-effect waves-light btn-small purple">
        <i className="material-icons">check</i>
        Enabled
      </a>
    </td>
  </tr>
);

export { Row };
