import React, { Component } from 'react';
import Counters from './counters'
import {getArrays} from './arrays'
// import Total from './total'
class Counter extends Component {
    
    
     
    
    render() { 
        //console.log({this.state.id});
        return ( 
           
            <div>
                
                <div>
                    
                    {/* <span>{this..id}</span> */}
                    {/* <Total values={this.state.count}/> */}
                    <span className={this.badgeClass()}>{this.formatCount()}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success" onClick={this.props.onDecrement}>Decrement</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={this.props.onIncrement}>Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={this.props.onDelete}>Delete</button>
                    <br/>
                    <br/>
                </div>
                
                <hr/>
                {/* <span>Total:</span> */}
                
            </div>
         );
    }
    badgeClass(){
        let classes='badge badge-';
        classes +=(this.props.value==0)?'warning':'primary';
        return classes;
    }
    formatCount(){
        let countName=this.props.value;
        if(countName==0)
        countName='zero';
        return countName;
    }
}
 
export default Counter;