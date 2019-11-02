import React from 'react';
import { Link } from 'react-router-dom';

const PageRow = ({ row }) => (
    <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td className="text right-align">
            <Link
                className="waves-effect waves-light btn-small cyan"
                to={{ pathname: `/page-edit/${row.id}`, query: { id: row.id } }}
            >
                <i className="material-icons left">edit</i>
            </Link>
            <a className="waves-effect waves-light btn-small amber">
                <i
                    className="material-icons left"
                    onClick={() => {
                        props.onDelete(row.id);
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

export default PageRow;
