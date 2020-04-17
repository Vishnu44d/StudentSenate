/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   HeroSlider.jsx                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:08:45 by vishnu            #+#    #+#             */
/*   Updated: 2020/01/07 22:54:21 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import M from 'materialize-css';
import options from 'materialize-css';
import slide from './../contents/HeroSlider';

export default class HeroSlider extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, options);
          });
    }
    componentDidUpdate(){
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, options);
    }
    render() {
        return (
            <div className="slider">
                <ul className="slides">
                    {
                        slide.map((item, index)=>{
                            return (
                                <li key={index}>
                                    <img src={item.image}/> 
                                    <div className="caption center-align">
                                    <h3>{item.title}</h3>
                                    <h5 className="light grey-text text-lighten-3">{item.subtitle}</h5>
                                    </div>
                                </li>  
                            );
                        })
                    }                
                </ul>
            </div>
        )
    }
}
