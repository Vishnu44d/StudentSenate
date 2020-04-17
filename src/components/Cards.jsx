/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cards.jsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:08:15 by vishnu            #+#    #+#             */
/*   Updated: 2019/12/31 11:08:16 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react'

export default class Cards extends Component {
    constructor(){
        super()
        this.handleModelOpen=this.handleModelOpen.bind(this)
    }
    handleModelOpen(e){
        console.log("View Button clicked", e.target.title)
    }

    render() {
        return (
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">{this.props.title}</span>
                <p>{this.props.content}</p>
                </div>
                <div className="card-action">
                <button className="waves-effect waves-light btn" title={this.props.title} onClick={this.handleModelOpen}>View Details</button>
                </div>
            </div>
        )
    }
}
