import React, { Component } from 'react';
import { getTrendingMovies } from '../../Api/Api';
import MoviesCard from '../../components/MoviesCard/MoviesCard';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {    
    const response = await getTrendingMovies();

    this.setState(prev => ({ movies: [...response.results] }));
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map(({ id, original_title, name }) => {
            return (
               <MoviesCard
                key={id}
                id={id}
                original_title={original_title}
                name={name}
              />
            )
          })}
        </ul>
      </>
    );
  }
}