import { makeStyles, Paper } from '@material-ui/core';
import React, { Component} from 'react';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './Registration.css'



export default function Registration(props: any) {


    return (
        <div className="reg-cont">
            <div className="reg-header"><span className="reg-header-title">Join Us</span></div>
                <RegistrationForm />
        </div>
    );
}

