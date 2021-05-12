import React, { Component } from "react";
import cookie from 'react-cookies'
import 'whatwg-fetch'
import {NavLink} from 'react-router-dom'
// import App2 from "./firstpage";
 
class PortfolioItems extends Component {
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
    createTasks(item) {
        return <li>
                    {item.text}
                    <button onClick={() => this.delete(item.key)} 
                    key={item.key}>Delete
                    </button>
                    <button>
                        <NavLink maintainScrollPosition={false} to={{
                        pathname:"compare/".concat(item.text),
                        state: { fromDashboard: false }

                        }}>Submit</NavLink>
                    </button>
                    
                    {/* <button to={"compare/".concat(item.text)} component={App2}>Compare</button> */}
                </li>
      }

    delete(key) {
        this.props.delete(key);
      }
 
  render() {
    var portfolioEntries = this.props.entries;
    var listItems = portfolioEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
          
      </ul>
    );
  }
};
 
export default PortfolioItems;