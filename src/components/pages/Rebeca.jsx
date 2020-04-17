import React, { Component } from 'react';
import ClubPage from './../ClubPage';
import RebecaData from './../../contents/Rebeca';


export default class Rebeca extends Component {
    render() {
        return (
            <div>
                <ClubPage data={RebecaData}/>
            </div>
        )
    }
}
