/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   About.jsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:08:03 by vishnu            #+#    #+#             */
/*   Updated: 2020/01/08 10:33:18 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component, Fragment} from 'react';
import about from './../contents/About';

export default class About extends Component {
    render() {
        return (
            <Fragment>
                <h2 className="center-align">About</h2>
                {
                    about.map((item, index)=>{
                        return(
                            <p key={index}>{item}</p>
                        )
                    })
                }
                
            </Fragment>     
        )
    }
}
