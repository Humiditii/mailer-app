import React , {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../../../hoc/Auxillary';
import TextInputs from '../../../../components/Ui/Forms/TextInput/TextInput';
import Button from '../../../../components/Ui/Button/Button'

import classes from './SendMail.module.css';
import Preloader from '../../../../components/Ui/Preloader/Preloader';
import {sender} from '../../../../store/actions/auth';



class SendMail extends Component {

    state = {
        email : null,
        from : null,
        subject: null,
        message:null
    }

    inputHandler = (event, item ) => {
        const updateFields = {
            ...this.state,
            [item]: event.target.value
        }
        this.setState(updateFields);
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const {email, from, subject, message} = this.state;
            this.props.onSignUp(email,from, subject, message);
        
    }

    render(){
        const config = {
            name: ['email',  'from', 'subject', 'message'],
            type: ['text', 'text', 'text', 'text'],
            icon: ['mail', 'security', 'center_focus_strong', 'chat']
        }
        let form = (
            <Aux>
                <div className='row z-depth-5'>
                <h5 className={classes.register} align='center' >Send Your Anonymous mail</h5>
                <h5 align='center' style={{color: 'red', fontSize: '19px'}} >{this.props.error}</h5>
                <h5 align='center' style={{color: 'green', fontSize: '19px'}} >{this.props.message}</h5>
                        <form className="col s12" onSubmit={this.onSubmitHandler} >
                            
                            {config.name.map( (item, index) => (
                                <TextInputs key={index} inputid={item} iconname={config.icon[index]}  inputtype={config.type[index]} labelname={item} changed={(event) =>  this.inputHandler(event, item) } />
                            ))}
                           
                            <div align='center' >
                            <Button action='submit' btncolour='green' btnname='Send'  iconname='send'  />
                        </div>
                                <br/> <br />
                        </form>
                        </div>
            </Aux> 
        );

        if( this.props.loading){
            form = <Preloader />
        }


        return (
            <Aux>
                <div className='container' style={{paddingTop: '50px', minHeight:'100vh'}} > <br></br>
                   {form}
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.send.loading,
        error: state.send.error,
        message: state.send.message
    }
}

const mapPropsToState = dispatch => {
    return {
        onSignUp:(email,from, subject, message) => { dispatch(sender( email,from, subject, message )) }
    }
}

export default connect(mapStateToProps, mapPropsToState)(SendMail);