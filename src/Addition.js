import React from 'react';

export const Addition = (props) => {

    return (
        <h2>{props.numberOne} + {props.numberTwo} = {props.numberOne + props.numberTwo}</h2>
    );
};