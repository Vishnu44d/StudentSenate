/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ClubPage.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:08:21 by vishnu            #+#    #+#             */
/*   Updated: 2020/04/17 13:20:19 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component, Fragment } from 'react';
import {Typography, Grid, Container } from '@material-ui/core';

import {LitSocImage} from './../contents/img';

export default class ClubPage extends Component {
    render() {
        return (
            <Fragment>
            <Container>
                <Grid container spacing={3}>
                    <Grid item s={12} lg={12} md={12} xl={12}>
                        <Typography variant='h2' align="center">
                            {this.props.data.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} xl={6}>
                        <Typography align="justify">
                            {
                                this.props.data.content.map((item, index)=>{
                                    return <span key={index}>{item}<br/></span>
                                })
                                
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} xl={6}>
                        
                        <img src={LitSocImage} alt="Club Image" className="responsive-img"></img>
                        <div style={{minHeight:"10px"}}></div>
                        <br/>
                        <Typography variant='h5' align="left">
                            Contact:
                        </Typography>
                        <Typography variant='h6' align="left">
                            name: {this.props.data.contactname} <br/>
                            phone: {this.props.data.phone} <br/>
                            email: {this.props.data.email} <br/>
                        </Typography>
                    </Grid>
                </Grid> 
                
            </Container>
            <div style={{minHeight:"10px"}}></div> 
            </Fragment>
        )
    }
}
