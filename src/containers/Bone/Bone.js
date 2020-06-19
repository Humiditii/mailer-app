import React from 'react';
import Aux from '../../hoc/Auxillary';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/NavBar/Footer/Footer';
import classes from './Bone.module.css';
const Bone = (props) => {
    return (
        <Aux>
          <NavBar />
          {/*Application navigation goes here*/}

          {props.children}  

          {/*Application footer  goes here*/}
          <Footer className = {classes.footer}  />
        </Aux>
    );
} 

export default Bone;