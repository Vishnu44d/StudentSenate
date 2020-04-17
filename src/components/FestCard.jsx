import React, { Component } from 'react';
import LitSoc from './../contents/img/LitSoc.jpg';
import { connect } from 'react-redux';
import { changeSelected } from '../actions';
import { Link } from 'react-router-dom';

class FestCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <Link to={`/Fests/${this.props.data.name}`} >
                            <img className="activator responsive-img" src={LitSoc}/>
                        </Link>
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        <Link to={`/Fests/${this.props.data.name}`} >
                        {this.props.data.name.toUpperCase()}<i className="material-icons right" onClick={() => this.props.loadComp(this.props.data.name)}>send</i>
                        </Link>
                    </span>
                    </div>
                    
                </div>
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
  )(FestCard);
