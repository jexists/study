//app.js

import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");

  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "로딩중..." : "로딩완료"}</div>
    )
  }
}

export default App;