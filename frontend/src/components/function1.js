import React,{Component, useReducer, useState } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';


const formReducer = (state, event) => {
  if(event.reset) {
    return {
      stock_ticker: '',
      time_period: '',
      algo_1: '',
      algo_2: '',
      metric: '',
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
 }

export default function App2(props) {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const forceUpdate=function useForceUpdate() {
    let [value, setState] = useState(true);
    return () => setState(!value);
  }
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  }
  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    })
    forceUpdate();
  }

  const handle_algo_1 = event => {
    if (formData.algo_1 === 'Linear Regression') {
        render (
        <fieldset id = "LR" className = "hidden">
            <label>
                <p><em>Linear Regression Hyperparameters</em></p>
                <p>fit intercept</p>
                <select name="LR_hyper_1" onChange={handleChange} >
                <option value="">--Please choose a fit intercept value--</option>
                <option value="True">True</option>
                <option value="False">False</option>
                </select>
                <p>y norm</p>
                <select name="LR_hyper_2" onChange={handleChange} >
                <option value="">--Please choose a y norm value--</option>
                <option value="True">True</option>
                <option value="False">False</option>
                </select>
            </label>
            </fieldset>
      );
    }else if (formData.algo_1 === 'ARIMA' ) {
      render (
        <fieldset id = "ARIMA" className = "hidden">
            <label>
            <p><em>ARIMA Hyperparameters</em></p>
            <p>p value</p>
            <input name="ARIMA_hyper_1" onChange={handleChange}  />
            <p>d value</p>
            <input name="ARIMA_hyper_2" onChange={handleChange}  />
            <p>q value</p>
            <input name="ARIMA_hyper_3" onChange={handleChange}  />
            </label>
        </fieldset>
      );
    }else if (formData.algo_1 === 'K Nearest Neigbhours' ) {
      render (
        <fieldset id = "KNN" className = "hidden">
            <label>
            <p><em>KNN Hyperparameters</em></p>
            <p>p value</p>
            <select name="KNN_hyper_1" onChange={handleChange} >
                <option value="">--Please choose a p value--</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <p>Weights</p>
            <input name="KNN_hyper_2" onChange={handleChange}  />
            <p>Number of Neighbours</p>
            <input name="KNN_hyper_3" onChange={handleChange}  />
            </label>
        </fieldset>
      );
    }else if (formData.algo_1 === 'Support Vector Machines' ) {
      render(
        <fieldset id = "SVR" className = "hidden">
            <label>
            <p><em>SVR Hyperparameters</em></p>
            <p>Kernel</p>
            <select name="SVR_hyper_1" onChange={handleChange} >
                <option value="">--Please choose a kernel value--</option>
                <option value="linear">Linear</option>
                <option value="poly">Poly</option>
                <option value="rbf">RBF</option>
                <option value="sigmoid">Sigmoid</option>
                <option value="precomputed">Precomputed</option>
            </select>
            <p>C value</p>
            <input name="SVR_hyper_2" onChange={handleChange}  />
            <p>Epsilon</p>
            <input name="SVR_hyper_3" onChange={handleChange}  />
            </label>
        </fieldset>
      );
    }else if (formData.algo_1 === 'XGBoost' ) {
      render (
        <fieldset id = "XGB" className = "hidden">
            <label>
            <p><em>XGBoost Hyperparameters</em></p>
            <p>Maximum Depth</p>
            <input name="XGB_hyper_1" onChange={handleChange}  />
            <p>Learning Rate</p>
            <input name="XGB_hyper_2" onChange={handleChange}  />
            <p>Minimum Child Weight</p>
            <input name="XGB_hyper_3" onChange={handleChange}  />
            </label>
        </fieldset>
      );
    }
  }

    const handle_algo_2 = event => {
      if (formData.algo_2 === 'Linear Regression') {
          console.log('i am here')
          document.getElementById('algo1_page').innerHTML=
          `
          <fieldset id = 'LR' className = 'hidden'>
              <label>
                  <p><em>Linear Regression Hyperparameters</em></p>
                  <p>fit intercept</p>
                  <select name='LR_hyper_1' onChange={handleChange} >
                  <option value=''>--Please choose a fit intercept value--</option>
                  <option value='True'>True</option>
                  <option value='False'>False</option>
                  </select>
                  <p>y norm</p>
                  <select name='LR_hyper_2' onChange={handleChange} >
                  <option value=''>--Please choose a y norm value--</option>
                  <option value='True'>True</option>
                  <option value='False'>False</option>
                  </select>
              </label>
              </fieldset>
          `
        ;
      }else if (formData.algo_2 === 'ARIMA' ) {
        console.log('i am here')
        ReactDOM.render(
          `
          <fieldset id = "ARIMA" className = "hidden">
              <label>
              <p><em>ARIMA Hyperparameters</em></p>
              <p>p value</p>
              <input name="ARIMA_hyper_1" onChange={handleChange}  />
              <p>d value</p>
              <input name="ARIMA_hyper_2" onChange={handleChange} />
              <p>q value</p>
              <input name="ARIMA_hyper_3" onChange={handleChange}  />
              </label>
          </fieldset>
          `,document.getElementById('algo2_page')
        );
      }else if (formData.algo_2 === 'K Nearest Neigbhours' ) {
        render (
          <fieldset id = "KNN" className = "hidden">
              <label>
              <p><em>KNN Hyperparameters</em></p>
              <p>p value</p>
              <select name="KNN_hyper_1" onChange={handleChange} >
                  <option value="">--Please choose a p value--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
              </select>
              <p>Weights</p>
              <input name="KNN_hyper_2" onChange={handleChange}  />
              <p>Number of Neighbours</p>
              <input name="KNN_hyper_3" onChange={handleChange}  />
              </label>
          </fieldset>
        );
      }else if (formData.algo_2 === 'Support Vector Machines' ) {
        render(
          <fieldset id = "SVR" className = "hidden">
              <label>
              <p><em>SVR Hyperparameters</em></p>
              <p>Kernel</p>
              <select name="SVR_hyper_1" onChange={handleChange} >
                  <option value="">--Please choose a kernel value--</option>
                  <option value="linear">Linear</option>
                  <option value="poly">Poly</option>
                  <option value="rbf">RBF</option>
                  <option value="sigmoid">Sigmoid</option>
                  <option value="precomputed">Precomputed</option>
              </select>
              <p>C value</p>
              <input name="SVR_hyper_2" onChange={handleChange}  />
              <p>Epsilon</p>
              <input name="SVR_hyper_3" onChange={handleChange}  />
              </label>
          </fieldset>
          
        );
      }else if (formData.algo_2 === 'XGBoost' ) {
        render (
          <fieldset id = "XGB" className = "hidden">
              <label>
              <p><em>XGBoost Hyperparameters</em></p>
              <p>Maximum Depth</p>
              <input name="XGB_hyper_1" onChange={handleChange}/>
              <p>Learning Rate</p>
              <input name="XGB_hyper_2" onChange={handleChange}  />
              <p>Minimum Child Weight</p>
              <input name="XGB_hyper_3" onChange={handleChange} />
              </label>
          </fieldset>
        );
      }
    }



  return (
    <div>
      <h1>Algorithm Comparison</h1>
      
       <div>
         <p>You are submitting the following:</p>
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
        

         <form onSubmit={handleSubmit}>

            <fieldset>
              <label>
                <p>Stock Ticker</p>
                <select name="stock_ticker" onChange={handleChange} value={formData.stock_ticker || ''}>
                  <option value="">--Please choose a stock ticker--</option>
                  <option value="FB">FB</option>
                  <option value="AMZN">AMZN</option>
                  <option value="AAPL">AAPL</option>
                  <option value="NFLX">NFLX</option>
                  <option value="GOOG">GOOG</option>
                  <option value="TSLA">TSLA</option>
                </select>
              </label>
            </fieldset>

            <fieldset>
              <label>
                <p>Time Period</p>
                <select name="time_period" onChange={handleChange} value={formData.time_period || ''}>
                  <option value="">--Please choose a time period--</option>
                  <option value="1">1 year</option>
                  <option value="3">3 years</option>
                  <option value="5">5 years</option>
                </select>
              </label>
            </fieldset>

            <fieldset>
              <label>
                <p>Metric</p>
                <select name="metric" onChange={handleChange} value={formData.metric || ''}>
                  <option value="">--Please choose a metric--</option>
                  <option value="RMSE">Root Mean Squared Error (RMSE)</option>
                  <option value="MAPE">Mean Absolute Percent Error (MAPE)</option>
                </select>
              </label>
            </fieldset>

            <fieldset>
              <label>
                <p>Algorithm 1</p>
                <select name="algo_1" onClick={handle_algo_1} onChange={handleChange} value={formData.algo_1 || ''}>
                  <option value="">--Please choose an algorithm--</option>
                  <option id="LR" >Linear Regression</option>
                  <option id="ARIMA">ARIMA</option>
                  <option id="KNN">K Nearest Neigbhours</option>
                  <option id="SVR">Support Vector Machines</option>
                  <option id="XGB">XGBoost</option>
                </select>
              </label>
            </fieldset>
            <div id='algo1_page'></div>


            <fieldset>
              <label>
                <p>Algorithm 2</p>
                <select name="algo_2" onClick={handle_algo_2} onChange={handleChange} value={formData.algo_2 || ''}>
                  <option value="">--Please choose an algorithm--</option>
                  <option id="LR">Linear Regression</option>
                  <option id="ARIMA">ARIMA</option>
                  <option id="KNN">K Nearest Neigbhours</option>
                  <option id="SVR">Support Vector Machines</option>
                  <option id="XGB">XGBoost</option>
                </select>
              </label>
            </fieldset>
            <div id='algo2_page'></div>

            <p>{Object.entries(formData).map(([name, value]) => (
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
              ))}</p>

            <button type="submit">Submit</button>

      </form>  
    </div>
     
     

    </div>

  );
        }


   
     

