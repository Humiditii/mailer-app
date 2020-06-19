import React from 'react';
import Aux from '../../../hoc/Auxillary'

import classes from './Preloader.module.css';

const preloader = () => (
    <Aux>
        <div className={classes.Loader}>Loading...</div>
        <p align='center' style={{color:'indigo'}}>Loading...</p>
    </Aux>
    
);

export default preloader;