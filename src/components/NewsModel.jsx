/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NewsModel.jsx                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:08:51 by vishnu            #+#    #+#             */
/*   Updated: 2019/12/31 11:08:51 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react'

export default class NewsModel extends Component {
    render() {
        return (
            <div id="modal1" class="modal">
                <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        )
    }
}
