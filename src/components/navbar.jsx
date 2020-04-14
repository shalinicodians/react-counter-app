import React, { Component } from 'react';
const Navbar=props=>{
return(
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="">Total<span>{props.total}</span></a>
    
    </nav>
)
}
export default Navbar;