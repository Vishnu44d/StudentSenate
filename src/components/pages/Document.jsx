import React, { Component, Fragment } from 'react';
import docs from './../../contents/Document';
import ListDoc from './../ListDoc';

export default class Document extends Component {
    render() {
        return (
            <Fragment>
                {
                    docs.map((item, index)=>{
                        return(
                            <ListDoc documents={item} key={index}/>
                        );
                    })
                }
            </Fragment>
        )
    }
}
