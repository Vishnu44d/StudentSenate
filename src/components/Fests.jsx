/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Fests.jsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/01/07 23:14:46 by vishnu            #+#    #+#             */
/*   Updated: 2020/04/17 13:33:20 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import FestCard from './FestCard';
import {Typography, Grid, Container } from '@material-ui/core';

import {RebData, InstData} from './../contents/Fests';

export default class Fests extends Component {

    
    render() {
        return (
            <div className="container">
                <Grid container spacing={3}>
                    <Grid item s={12} lg={12} md={12} xl={12}>
                        <Typography variant='h2' align="center">
                            
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} xl={6}>
                        <FestCard data={InstData}/>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} xl={6}>
                        <FestCard data={RebData}/>  
                    </Grid>
                </Grid> 
            </div>
        )
    }
}
