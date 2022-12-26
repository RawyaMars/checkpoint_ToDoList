import './App.css';

import React, { Component } from 'react'
import ItemList from './components/ItemList';

export default class App extends Component {
  //status=["uncomplete", "completed"]
  state={
    todos:[
      {id:0,action:"Buy groceries for next week" ,stat:false},
      {id:1,action:"Renew car insurance" ,stat:false},
      {id:2,action:"Sign up for online course" ,stat:false}
  
    ]
  }

handleDelete=(id)=>this.setState({todos:this.state.todos.filter(el=>el.id!==id)});
handleFinish=(id)=> {this.setState({todos:this.state.todos.map(el=>el.id===id?{...el,stat:!el.stat}:el)})}
handleAdd=(newTask)=>{ 
  this.setState({todos:[...this.state.todos,newTask]})}
  render() {
    return (
      <div className='App'>
        <ItemList list={this.state.todos} handleDelete={this.handleDelete} handleFinish={this.handleFinish} handleAdd={this.handleAdd}></ItemList>
      </div>
    )
  }
}

