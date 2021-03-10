import React from 'react';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  };

  componentDidMount(){
    setTimeout( () => {
      this.setState({isLoading : false});
    }, 6000)
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
