import React, { Component } from 'react';
import ClubPage from './../ClubPage';
import InstruoData from './../../contents/Instruo';

export default class Instruo extends Component {
    render() {
        return (
            <div>
                <ClubPage data={InstruoData}/>
            </div>
        )
    }
}
