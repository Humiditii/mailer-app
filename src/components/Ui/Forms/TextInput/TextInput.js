import React from 'react';
import Aux from '../../../../hoc/Auxillary';


const textinputs = props => {
    return (
        <Aux>
                <div className="input-field col s12">
                <i className="material-icons prefix">{props.iconname}</i>
                <input id={props.inputid} type={props.inputtype} onChange={props.changed} />
                <label htmlFor={props.inputid}>{props.labelname}</label>
                </div>
        </Aux>
    );
}

export default textinputs; 