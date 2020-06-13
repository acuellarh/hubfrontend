import React, { Component } from "react";

class Blog extends Component {
  constructor(){
    super();
    this.state = { categories: [] }
  }

  componentDidMount(){
    fetch('https://hubbackend.herokuapp.com/api/v1/categories')
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
        this.setState({ categories: response })
      })
  }
  render(){
    return(
    <div>Blog{console.log(this.state.categories)}</div>
    )
  }
  
}

export default Blog;