import React from 'react';

const Row = props => (
  <tr>
    <td>{props.sn}</td>
    <td>{props.name}</td>
    <td>{props.excerpt}</td>
    <td className="text right-align">
      <a className="waves-effect waves-light btn-small cyan" onClick={() => console.log('wowowo')}>
          <i className="material-icons left">edit</i>
      </a>
      <a className="waves-effect waves-light btn-small amber">
          <i className="material-icons left">delete</i>
      </a>
      <a className="waves-effect waves-light btn-small purple">
          <i className="material-icons left">check</i>
      </a>
    </td>
  </tr>
);

export { Row };
