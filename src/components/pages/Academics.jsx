import React, { Component } from 'react'
import getClubData from './../../_services/data_service/club_data';
import ClubPage from './../ClubPage';

export default class Academics extends Component {
    constructor(props){
        super(props);
        this.state = {
            "academicType": "",
            "loading": false,
            "academic": null
        }
    }
    componentDidMount(){
        let name = this.props.history.location.pathname.split("/")
        name = name[2]
        // console.log(name);
        let data = getClubData(name);
        // console.log(data);
        this.setState({academicType: name}, ()=>{
            this.setState({loading:true}, ()=>{
                this.setState({academic: data}, ()=>{
                    // console.log(this.state.academic);
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
        // console.log(name);
        let data = getClubData(name);
        // console.log(data);
        this.setState({academicType: name}, ()=>{
            this.setState({loading:true}, ()=>{
                this.setState({academic: data}, ()=>{
                    // console.log(this.state.academic);
                    this.setState({loading: false});
                })
            })
        })
    }

    render() {
        if(this.state.loading===true){
            return <h5>Loading ..</h5>
        }
        else if(this.state.academic === null){
            return <h5>Loading null ..</h5>
        }
        else{
            // const data = getClubData(this.state.academicType);
            // console.log(this.state.academicType);
            return (

                <div>
                    <ClubPage data={this.state.academic}/>
                </div>
            )
        }
        
    }
}
