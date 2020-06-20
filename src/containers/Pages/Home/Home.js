import React from 'react';
import Aux from '../../../hoc/Auxillary';
import classes from './home.module.css';
import Button from '../../../components/Ui/Button/Button';

const home = () => {
    return (
        <Aux>
            <div className={classes.home}>
                <h5>Welcome to the convertor app</h5> <br /> <br /> <br />
                <div>
                <h6>Converts a regular pattern of XML files and extract the texts out of the xml tags, all you need to do is Signup then proceed to signin to be able to upload files and convert. You can also view the lists of the converted files you have in your database.</h6>
                </div> <br />
                <div align='center' >
                    <Button btncolour='indigo' btnname='Get Started' actionType='link' iconname='directions_bike' whereto='/register' />
                </div>
            </div>
        </Aux>
    );
}

export default home