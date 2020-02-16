import React, {Component} from 'react'
import axios from 'axios';
import {urlApi} from "../helpers"
class Posts extends Component{
  constructor(props){
    super(props)
    this.state={posts:[]}
    this.postsData=this.postsData.bind(this)
  }
  componentDidMount(){
    this.postsData()
  }
  postsData(currData){

    axios.get(`${urlApi}/posts`)
  .then(res=>{
    if(res.status===200){
      this.setState({
        posts:res.data
      })
    }
  })
  .catch(err=>console.log(err))
  }
  render(){
    console.log(this.state.posts)
    return (

      <div>
        {
          !this.state.showLoader &&  this.state.error === "Error Fetching Users!"  ?
            <h2>{this.state.error}</h2>:
            this.state.posts.length>0?
            this.state.posts.map((post)=>{
                return <h1 key={post.id}>{post.title}</h1>
          })
          :  <div><div className="load"></div><h4>LOADING</h4></div>
        }
      </div>
    )

  }
}
export default Posts
