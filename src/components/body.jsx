import React from 'react';
//components
import Case1 from './subComponents/case1';
import Case2 from './subComponents/case2';
import Case3 from './subComponents/case3';
import Pagination from './pagination';
import Footer from './footer';

const Body = () => {
    return (
        <div className="container">
            <Case1 />
            <hr/>
            <Case2 />
            <hr/>
            <Case3 />
            <hr/>
            <Pagination/>
            <Footer />
        </div>
    );
}

export default Body;