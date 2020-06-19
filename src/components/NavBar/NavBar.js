import React , { Component} from 'react';
import Aux from '../../hoc/Auxillary';
import NavUrl from './NavUrl/NavUrl';
import M from 'materialize-css';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component  {
    componentDidMount(){
        console.log(this.props)
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems);
            return instances
          });
    }
    render(){

        let navConfigs = {
            links: ['/', '/login', '/register' ],
            name: ['Home', 'Login', 'Register' ]
        }


        if( this.props.token){
            navConfigs = {
                links: ['/',  '/files_converted', '/convert', '/logout'],
                name: ['Home', 'Files Converted', 'Convert', 'Logout' ]
            }
        }

        return (
            <Aux>

            <nav>
                <div className="nav-wrapper  indigo lighten-1">
                    <NavLink to="#" className="brand-logo">Convertor</NavLink>
                    <NavLink to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
                        <ul className="right hide-on-med-and-down">
                            { navConfigs.links.map( (item, index) => (
                                <NavUrl key={index} link={item} navname={navConfigs.name[index]} />   
                            ))}
                        </ul>
                </div>
            </nav>

           
            <ul className="sidenav sidenav-close" id="mobile-demo">
                { navConfigs.links.map( (item, index) => (
                    <NavUrl key={index} link={item} navname={navConfigs.name[index]} />
                ))}
            </ul>  
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(withRouter(Navbar)); 


