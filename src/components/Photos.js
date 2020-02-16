import React, {Component} from 'react'
import axios from 'axios';
import {urlApi} from '../helpers.js'

class Photos extends Component{
  constructor(props){
    super(props)
    this.state={photos:[],showLoader: false,error: ""}
    this.photosData=this.photosData.bind(this)
  }
  componentDidMount(){
    this.photosData()
  }
  photosData(currData){

  axios.get(`${urlApi}/photos`)
  .then(res=>{
    if(res.status===200){
      this.setState({
        photos:res.data,
        showLoader: false,
        error: ""
      })
    }
  })
  .catch(err => this.setState({ error: "Error Fetching Users!", showLoader: false})  )
  }
  render(){

    return (
      <div>
          {
            !this.state.showLoader &&  this.state.error === "Error Fetching Users!"  ?
              <h2>{this.state.error}</h2>:
              this.state.photos.length>0?
              this.state.photos.map((photo)=>{
              return <div className="imgPosition" key={photo.id}>
                        <h1>{photo.title}</h1>
                        {<img  src={photo.url} alt={photo.title} />}
                    </div>
              })
            : <div><div className="load"></div><h4>LOADING</h4></div>
          }
      </div>
    )
  }
}
export default Photos
