import React from 'react';

import './Aside.css';

export default ({ title, subtitle, children, button, className = '' }) => <div className={'Aside shadow ' + className}>
    <div className='header'>
        <div>
            <div className='title'>{title}<i className='fas fa-info-circle' /></div>

            <div className='subtitle'>{subtitle}</div>

            <div className='green-line' />
        </div>

        <div className='ml-auto'>
            {button}
        </div>
    </div>

    <div className='body'>
        {children}
    </div>
</div>;