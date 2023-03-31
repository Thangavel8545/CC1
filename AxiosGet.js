import React, { Component } from 'react'
import axios from 'axios'

export default class AxiosGet extends Component {
    state={person:[]}
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{this.setState({person:res.data})})
    }
  render() {
    return (
      <div>
      {this.state.person.map((e)=><li key={e.id}>{e.name}</li>)}
      </div>
    )
  }
}

