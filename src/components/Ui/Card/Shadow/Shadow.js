import React from 'react';
import Aux from '../../../../hoc/Auxillary';

const shadow = props => {
    return (
        <Aux>
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <div className="card-panel grey lighten-5 z-depth-5">
                <div className="row valign-wrapper">
                    <div className="col s4">
                    <img src={props.shadowDir} alt={props.shadowDir} className="circle responsive-img" />
                    </div>
                    <div className="col s8">
                    <span className="black-text">
                        {props.children}
                    </span>
                    </div>
                </div>
                </div>
            </div>
        </Aux>
    );
}

export default shadow;