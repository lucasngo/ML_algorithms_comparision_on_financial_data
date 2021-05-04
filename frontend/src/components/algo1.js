import React,{Component, useReducer, useState } from 'react';
import { render } from 'react-dom';

export default class algo1 extends Component{
    render(){
        return (
            <fieldset id = "LR" className = "hidden">
                <label>
                    <p><em>Linear Regression Hyperparameters</em></p>
                    <p>fit intercept</p>
                    <select name="LR_hyper_1" onChange={this.handleChange}  >
                    <option value="">--Please choose a fit intercept value--</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                    </select>
                    <p>y norm</p>
                    <select name="LR_hyper_2" onChange={this.handleChange} >
                    <option value="">--Please choose a y norm value--</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                    </select>
                </label>
            </fieldset>
            )
    }
}