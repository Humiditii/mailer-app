import React from 'react';
import Aux from '../../../../hoc/Auxillary';
const slidee = props => {
    return (
        <Aux>
            <li>
                <img src={props.slideeDir} alt={props.slideeDir} /> 
                <div className="caption center-align">
                    <h3>{props.slideeContent}</h3>
                    <h5 className="light grey-text text-lighten-3">{props.slideecaption}</h5>
                </div>
            </li>
        </Aux>
    );
}

export default slidee