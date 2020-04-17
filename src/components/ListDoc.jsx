/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ListDoc.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/01/07 23:03:53 by vishnu            #+#    #+#             */
/*   Updated: 2020/04/17 13:44:10 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react';
import M from 'materialize-css';
import options from 'materialize-css';

export default class ListDoc extends Component {
    constructor(props)
    {
        super(props)
    }
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, options);
          });
    }
    render() {
        return (
            <div className="container">
                <h4>{this.props.documents.name}</h4>
                <ul className="collection with-header collapsible">
                    {
                        this.props.documents.data.map((item, index)=>{
                            return(
                                <li className="collection-item" key={index}><div>{item.title}<a href={item.link} className="secondary-content" download><i className="material-icons">get_app</i></a></div></li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}
