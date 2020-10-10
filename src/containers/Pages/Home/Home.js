import React from 'react';
import Aux from '../../../hoc/Auxillary';
import classes from './home.module.css';
import Button from '../../../components/Ui/Button/Button';
import img from '../../../imgs/Anonymous.jpg'

const home = () => {
    return (
        <Aux>
            <div className={classes.home}>
            <div align='center'>
                    <img alt='img' src={img} height='300px' width='85%' />
                </div>
                <h5>Welcome to Mailer App</h5> <br /> 
                <div>
                <h6 align='center' style={{ fontSize:'26px' }}> Send anonymous mails to anyone, without being authenticated to any Google account</h6>
                </div> <br />
                <div align='center' >
                    <Button btncolour='green' btnname='Get Started' actionType='link' iconname='directions_bike' whereto='/send' />
                </div>
            </div>
        </Aux>
    );
}

export default home