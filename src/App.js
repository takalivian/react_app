import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {

  date =[
    "This is list sample.",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ];

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0",
    padding:"5px"
  }

  constructor(props){
    super(props);
    this.state={
      list:this.date
    };
  }

  render(){
    return <div>
      <h1>React</h1>
      <h2 style ={this.msgStyle}>show list.</h2>
      <List title= "サンプル・リスト" date={this.date} />
    </div>;
  }
}

class List extends Component {
  number = 1;

  title = {
    fontSize:"20pt",
    fontWight:"bold",
    color:"blue"
  }

  render(){
    let date = this.props.date;
      return (
        <div>
          <p style={this.title}>{this.props.title}</p>
            <ul>
              {date.map((item)=>
                <Item number={this.number++} value={item}
                  key={this.number} />
              )}
            </ul>
        </div>
      )
  }
}

class Item extends Component {
  li = {
    listStyleType:"square",
    fontSize:"16pt",
    color:"#06",
    margin:"0",
    padding: "0"
  }
  num = {
    fontWeight:"bold",
    color:"red"  
  }

  render(){
    return (
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}]</span>
        {this.props.value}
      </li>
    )
  }
}

export default App;