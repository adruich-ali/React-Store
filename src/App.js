import React  from 'react';
import data from "./data.json";
import { Component } from "react";
import Products from './componentes/products';

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            products:data.products,
            size:"",
            sort:"",
        }
    }
    render(){
        return (
            <div className="grid-container">
            <header> <a href="/">React Store</a></header>
            <main>
                <div className="content">
                    <div className="main">
Products              <Products products={this.state.products} />
                    </div>
                    <div className="sidebar">
Cart Items
                    </div>
                </div>
            </main>
            <footer>All Right Resived</footer>
            </div> 
        );
    }
}

export default App;
