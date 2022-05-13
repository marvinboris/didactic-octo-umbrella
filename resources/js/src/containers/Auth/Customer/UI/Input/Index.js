import React, { useState } from 'react';
import { FormGroup, Input, InputGroup, InputGroupText, InputGroupAddon, CustomInput } from 'reactstrap';

import WithTooltip from '../../../../../components/UI/WithTooltip/WithTooltip';

import { checkValidity } from '../../../../../shared/utility';

export default ({ id, onChange, className = '', name, type = 'text', required, readonly, disabled, placeholder, value = undefined, defaultValue = undefined, validation = {}, children, bonus, icon, addon, append }) => {
    const [touched, setTouched] = useState(false);

    const inputChangedHandler = e => {
        setTouched(true);
        onChange(e);
    }

    if (required) validation.required = true;

    const valid = touched && value && checkValidity(value, validation),
        invalid = touched && !checkValidity(value, validation);

    const inputGroup = { className: "bg-white border border-soft rounded-15 d-flex align-items-center", };
    const inputGroupAddon = { className: "position-relative", style: { zIndex: 10 }, };
    const inputGroupText = { className: "bg-transparent position-relative d-block border-0 px-4 py-0 my-1 text-border-30", style: { width: 77 }, };

    const data = {
        name, valid, invalid, type, required, disabled, defaultValue, value, placeholder,
        onChange: inputChangedHandler,
        id: id ? id : name,
        readOnly: readonly,
        className: "border-0 rounded-right-15 text-reset px-4 py-3",
        style: { height: 82, boxShadow: 'none', }
    };

    return <FormGroup className={`Auth Customer UI Input ${className}`}>
        <WithTooltip content={placeholder && <>{placeholder}{required && <span className="text-red">*</span>}</>} id={data.id}>
            <InputGroup {...inputGroup} size="lg">
                {(icon || addon) && <InputGroupAddon addonType="prepend" {...inputGroupAddon}>
                    <InputGroupText {...inputGroupText}>
                        {icon ? <div className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                            <i className={`fas fa-${icon} fa-fw text-green mx-1`} />
                        </div> : addon}

                        <div className='position-absolute' style={{ top: '50%', left: '100%', transform: 'translate(-50%,calc(-50% - 2px))' }}>
                            <i className='fas fa-circle text-10' />
                        </div>
                    </InputGroupText>
                </InputGroupAddon>}

                {children ? <CustomInput {...data}>{children}</CustomInput> : <Input {...data} />}

                {append && <InputGroupAddon addonType="append">
                    <InputGroupText className="bg-transparent border-0 text-secondary text-small px-4">
                        {append}
                    </InputGroupText>
                </InputGroupAddon>}
            </InputGroup>
        </WithTooltip>


        {bonus}
    </FormGroup>;
};