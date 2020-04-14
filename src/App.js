import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'
import {getArrays} from './components/arrays';
import Navbar from './components/navbar';

class App extends Component {
  state = { 
    arrays:getArrays() ,
    total:0
  }
  handleDelete=(id,counts)=>{
     const counters=this.state.arrays.filter(c=>c.id!==id);
     this.setState({arrays:counters});
     
     this.setState({total:this.state.total-counts})

     //this.setState({arrays:this.state.arrays});
  }
  handleIncrement=(counters)=>{
     const counter=[...this.state.arrays];
     const index=counter.indexOf(counters);
     counter[index].counts++;
     this.setState({arrays:counter});
     //Total
     const num=counter[index].counts;
     this.setState((prevState) => ({
      total: this.state.total + 1
    }));
         
  }
  handleDecrement=(counters)=>{
     const counter=[...this.state.arrays];
     const index=counter.indexOf(counters);
     counter[index].counts--;
     this.setState({arrays:counter});
    //Total
     const num=counter[index].counts;
     this.setState((prevState) => ({
      total: this.state.total - 1
    }));
     
     
  }
  handleReset=()=>{
      const counter=this.state.arrays.map(c=>{
          c.counts=0
          return c
      });
      this.setState({arrays:counter})
      this.setState({total:0})
  }

  render() { 
    
    return ( <React.Fragment>
      
      <Navbar total={this.state.total}/>
      <main className="container">
      <Counters
      counters={this.state.arrays}
      onReset={this.handleReset}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      />
      </main>
    </React.Fragment> )
  }
  handleTotal(){
    //const total=[...this.state.arrays];
    return 'ncsncs';
  
  }
}

 
export default App;

//export default App;
