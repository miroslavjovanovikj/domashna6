import React, {Component} from 'react'
import axios from 'axios';
import {urlApi} from '../helpers.js'

class Comments extends Component{
  constructor(props){
    super(props)
    this.state={comments:[], showLoader: false,error: ""}
    this.commentsData=this.commentsData.bind(this)
  }
  componentDidMount(){
    this.commentsData()
  }
  commentsData(currData){

    axios.get(`${urlApi}/comments`)
  .then(res=>{
    if(res.status===200){
      this.setState({
        comments:res.data,
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
            this.state.comments.length>0?
            this.state.comments.map((c)=>{
              return <div key={c.id}>
                        <p>{c.body}</p>
                      </div>
          })
          :  <div><div className="load"></div><h4>LOADING</h4></div>
        }
      </div>
    )
  }
}
export default Comments
