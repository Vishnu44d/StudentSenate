/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Footer.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:08:34 by vishnu            #+#    #+#             */
/*   Updated: 2020/04/17 10:26:00 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import colors from './../theme';
import {Logo, iiest_logo, facebook_icon} from './../contents/img/index';

export default class Footer extends Component {
    render() {
        return (
            <div style={{paddingTop:"30px"}}>
            <footer className={colors.primary+" page-footer"}>
                <div className="container">
                    <div className="row">
                    <div className="col l6 s12 center-align">
                        <h5 className="white-text"><img height="10px" className="responsive-img" src={Logo}/></h5>
                        <p className="grey-text text-lighten-4">Reach Us </p>
                        <ul>
                            <li>
                                P.O. - Botanic Garden, 
                            </li>
                            <li>
                                Howrah, West Bengal 711103
                            </li>
                        </ul>
                    </div>
                    <div className="col l4 offset-l2 s12 center-align">
                        <ul>
                        <li><a className="grey-text text-lighten-3" href="https://www.iiests.ac.in/" target="_blank"><img height="150px" src={iiest_logo}/></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                    © 2020 Students' Senate, IIEST Shibpur
                    <a className="grey-text text-lighten-4 right" href="https://www.facebook.com/iieststudentsenate/" target="_blank"><img height="20px" style={{ filter:"invert(0.9)"}} src={facebook_icon}/></a>
                    </div>
                </div>
            </footer>
            </div>
        )
    }
}
