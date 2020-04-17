import React, { Component, Fragment } from 'react';
import HeroSlider from './../HeroSlider';
import {Grid} from '@material-ui/core';
import Crausal from './../Crausal';
import About from './../About';
import slide from './../../contents/HeroSlider';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <HeroSlider slide={slide}/>
                <div style={{marginLeft: "5%", marginRight: "5%"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6} md={6} xl={6}>
                        <Crausal/>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} xl={6}>
                        <About/>
                    </Grid>
                </Grid>
                </div>
            </Fragment>
        )
    }
}
