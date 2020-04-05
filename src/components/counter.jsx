import React, { Component } from 'react';
import {getArrays} from './arrays'
class Counter extends Component {
    state = { 
        arrays:getArrays(),
        count:0,
        
     }
     handleIncrement=(arrs)=>{
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        })); 
        
     }
     handleDecrement=()=>{
        this.setState({count:this.state.count-1})
        
    }
    handleDelete=(id)=>{
        const delId=this.state.arrays.filter(ids=>ids.id!==id)
        this.setState({arrays:delId})
    }
    render() { 
        
        return ( 
           
            <div>
                {this.state.arrays.map(arrs=>(
                <div>
                    
                    <span>{arrs.counts}</span>
                    <span className={this.badgeClass()}>{this.formatCount()}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success" onClick={()=>this.handleIncrement(arrs)}>Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={this.handleDecrement}>Decrement</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>this.handleDelete(arrs.id)} className="btn btn-danger">Delete</button>
                    <br/>
                    <br/>
                </div>
                ))}
                <hr/>
                <span>Total:</span>
                
            </div>
         );
    }
    badgeClass(){
        let classes='badge badge-';
        classes +=(this.state.count==0)?'warning':'primary';
        return classes;
    }
    formatCount(){
        let countName=this.state.count;
        if(countName==0)
        countName='zero';
        return countName;
    }
}
 
export default Counter;