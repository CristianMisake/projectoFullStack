import React from 'react';


const Footer = () => {
    return (
        <footer className="row">
            <div className="col-sm-12">
                <h3><span className="glyphicon glyphicon-header"></span> <span className="text-info">empresa:</span> El Heraldo</h3>
                <h3><span className="glyphicon glyphicon-home"></span> <span className="text-info">dirección:</span> Calle 88 No. 13 A 07</h3>
                <h3><span className="glyphicon glyphicon-phone-alt"></span> <span className="text-info">teléfono:</span> (1) 218 5733</h3>
                <h3><span className="glyphicon glyphicon-console"></span> <span className="text-info">url:</span> <a href="https://www.elheraldo.co/">https://www.elheraldo.co/</a></h3>
            </div>
        </footer>
    );
}

export default Footer;