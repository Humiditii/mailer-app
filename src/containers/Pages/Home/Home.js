import React from 'react';
import Aux from '../../../hoc/Auxillary';
import classes from './home.module.css';

const home = () => {
    return (
        <Aux>
            <div className={classes.home}>
                <h5>Welcome to the convertor app</h5> <br /> <br /> <br />
                <div>
                <h6>Converts a regular pattern of XML files and extract the texts out of the xml tags, all you need to do is Signup the signin to be able to upload files and convert. You can also view the lists oif the converted files you have.</h6>
                </div>
               
            </div>
        </Aux>
    )
}

export default home