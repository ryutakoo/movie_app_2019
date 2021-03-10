import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //return movies
  }
  componentDidMount(){
    // setTimeout( () => {
    //   this.setState({isLoading : false});
    // }, 6000)
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state
    return (
      <div>
        <h1>Hello React.compoents {String(isLoading)}</h1>
        <h1>{isLoading ? "Loading..." : "I'm ready !!"}</h1>
      </div>
    )
  }
}


export default App;
