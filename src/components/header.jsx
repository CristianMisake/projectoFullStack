import React from 'react';


const Header = () => {
    return (
        <nav className="navbar navbar-static-top">
            <div className="container">
                <h1 className="text-center text-muted"><img className="logo" src="https://www.elheraldo.co/sites/all/themes/elheraldo/images/el-heraldo-logo.svg" alt="logo"/></h1>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="nav nav-tabs">
                        <li role="presentation" className="active"><a href="/">noticias</a></li>
                        <li role="presentation" ><a href="/">judiciales</a></li>
                        <li role="presentation" ><a href="/">deportes</a></li>
                        <li role="presentation" ><a href="/">clasificados</a></li>
                        <li role="presentation" ><a href="/">política</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;