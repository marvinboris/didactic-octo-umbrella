import React from 'react';

import './Spinner.css';

import ImgLogo from '../../../assets/images/logo.png';

export default () => <div className="UI Spinner">
    <div className="position-relative">
        <div className="loader" id="loader-1"></div>

        <div className='content rounded-circle p-4 border-green bg-transparent overflow-hidden'>
            <img src={ImgLogo} />
        </div>
    </div>
</div>;