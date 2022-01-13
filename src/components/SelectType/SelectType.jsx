import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const SelectType = React.forwardRef((props, ref) => {

    const { variants, nameForm, handleChange, onBlur, selectValue } = props;
    const [idValue, setIdValue] = useState(selectValue ? selectValue : 0)
    const change = (e) => {
        handleChange(e)
        setIdValue(e.target.value)
    }


    return (
        <Form.Select className='m-0'
            name={nameForm}
            type="text"
            value={idValue}
            onBlur={onBlur}
            onChange={(e) => change(e)}
        >
            <option>Seleccionar...</option>
            {variants.map((variant) => {
                return (
                    <option key={variant.id} value={variant.id} >{variant.type}</option>
                )
            })}
        </Form.Select>
    )
})
export default SelectType;