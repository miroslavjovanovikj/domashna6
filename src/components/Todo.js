import React, {Component} from 'react'
import axios from 'axios';
import {urlApi} from '../helpers.js'

class Todo extends Component{
  constructor(props){
    super(props)
    this.state={todos:[], showLoader: false,error: ""}
    this.todoData=this.todoData.bind(this)
  }
  componentDidMount(){
    this.todoData()
  }
  todoData(currData){

    axios.get(`${urlApi}/todos`)
  .then(res=>{
    if(res.status===200){
      this.setState({
        todos:res.data,
        showLoader: false,
        error: ""
      })
    }
  })
  .catch(err => this.setState({ error: "Error Fetching Users!", showLoader: false}) )
  }
  render(){

    return (

      <div>
      {
        !this.state.showLoader &&  this.state.error === "Error Fetching Users!"  ?
          <h2>{this.state.error}</h2>:
          this.state.todos.length>0?
        this.state.todos.map((todo)=>{
        return <li key={todo.id}>{todo.title}
                  <strong>
                    {todo.completed=== true?"Done":"To do"}
                  </strong>
                </li>
      })
      :  <div><div className="load"></div><h4>LOADING</h4></div>
    }

      </div>
    )
  }
}
export default Todo
