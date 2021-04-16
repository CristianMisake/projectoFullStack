import React from 'react';

const Pagination = () => {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className="disabled">
                    <a href="/" aria-label="Previous" disabled>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="active"><a href="/">1</a></li>
                <li><a href="/page2.html">2</a></li>
                <li>
                    <a href="/page2.html" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;