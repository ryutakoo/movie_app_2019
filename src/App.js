import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  };

  getMovies = async () => {
    //ES6 기준
    const { data : { data : { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({isLoading : false, movies})
    

    /* ES5 기준
    const movicesData =  moives.data.data.movices
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies.data.data.movies)
    */
  }
  componentDidMount(){
    this.getMovies();
        // setTimeout( () => {
    //   this.setState({isLoading : false});
    // }, 6000)
  }

  render() {
    const { isLoading, movies} = this.state
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"> Loading... </span>
          </div> 
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key = {movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres} 
                >
              </Movie>
            ))}
            </div>
        )}
      </section>
    )
  }
}

export default App;
