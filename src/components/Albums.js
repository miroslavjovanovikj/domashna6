import React, {Component} from 'react'
import axios from 'axios';
import {urlApi} from '../helpers.js'

class Albums extends Component{
  constructor(props){
    super(props)
    this.state={albums:[], showLoader: false,error: ""}
    this.albumData=this.albumData.bind(this)
  }
  componentDidMount(){
    this.albumData()
  }
  albumData(currData){

    axios.get(`${urlApi}/albums`)
  .then(res=>{
    if(res.status===200){
      this.setState({
        albums:res.data,
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
                this.state.albums.length>0?
                this.state.albums.map((alb)=>{
                return <div key={alb.id}>
                          <h1 >{alb.title}</h1>
                        </div>
            })
            :  <div><div className="load"></div><h4>LOADING</h4></div>
          }
      </div>
    )
  }
}
export default Albums
