import React, {Component} from 'react'
import axios from 'axios';
import {urlApi} from '../helpers.js'

class Home extends Component{
  constructor(props){
    super(props)
    this.state={users:[], showLoader: false,error: ""}
    this.allData=this.allData.bind(this)
  }
  componentDidMount(){
    this.allData()
  }
  allData(currData){

    axios.get(`${urlApi}/users`)
  .then(res=>{
    if(res.status===200){
      this.setState({
        users:res.data,
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
              this.state.users.length>0?
              this.state.users.map((user)=>{
              return <div key={user.id}>
                    <h1>{user.name}</h1>
                  </div>
                })
            :<div><div className="load"></div><h4>LOADING</h4></div>
          }
      </div>
    )
  }
}
export default Home
