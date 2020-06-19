import React from 'react';
import Aux from '../../../../hoc/Auxillary';

const cardpanel = props => {
    return (
        <Aux>
            <div className="row">
                
                <div className="col s12 12">
                    
                    <div className="card indigo darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{props.title}</span>
                                {props.children}
                            
                        </div>
                        {/* <div className="card-action">
                            <a href="0">This is a link</a>
                            <a href="0">This is a link</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </Aux>
    );
}

export default cardpanel;