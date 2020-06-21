import React, {Component} from 'react';
import Aux from '../../../../hoc/Auxillary';
import {getFiles, getFIleprocess} from '../../../../store/actions/convert';
import { checkAuthState } from '../../../../store/actions/auth';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '../../../../components/Ui/Button/Button';

class ViewFiles extends Component {

    componentDidMount(){
        this.props.onAuthoSignIn();
        this.props.onGetFiles(this.props.token);
    }

    onClickHandler = (event) =>{
        event.preventDefault()
        alert('Hello')
    }

    inputHandler = (event, item ) => {
        event.preventDefault();
        this.props.onGetFile(this.props.token, item)
        
        // const updateFields = {
        //     ...this.state,
        //     [item]: event.target.value
        // }
        // this.setState(updateFields);
    }

    render(){
        let tables = (
                <div>
                   <h5 align='center' >List of files Converted</h5> <br/>
                   <p align='center'>Content appears here once the show bittom is clicked</p>
                   {this.props.singleFIle.map( (item, index) => (
                        <p align='center' key={index}>{item}</p>
                    ) )}
                    <div className='responsive-table'>
                        <table>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date(YYYY-MM-DD)</th>
                                    <th>View</th>
                                </tr>
                                </thead>

                                <tbody>
                                {/* <tr> */}
                                    {this.props.fileDetails.map( (item, index) => (
                                        <tr key={item._id} >
                                            <td>
                                                {item.file_name}
                                            </td>
                                            <td>
                                                {new Date().getFullYear(item.convert_date)+'-'+new Date().getMonth(item.convert_date)+'-'+new Date().getDate(item.convert_date) }
                                            </td>
                                            <td>
                                                <form onClick={(event) =>  this.inputHandler(event, item._id) } >
                                                   
                                                    <Button action='submit' btncolour='indigo' btnname='Show'  iconname='face'  />
                                                </form>
                                                
                                            </td>
                                        </tr>
                                    ))}
                                    {/* <td>Alvin</td>
                                    <td>Eclair</td>
                                    <td>Button</td>
                                </tr> */}
                                
                                </tbody>
                            </table>
                    </div>
                </div>
        );

        if(!this.props.token){
            return <Redirect to='/login' />
        }
        return (
            <Aux>
                <div style={{paddingTop: '50px', minHeight:'100vh', backgroundColor: '#282c34', color: 'white', alignItems: 'center', fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}} >
                    {tables}
                </div>
                
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        fileDetails: [...state.convert.fileDetails],
        singleFIle: [...state.convert.singleFIle]
    }
}

const mapPropsToState = dispatch => {
    return {
        onAuthoSignIn: () => { dispatch( checkAuthState() )},
        onGetFile: (token, id) => { dispatch( getFIleprocess(token, id)) },
        onGetFiles: (token) => { dispatch(getFiles(token)) }
    }
}

export default  connect(mapStateToProps, mapPropsToState)(ViewFiles);