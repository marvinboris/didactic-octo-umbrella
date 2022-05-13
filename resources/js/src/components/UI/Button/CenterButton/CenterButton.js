import React from 'react';
import { Button } from 'reactstrap';

export default ({ onClick, children, color, icon, className, size, type, left }) =>
    <Button color={color} size={size} type={type} onClick={onClick} className={`rounded-15 px-5 py-4 text-25 text-700 ${className}`}>
        {left && <i className={"fas fa-" + icon + " mr-4"} />}
        
        <>{children}</>

        {!left && <i className={"fas fa-" + icon + " ml-4"} />}
    </Button>;