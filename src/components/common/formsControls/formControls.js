import React from 'react';
import { Field } from 'redux-form';




export const Input = (props) => {
    const hasError = props.meta.error && props.meta.touched;

    console.warn(hasError);
    return <div>
        <input {...props.input} {...props}/>
    </div>;
};

export const createField = ( component, componentInfo ) => {
    
    return <div>
        <Field component={component} {...componentInfo}/>
    </div>
};