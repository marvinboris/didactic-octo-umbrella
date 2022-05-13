import React from 'react';

import './Section.css';

export default ({ icon, title, subtitle, children, onClick, disabled, className = '' }) => <section className={'Section shadow ' + className}>
    <div className='icon'>
        <i className={'fas fa-' + icon} />
    </div>

    <div className='flex-fill'>
        <div className='header'>
            <div className='title'>{title}<i className='fas fa-info-circle' /></div>

            <div className='subtitle'>{subtitle}</div>

            <div className='green-line' />
        </div>

        <div className='body'>
            {children}
        </div>
    </div>

    <div>
        <button onClick={onClick} type="button" className={'edit btn btn-' + (disabled ? 'primary' : 'red')}><i className={'fas fa-' + (disabled ? 'pen' : 'lock')} /></button>
    </div>
</section>;