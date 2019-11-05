import React from 'react';

const Pagination = () => {
    return (
        <div className="right-align pagination--top">
            <ul className="pagination theme--pagination right">
                <li>
                    <a
                        href="#"
                        aria-label="Previous"
                    >
                        <span aria-hidden="true">«</span>
                    </a>
                </li>
                <li className="active">
                    <a href="#"></a>
                </li>
                <li>
                    <a
                        href="#"
                        aria-label="Next"
                    >
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
            <span>Total Pages: 0 </span>
        </div>
    );
}

export default Pagination;