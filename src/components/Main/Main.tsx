import React, { Component } from 'react';
import './Main.css'
import Views from '../Views/Views';

interface MainProps {
    history: any;
  }

export default function Main(props: MainProps) {
        return (
            <div className="spv-main">
                <Views history={props.history}/>
            </div>
        );
}