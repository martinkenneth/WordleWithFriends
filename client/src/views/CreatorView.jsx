import React from 'react';
import Header from '../components/Header';

const CreatorView = () => {
    return (
        <div>
            <Header/>
            <div className="links">
                <h3>Creator Link:</h3>
                <a href="">https://someExampleLink/</a>
            </div>
            <div className="links">
                <h3>Share Link:</h3>
                <a href="">https://someOtherExampleLink/</a>
            </div>
            {/* insert leader board component here */}
        </div>
    )
}

export default CreatorView;