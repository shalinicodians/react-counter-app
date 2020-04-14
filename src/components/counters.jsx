import React, { Component } from 'react';
import {getArrays} from './arrays';
import Counter from './counter'
//import Total from './total';
class Counters extends Component {
    
    render() { 
        return (  
            <div>
                <div className="btn btn-primary btn-sm" onClick={this.props.onReset}>Reset</div>
        {/* <span>{this.props.total}</span> */}
                {this.props.counters.map(arr=>(
                <Counter key={arr.id}
                 onDelete={()=>this.props.onDelete(arr.id,arr.counts)} 
                 onIncrement={()=>this.props.onIncrement(arr)}
                 onDecrement={()=>this.props.onDecrement(arr)}
                 value={arr.counts}
                 />
                ))}
            </div>
        );
    }
}
 
export default Counters;