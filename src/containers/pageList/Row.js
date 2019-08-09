import React from 'react';

const Row = ({ id, sn, name, excerpt, onEdit }) => (
  <tr>
    <td>{sn}</td>
    <td>{name}</td>
    <td>{excerpt}</td>
    <td className="text right-align">
      <button className="waves-effect waves-light btn-small cyan" value={id} onClick={onEdit}>
        <i aria-hidden="true" className="fa fa-pencil"></i>
        Edit
      </button>
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
