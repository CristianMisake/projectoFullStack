import React from 'react';


const Loading = () => {
    return (
        <div id="loading">
            <div className="progress">
                <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '0%'}}>
                    <span className="sr-only">40% Complete (success)</span>
                </div>
            </div>
        </div>
    );
}

export default Loading;
