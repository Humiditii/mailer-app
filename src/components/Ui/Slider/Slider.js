import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary';
import M from 'materialize-css';

class Slider extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.slider');
            const instances = M.Slider.init(elems);
            return instances
          });
    }
    render(){
        return (
            <Aux>
                 <div className="slider">
                    <ul className="slides">
                        {this.props.children}
                    </ul>
                </div>
            </Aux>
        );
    }
}

export default Slider