import React, { Component } from 'react'
// import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';




export default class CardsTile extends Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false,
            loading: false
        }
        this.handleExpand = this.handleExpand.bind(this);
    }
    handleExpand(e){
        e.preventDefault();
        this.setState({loading:true}, ()=>{
            this.setState({expanded: !this.state.expanded}, ()=>{
                this.setState({loading:false})
            })
        })
    }
    render() {
        if(this.state.loading){
            return <h1>Loading ...</h1>
        }
        return (
            <List>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar src={this.props.data.image} />
                    </ListItemAvatar>
                    {/* {this.props.data.title} */}
                    <ListItemText
                        primary={
                            this.state.expanded?
                                <React.Fragment>
                                    {this.props.data.name}
                                    <span style={{fontSize: "12px", color:"#0f0f0f"}}>
                                        &nbsp;({

                                            this.props.data.title
                                        } 
                                        <span onClick={this.handleExpand}>&nbsp; [x] </span>)
                                    </span>
                                </React.Fragment>
                            :
                                <React.Fragment>
                                    {this.props.data.name}
                                    <span style={{fontSize: "12px", color:"#0f0f0f"}}>
                                        &nbsp;({

                                            this.props.data.title.substr(0, 10)
                                        } 
                                        <span onClick={this.handleExpand}> &nbsp; ... </span>)
                                    </span>
                                </React.Fragment>
                            
                        }
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                // className={classes.inline}
                                color="textPrimary"
                            >
                                <i className="tiny material-icons">email</i> &nbsp; {this.props.data.Email} <br/>
                                <i className="tiny material-icons">phone_iphone</i> &nbsp; {this.props.data.Contact}
                            </Typography>
                            
                            </React.Fragment>
                        }                   
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            
                    
            </List>
        )
    }
}
