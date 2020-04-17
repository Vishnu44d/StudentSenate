import React, { Component } from 'react';
import TheBody from './../TheBody';


import getBosyData from './../../_services/data_service/body_data';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            "bodyType": "",
            "loading": false,
            "body":null
        }
    }
    componentDidMount(){
        let name = this.props.history.location.pathname.split("/")
        name = name[2]
        console.log(name);
        this.setState({bodyType: name}, ()=>{
            this.setState({loading:true}, ()=>{
                this.setState({body: getBosyData(this.state.bodyType)}, ()=>{
                    this.setState({loading: false});
                })
            })
        })
    }
    componentDidUpdate(prevProps) {

        if (this.props.location !== prevProps.location) {
          this.onRouteChanged();
        }
      }
    
      onRouteChanged() {
        let name = this.props.history.location.pathname.split("/")
        name = name[2]
        console.log(name);
        this.setState({bodyType: name}, ()=>{
            this.setState({loading:true}, ()=>{
                this.setState({body: getBosyData(this.state.bodyType)}, ()=>{
                    this.setState({loading: false});
                })
            })
        })
      }
    render() {
        if(this.state.loading===true){
            return (
                <h1>Loading ...</h1>
            )
        }
        if(this.state.body===null){
            return (
                <h2>Loading ...</h2>
            )
        }
        return (
            <div>
                <TheBody members={this.state.body}/>
            </div>
        )
    }
}
