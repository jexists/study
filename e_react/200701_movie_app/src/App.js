//app.js

import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: { 
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies);
    // this.setState({movies: movies}) //state: axios
    // this.setState({ movies }) //위에 코드랑 같은 의미
    this.setState({ movies, isLoaing: false });
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      // <div>{isLoading ? "로딩중..." : "로딩완료"}</div>
      <div>{isLoading ? "로딩중..." : movies.map(movie => (
          // console.log(movie),
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />
        ))}
      </div>
    );
  }
}

export default App;