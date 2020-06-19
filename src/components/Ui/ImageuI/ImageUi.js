import React from 'react';
import Aux from '../../../hoc/Auxillary';

const imageUi = props => {
    return (
        <Aux>
            <img width ={props.width} className='circle responsive-img' src={props.imagName} alt={props.imagName} />
        </Aux>
    );
}

export default imageUi;