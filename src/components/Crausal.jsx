/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Crausal.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:08:28 by vishnu            #+#    #+#             */
/*   Updated: 2020/01/07 22:53:50 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import M from 'materialize-css';
import options from 'materialize-css';
import news from '../contents/News';
import Cards from './Cards';

export default class Crausal extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, options);
          });
    }
    componentDidUpdate(){
        
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, options);
        
    }
    render() {
        return (
            <div>
            <h2 className="center-align">News</h2>
            <div className="carousel">
                {
                    news.map((item, index)=>{
                        return (
                            <a key={index} className="carousel-item" style={{width:"40vh"}} href="#one!" >
                                <Cards
                                title={item.title}
                                content={item.content}
                                />
                            </a>
                        )
                    })
                }
            </div>

            </div>
        )
    }
}
