import React , {Component} from 'react';
import {connect} from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import Aux from '../../../../hoc/Auxillary';
import TextInputs from '../../../../components/Ui/Forms/TextInput/TextInput';
import Button from '../../../../components/Ui/Button/Button'
import classes from '../Signup/Signup.module.css';
import Preloader from '../../../../components/Ui/Preloader/Preloader';
import {signIn} from '../../../../store/actions/auth'


class Signin extends Component {
// componentDidMount(){
//     console.log(this.props);
// }
    state = {
        username : null,
        password: null
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
        const {username, password} = this.state;
        this.props.onSignIn(username, password);
    }

    render(){

        const config = {
            name: ['Email', 'password'],
            type: ['text',  'password'],
            icon: ['account_circle', 'security']
        }

        let form = (
            <Aux>
                <div className='row z-depth-5'>
                        <h5 className={classes.register} align='center' >Welcome Back, KIndly Login</h5>
                        <p align='center' style={{color:'red'}} >{ this.props.error}</p>
                        <form className="col s12" onSubmit={this.onSubmitHandler} >
                            
                            {config.name.map( (item, index) => (
                                <TextInputs key={index} inputid={item} iconname={config.icon[index]}  inputtype={config.type[index]} labelname={item} changed={(event) =>  this.inputHandler(event, item) } />
                            ) )}
                           
                            <div align='center' >
                                <Button action='submit' btncolour='indigo' btnname='Login'  iconname='send'  />
                            </div>
                                <div>
                                    <p className={classes.register}>New here?, Please Register here <NavLink style={{color: 'indigo'}} className='waves-effect' to='/register' > <u>Register</u></NavLink></p> 
                                </div>
                        </form>
                    </div>
            </Aux>
        );

        if( this.props.loading){
            form = <Preloader />
        }
        if( this.props.toBeRedirected ){
            return <Redirect to='/files_converted' />
        }
        return (
            <Aux>
                <div className='container' style={{paddingTop: '50px', minHeight:'100vh'}}> <br></br>
                    {/* <div align='center '>
                    <ImageUi width ='300' imagName={Img1} /> <br /> <br />
                    </div> */}
                    <Aux>
                        {form}
                    </Aux>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.auth.authMsg,
        error: state.auth.error,
        token: state.auth.token,
        loading: state.auth.loading,
        toBeRedirected: state.auth.toBeRedirected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (username, password) => { dispatch(signIn(username, password)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);