import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary';


class Footer extends Component {

    render(){
        return (
            <Aux>
                <div className="page-footer  indigo lighten-1">
                    
                    <div className="footer-copyright">
                        <div className="container" align='center'>

                       Developed by Sebago © {new Date().getFullYear()} Copyright Text
                        
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Footer;
