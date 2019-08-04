import React from 'react';

const Row = props => (
  <tr>
    <td>{props.sn}</td>
    <td>{props.name}</td>
    <td>{props.excerpt}</td>
    <td className="text right-align">
      <a className="waves-effect waves-light btn-small cyan">
        <i aria-hidden="true" className="fa fa-pencil"></i>
        Edit
      </a>
      <a className="waves-effect waves-light btn-small amber">
        <i aria-hidden="true" className="fa fa-trash"></i>
        Delete
      </a>
      <a className="waves-effect waves-light btn-small purple">
        <i aria-hidden="true" className="fa fa-check-circle-o"></i>
        Enabled
      </a>
    </td>
  </tr>
);

export default Row;
