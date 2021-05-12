// import React,{Component, useReducer, useState } from 'react';

// export default class Portfolio extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             content:''
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <p>{this.state.content}</p>
//                 <p>this is the second page</p>
//             </div>
            
//         )
        
//     }
// }

import React from 'react';
import PortfolioItems from './portfolio_items';
// import './Portfolio.css';
// import ButtonItem from './ButtonItem'


class Portfolio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
    }
  
    addItem(e) {
      if (this._inputElement.value !== "") {
          var capsElement = this._inputElement.value.toUpperCase()
        var newItem = {
          text: capsElement,
          key: Date.now()
        };
     
        this.setState((prevState) => {
          return { 
            items: prevState.items.concat(newItem) 
          };
        });
       
        this._inputElement.value = "";
      }
    
         
      e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
    

    render() {
      return (
        <div className="portfolioListMain">
          <div className="header">
            <h1>Portfolio</h1>
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a}  placeholder="enter task">
              </input>
              <button type="submit">add</button>
              {/* <button type='button'>Compare</button> */}
            </form>
        </div>
        <PortfolioItems entries={this.state.items} delete={this.deleteItem} />
      </div>
      );
    }
  }
  export default Portfolio;