import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './NavigationItem.css';

export default ({ icon, children, href, path, className = '', different, font, content, isOpen, toggle, toggleNavbar, exact = true, isActive }) => {
    return <NavItem className="NavigationItem">
        {content
            ? <div className={"nav-link text-300 text-16 text-md-17 text-xxl-18 text-" + font + " " + className + (location.pathname.includes(path) ? " active text-700" : "")} onMouseEnter={toggle} onMouseLeave={toggle} style={{ cursor: 'pointer' }}>
                {icon && <i className={icon + " mr-1"} />}<span className="mr-1">{children}</span><i className={"fad fa-angle-down angle text-10 text-md-12 text-xxl-14 " + (isOpen ? "open" : "")} />

                <>
                    <div className="position-absolute d-none d-md-block w-100" style={{ top: '100%', left: 0 }}>
                        <Collapse isOpen={isOpen}>{content}</Collapse>
                    </div>

                    <div className="d-md-none">
                        <Collapse isOpen={isOpen}>{content}</Collapse>
                    </div>
                </>
            </div>
            : <NavLink className={`nav-link text-300 text-16 text-md-17 text-xxl-18 ${'text-' + font} ${className}`} to={href} onClick={toggleNavbar} exact={exact} isActive={isActive} activeClassName={!different ? "text- active text-700" : ""}>{icon && <i className={icon + " mr-1"} />}{children}<FontAwesomeIcon icon={faCircle} className="circle text-lightblue text-6" /></NavLink>}
    </NavItem>;
}