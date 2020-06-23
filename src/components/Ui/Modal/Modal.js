import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary';
import M from 'materialize-css';

class Modal extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', ()=> {
            const elems = document.querySelectorAll('.modal');
            const instances = M.Modal.init(elems);
            return instances
          });
    } 



    render(){
        return (
            <Aux>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                    <h4>Modal Header</h4>
                        {/* <p>{this.props.content}</p> */}
                        {this.props.children}
                    </div>
                    <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Modal