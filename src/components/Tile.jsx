/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Tile.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:09:02 by vishnu            #+#    #+#             */
/*   Updated: 2020/01/20 12:43:03 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react'

export default class Tile extends Component {
    render() {
        return (
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <div className="col s2">
                        
                    <img src={this.props.data.image} alt="" className="circle" width="100px" height="100px"/>
                    </div>
                    <div className="col s2"/>
                    <div className="col s8">
                    <span className="black-text" >
                        {this.props.data.title}
                    </span><br/>
                    <ul>
                        <li>
                            <span className="black-text">
                                <blockquote>{this.props.data.name}</blockquote>
                            
                            </span>
                        </li>
                        <li>
                            <span className="black-text">
                                <blockquote><i class="tiny material-icons">email</i> &nbsp; {this.props.data.Email}</blockquote>
                            
                            </span>
                        </li>
                        <li>
                            <span className="black-text">
                                <blockquote ><i class="tiny material-icons">phone_iphone</i> &nbsp; {this.props.data.Contact}</blockquote>
                            
                            </span>
                        </li>
                    </ul>
                    
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

