import React, { Component } from 'react';

class MovieDetail extends Component {
  constructor() { 
    super();
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    
    let dataURL = "reactweb?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        // res.filter((movie) => {
        //   if(movie.slug == self.props.match.params.movieId) {
        //     console.log(res)
        //   }
        // });
        console.log(res);
      })
  } 
  render() {
    console.log(this.props.match.params.movieId)
  return (
      <div>
        <h2>Star Wars Movies!!!</h2>
      </div>
    ) 
  }
}
export default MovieDetail;