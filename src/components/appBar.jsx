/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   appBar.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:08:10 by vishnu            #+#    #+#             */
/*   Updated: 2020/04/17 13:22:51 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component, Fragment } from 'react';
import M from 'materialize-css';
import options from 'materialize-css';
import navItems from '../contents/Nav';
import { connect } from 'react-redux';
import { changeSelected } from '../actions';
import colors from './../theme';
import {Logo} from './../contents/img/index';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var sidenav = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(sidenav, options);
            var dropdown = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(dropdown, options);

          });
        
      }
    componentDidUpdate(){
        document.addEventListener('DOMContentLoaded', function() {
            var sidenav = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(sidenav, options);
            var dropdown = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(dropdown, options);


          });
    }
    
    render() {
        return (
            <div>
                <div className={"navbar-fixed"}>
                <nav className={colors.primary} >
                    <div className="nav-wrapper container">
                    <a href="/" className="brand-logo"><img height="50px" style={{margin:"5px"}}  src={Logo}/></a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {
                            navItems.map((item, index)=>{
                                if(item.child == null){
                                    return <li key={index} ><Link to={`/${item.link}`}>{item.title}</Link></li>
                                }
                                else{
                                    return(
                                        <Fragment key={index}>
                                            <li key={index} ><a className="dropdown-trigger" data-target={item.title+"a"}>{item.title}</a></li>
                                            <ul id={item.title+"a"} className='dropdown-content'>
                                                {
                                                    item.child.map((data, index)=>{
                                                        return <li key={index}><Link to={`/${item.link}/${data.title}`}>{data.title}</Link></li>
                                                    })
                                                }
                                                
                                            </ul>
                                        </Fragment>
                                    )
                                }
                                
                            })
                        }
                    </ul>
                    </div>
                </nav>
                </div>

                <ul className="sidenav" id="mobile-demo">
                    {
                        navItems.map((item, index)=>{
                            if(item.child == null){
                                return <li key={index} ><Link to={`/${item.link}`}>{item.title}</Link></li>
                            }
                            else{
                                return(
                                    <Fragment key={index}>
                                        <li key={index} ><a className="dropdown-trigger" data-target={item.title}>{item.title}</a></li>
                                        <ul id={item.title} className='dropdown-content'>
                                            {
                                                item.child.map((data, index)=>{
                                                    return <li key={index}><Link to={`/${item.link}/${data.title}`}>{data.title.substr(0,30)}&nbsp;
                                                    {
                                                        data.title.substr(0,30)===data.title?null:".."
                                                    }
                                                    </Link></li>
                                                })
                                            }
                                            
                                        </ul>
                                    </Fragment>
                                )
                            }
                            
                        })
                    }
                </ul>
            </div>
            
        )
    }
}

const mapStateToProps = ({selectedComp }) => ({
    selectedComp,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    loadComp: (cmp) => dispatch(changeSelected(cmp)),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar);
