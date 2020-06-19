import React from 'react';
import Aux from '../../../../hoc/Auxillary';

const footText = props => {
    return (
        <Aux>
            <h5 className="white-text">{props.footerHead}</h5>
            <p className="grey-text text-lighten-4">{props.footerContent}.</p>
        </Aux>
    );
}

export default footText;