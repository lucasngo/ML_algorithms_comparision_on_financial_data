import React,{Component, useReducer, useState } from 'react';
import { render } from 'react-dom';
import cookie from 'react-cookies'
import 'whatwg-fetch'
import {Link} from 'react-router-dom'

export default class App2 extends Component{
    constructor(props){
        super(props)
        this.state= {
            algo_1: '',
            algo_2: '',
            metric: '',
            algo1_page:'',
            algo2_page:''
          };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handle_algo_1=this.handle_algo_1.bind(this)
        this.handle_algo_2=this.handle_algo_2.bind(this)
    }
    createPost(data){
            const endpoint = 'post/' 
            const csrfToken = cookie.load('csrftoken')
            let thisComp = this
            if (csrfToken !== undefined) {
                let lookupOptions = {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken
                    },
                    body: JSON.stringify(data),
                    credentials: 'include'
                }
      
                fetch(endpoint, lookupOptions)
                .then(function(response){
                    return response.json()
                }).then(function(responseData){
                    console.log(responseData)
                    if (thisComp.props.newPostItemCreated){
                        thisComp.props.newPostItemCreated(responseData)
                    }
                    thisComp.clearForm()
                }).catch(function(error){
                    console.log("error", error)
                    alert("An error occured, please try again later.")
                })
            } 
          }

    handleSubmit(event){
        event.preventDefault()
        this.createPost(this.state)
    }

    handleChange(event){
        // this.setState({name:event.name,
        // value:event.value})
        this.setState({...this.state,[event.target.name]:event.target.value})
        console.log(this.state)
        
        // {...this.state,[event.name]:event.value}
    }

    handle_algo_1(event){
        
        if (this.state.algo_1 === 'Linear Regression') {
            this.setState({...this.state,
                algo1_page:
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
            
            })   
        }else if (this.state.algo_1 === 'ARIMA' ) {
            this.setState({...this.state,
                algo1_page:
                <fieldset id = "ARIMA" className = "hidden">
                    <label>
                    <p><em>ARIMA Hyperparameters</em></p>
                    <p>p value</p>
                    <input name="ARIMA_hyper_1" onChange={this.handleChange}  />
                    <p>d value</p>
                    <input name="ARIMA_hyper_2" onChange={this.handleChange}  />
                    <p>q value</p>
                    <input name="ARIMA_hyper_3" onChange={this.handleChange}  />
                    </label>
                </fieldset>
            
            })   
            
        }else if (this.state.algo_1 === 'K Nearest Neigbhours' ) {
            this.setState({...this.state,
                algo1_page:
                <fieldset id = "KNN" className = "hidden">
                    <label>
                    <p><em>KNN Hyperparameters</em></p>
                    <p>p value</p>
                    <select name="KNN_hyper_1" onChange={this.handleChange} >
                        <option value="">--Please choose a p value--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <p>Weights</p>
                    <input name="KNN_hyper_2" onChange={this.handleChange}  />
                    <p>Number of Neighbours</p>
                    <input name="KNN_hyper_3" onChange={this.handleChange}  />
                    </label>
                </fieldset>
            
            });
        }else if (this.state.algo_1 === 'Support Vector Machines' ) {
            this.setState({...this.state,
                algo1_page:
                <fieldset id = "SVR" className = "hidden">
                <label>
                <p><em>SVR Hyperparameters</em></p>
                <p>Kernel</p>
                <select name="SVR_hyper_1" onChange={this.handleChange} >
                    <option value="">--Please choose a kernel value--</option>
                    <option value="linear">Linear</option>
                    <option value="poly">Poly</option>
                    <option value="rbf">RBF</option>
                    <option value="sigmoid">Sigmoid</option>
                    <option value="precomputed">Precomputed</option>
                </select>
                <p>C value</p>
                <input name="SVR_hyper_2" onChange={this.handleChange}  />
                <p>Epsilon</p>
                <input name="SVR_hyper_3" onChange={this.handleChange}  />
                </label>
            </fieldset>
            });
        }else if (this.state.algo_1 === 'XGBoost' ) {
            this.setState({...this.state,
                algo1_page:
                <fieldset id = "XGB" className = "hidden">
                    <label>
                    <p><em>XGBoost Hyperparameters</em></p>
                    <p>Maximum Depth</p>
                    <input name="XGB_hyper_1" onChange={this.handleChange}  />
                    <p>Learning Rate</p>
                    <input name="XGB_hyper_2" onChange={this.handleChange}  />
                    <p>Minimum Child Weight</p>
                    <input name="XGB_hyper_3" onChange={this.handleChange}  />
                    </label>
                </fieldset>
            });
        }
        
      }
      
      handle_algo_2(event){
        if (this.state.algo_2 === 'Linear Regression') {
            this.setState({...this.state,
                algo2_page:
                <fieldset id = "LR" className = "hidden">
                    <label>
                        <p><em>Linear Regression Hyperparameters</em></p>
                        <p>fit intercept</p>
                        <select name="LR_hyper_1" onChange={this.handleChange} >
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
            });
        }else if (this.state.algo_2 === 'ARIMA' ) {
            this.setState({...this.state,
                algo2_page:
                <fieldset id = "ARIMA" className = "hidden">
                <label>
                <p><em>ARIMA Hyperparameters</em></p>
                <p>p value</p>
                <input name="ARIMA_hyper_1" onChange={this.handleChange}  />
                <p>d value</p>
                <input name="ARIMA_hyper_2" onChange={this.handleChange}  />
                <p>q value</p>
                <input name="ARIMA_hyper_3" onChange={this.handleChange}  />
                </label>
            </fieldset>
            });
            
        }else if (this.state.algo_2 === 'K Nearest Neigbhours' ) {
            this.setState({...this.state,
                algo2_page:
                <fieldset id = "KNN" className = "hidden">
                    <label>
                    <p><em>KNN Hyperparameters</em></p>
                    <p>p value</p>
                    <select name="KNN_hyper_1" onChange={this.handleChange} >
                        <option value="">--Please choose a p value--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <p>Weights</p>
                    <input name="KNN_hyper_2" onChange={this.handleChange}  />
                    <p>Number of Neighbours</p>
                    <input name="KNN_hyper_3" onChange={this.handleChange}  />
                    </label>
                </fieldset>
            });
        }else if (this.state.algo_2 === 'Support Vector Machines' ) {
            this.setState({...this.state,
                algo2_page:
                <fieldset id = "SVR" className = "hidden">
                    <label>
                    <p><em>SVR Hyperparameters</em></p>
                    <p>Kernel</p>
                    <select name="SVR_hyper_1" onChange={this.handleChange} >
                        <option value="">--Please choose a kernel value--</option>
                        <option value="linear">Linear</option>
                        <option value="poly">Poly</option>
                        <option value="rbf">RBF</option>
                        <option value="sigmoid">Sigmoid</option>
                        <option value="precomputed">Precomputed</option>
                    </select>
                    <p>C value</p>
                    <input name="SVR_hyper_2" onChange={this.handleChange}  />
                    <p>Epsilon</p>
                    <input name="SVR_hyper_3" onChange={this.handleChange}  />
                    </label>
                </fieldset>
            });
            
        }else if (this.state.algo_2 === 'XGBoost' ) {
            this.setState({...this.state,
                algo2_page:
                <fieldset id = "XGB" className = "hidden">
                    <label>
                    <p><em>XGBoost Hyperparameters</em></p>
                    <p>Maximum Depth</p>
                    <input name="XGB_hyper_1" onChange={this.handleChange}  />
                    <p>Learning Rate</p>
                    <input name="XGB_hyper_2" onChange={this.handleChange}  />
                    <p>Minimum Child Weight</p>
                    <input name="XGB_hyper_3" onChange={this.handleChange}  />
                    </label>
                </fieldset>
            });
            
        }
      }

      render(){
        return (
            <div>
              <h1>Algorithm Comparison</h1>
              <Link maintainScrollPosition={false} to={{
                      pathname:`portfolio`,
                      state: { fromDashboard: false }

                      }}>Submit</Link>
              
               <div>
                 <p>You are submitting the following:</p>
                 <ul>
                   {Object.entries(this.state).map(([name, value]) => (
                     <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                   ))}
                 </ul>
                
        
                 <form onSubmit={this.handleSubmit}>
        
                    <fieldset>
                      <label>
                        <p>Metric</p>
                        <select name="metric" onChange={this.handleChange} value={this.state.metric || ''}>
                          <option value="">--Please choose a metric--</option>
                          <option value="RMSE">Root Mean Squared Error (RMSE)</option>
                          <option value="MAPE">Mean Absolute Percent Error (MAPE)</option>
                        </select>
                      </label>
                    </fieldset>
        
                    <fieldset>
                      <label>
                        <p>Algorithm 1</p>
                        <select name="algo_1" onClick={this.handle_algo_1} onChange={this.handleChange} value={this.state.algo_1 || ''}>
                          <option value="">--Please choose an algorithm--</option>
                          <option id="LR" >Linear Regression</option>
                          <option id="ARIMA">ARIMA</option>
                          <option id="KNN">K Nearest Neigbhours</option>
                          <option id="SVR">Support Vector Machines</option>
                          <option id="XGB">XGBoost</option>
                        </select>
                      </label>
                    </fieldset>
                    <div id='algo1_page'>{this.state.algo1_page}</div>
        
        
                    <fieldset>
                      <label>
                        <p>Algorithm 2</p>
                        <select name="algo_2" onClick={this.handle_algo_2} onChange={this.handleChange} value={this.state.algo_2 || ''}>
                          <option value="">--Please choose an algorithm--</option>
                          <option id="LR">Linear Regression</option>
                          <option id="ARIMA">ARIMA</option>
                          <option id="KNN">K Nearest Neigbhours</option>
                          <option id="SVR">Support Vector Machines</option>
                          <option id="XGB">XGBoost</option>
                        </select>
                      </label>
                    </fieldset>
                    <div id='algo2_page'>{this.state.algo2_page}</div>
        
                    {/* <p>{Object.entries(this.state).map(([name, value]) => (
                        <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                      ))}</p> */}
                    <button onClick={this.handleSubmit}>Submit</button>
                    
        
              </form>  
            </div>
             
             
        
            </div>
        
          );
      }
    }

