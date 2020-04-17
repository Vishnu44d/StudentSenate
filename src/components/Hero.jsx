/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Hero.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:08:40 by vishnu            #+#    #+#             */
/*   Updated: 2020/01/08 00:29:45 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component, Fragment } from 'react';
import Crausal from './Crausal';
import About from './About';
import {Grid} from '@material-ui/core';
import TheBody from './TheBody';
import HeroSlider from './HeroSlider';
import ClubPage from './ClubPage';
import slide from './../contents/HeroSlider';
import ExecMembers from '../contents/ExecBody';
import GeneralMembers from '../contents/GeneralBody';
import ListDoc from './ListDoc';
import Fests from './Fests';

import { connect } from 'react-redux';
import { changeSelected } from '../actions';


import {LitSocdata} from './../contents/societies';

import RebecaData from './../contents/Rebeca';
import InstruoData from './../contents/Instruo';
import docs from './../contents/Document';


class Hero extends Component {
    constructor(){
        super()
        
    }
    render() {
        var current_componet = this.props.selectedComp;
        switch(current_componet){
            case "Home":
                return(
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
                );
            
            case "LitSoc":
                return(
                    <Fragment>
                        <ClubPage data={LitSocdata}/>
                    </Fragment>
                )
            case "The Executive Secretariat":
                return(
                    <TheBody members={ExecMembers}/>
                );
            case "The General Council":
                return(
                    <TheBody members={GeneralMembers}/>
                );

            case "Ducumnets":
                return(
                    <Fragment>
                        {
                            docs.map((item, index)=>{
                                return(
                                    <ListDoc documents={item} key={index}/>
                                );
                            })
                        }
                    </Fragment>
                )
                
                
            case "Fests":
                return(
                    <Fests />
                )
            case "Rebeca":
                return(
                    <ClubPage data={RebecaData}/>
                )
            case "Instruo":
                    return(
                        <ClubPage data={InstruoData}/>
                    )
            default:
                    return(
                        <Fragment>
                            <HeroSlider/>
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
                    );
        }
    }
}

const mapStateToProps = ({selectedComp }) => ({
    selectedComp,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    loadComp: (cmp) => dispatch(changeSelected(cmp)),
  })
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Hero);
