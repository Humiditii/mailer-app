import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary';


class Footer extends Component {

    render(){
        return (
            <Aux>
                <div className="page-footer  red lighten-1">
                    
                    <div className="footer-copyright">
                        <div className="container" align='center'>

                       Developed by Babatunde Hameed 0. © {new Date().getFullYear()} Copyright 
                       
                       Contact via mail <i className="tiny material-icons">forward</i> <a href='mailto: humiditii45@gmail.com' ><i className="tiny material-icons">mail</i></a> <br/>
                       <i className="tiny material-icons">star</i><i className="tiny material-icons">star</i><i className="tiny material-icons">star</i>
                        
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Footer;
