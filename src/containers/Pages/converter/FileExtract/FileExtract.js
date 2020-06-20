import React, {Component} from 'react';
import Aux from '../../../../hoc/Auxillary';
import {checkAuthState} from '../../../../store/actions/auth';
import {conversionProcess} from '../../../../store/actions/convert';
import {connect} from 'react-redux';
import Button from '../../../../components/Ui/Button/Button';
import classes from './fileExtract.module.css';
import Preloader from '../../../../components/Ui/Preloader/Preloader';
import { Redirect } from 'react-router-dom';

class FileExtract extends Component {

    state = {
        selectedFile: null
    }

    componentDidMount(){
        this.props.onAutoSignIn()
    }
    // constructor(props) {
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.fileInput = React.createRef();
    //   }
      onFileChange = (event) => {
          this.setState({selectedFile: event.target.files[0]})
      }
      
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.onUploadFile(this.props.token, this.state.selectedFile)
        //console.log(this.state.selectedFile);
      }

    render(){
        let form = (
            <div className={classes.extract} >
                    <h5>Upload A XML File To Convert</h5><br/><br/><br/>
                    <div className='container'>
                            <form onSubmit={this.handleSubmit}>
                                <div className="file-field input-field">
                                <div className="btn indigo">
                                    <span>File</span>
                                    <input type="file" onChange={this.onFileChange}  />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" />
                                </div>
                                </div>
                                <div align='center' >
                                     <Button action='submit' btncolour='indigo' btnname='Extract'  iconname='send'  />
                                </div>
                            </form>
                    </div>
                    {this.props.fileContent.map( (item, index) => (
                        <p align='center' key={index}>{item}</p>
                    ) )}
                </div>
        );

        if(this.props.loading){
            form = <Preloader />
        }

        if(!this.props.token){
            return <Redirect to='login' />
        }

        return(
            <Aux>
                <div style={{minHeight:'100vh'}}>
                    {form}
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        fileContent:[...state.convert.filecontent],
        loading: state.convert.loading
    }
}

const mapPropsToState = dispatch => {
    return {
        onUploadFile: (token, fileToConvert) => {dispatch (conversionProcess(token, fileToConvert )) },
        onAutoSignIn: () => { dispatch(checkAuthState()) }
    }
}


export default connect(mapStateToProps, mapPropsToState)(FileExtract);