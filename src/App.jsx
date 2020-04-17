/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:06:45 by vishnu            #+#    #+#             */
/*   Updated: 2020/04/17 13:42:59 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component, Fragment } from 'react';
import NavBar from './components/appBar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Fests from './components/Fests';
import Body from './components/pages/Body';
import Academics from './components/pages/Academics';
import Instruo from './components/pages/Instruo';
import Rebeca from './components/pages/Rebeca';
import Document from './components/pages/Document';

import {BrowserRouter, Route} from 'react-router-dom';



import { connect } from 'react-redux';
import { changeSelected } from './actions';

class App extends Component {
  
  render(){
    return (
      <Fragment>
        
        <BrowserRouter > 
          <Route path="*" component={NavBar}></Route> 
          <Route exact path="/" component={Home}></Route>
          <Route path="/Body" component={Body}></Route>
          <Route path="/Academics" component={Academics}></Route>
          <Route path="/Culturals" component={Academics}></Route>
          <Route exact path="/Fests" component={Fests}></Route>
          <Route exact path="/Fests/Instruo" component={Instruo}></Route>
          <Route exact path="/Fests/Rebeca" component={Rebeca}></Route>
          <Route path="/Documents" component={Document}></Route>
        </BrowserRouter>
        <Footer/>
      </Fragment>
    );
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
)(App);
