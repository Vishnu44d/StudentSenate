/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   TheBody.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:08:56 by vishnu            #+#    #+#             */
/*   Updated: 2020/04/17 11:11:52 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import Tile from './Tile';
import CardsTile from './cards/CardsTile';

export default class TheBody extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="container">
                {
                    this.props.members.map((item, index) => {
                        return (
                            
                            <CardsTile key={index} data={item}/>
                        )
                    })
                }
            </div>
        )
    }
}
