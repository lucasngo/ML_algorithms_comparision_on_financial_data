import React,{Component, useReducer, useState } from 'react';

export default class Portfolio extends Component{
    constructor(props){
        super(props)
        this.state={
            content:''
        }
    }

    render(){
        return(
            <div>
                <p>{this.state.content}</p>
                <p>this is the second page</p>
            </div>
            
        )
        
    }
}