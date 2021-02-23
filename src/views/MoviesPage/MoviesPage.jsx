import React, { Component, Suspense } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getMovies } from '../../Api/Api';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import PreLoader from "../../components/Loader/Loader";

export default class SearchMoviesPage extends Component {
  state = {
    searchQuery: '',
    moviesByQuery: [],
  };

  handleSearchSubmit = query => {
    this.setState(prev => ({ searchQuery: query }));
  };

  async componentDidMount() {
    const query = this.props.location.search.split('=')[1];

    if (!query) {
      return;
    }

    const response = await getMovies(query);
    this.setState(prev => ({ moviesByQuery: [...response.results] }));
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.searchQuery;
    const { searchQuery } = this.state;
    if (prevName !== searchQuery) {
      const response = await getMovies(searchQuery);
      this.setState(prev => ({ moviesByQuery: [...response.results] }));
      this.props.history.push(`${this.props.match.url}?query=${searchQuery}`);
    }
  }

  render() {
    const { moviesByQuery } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.handleSearchSubmit} />
      <Suspense fallback={<PreLoader />}>
        {moviesByQuery && (
          <ul>
            {moviesByQuery.map(({ id, original_title, title }) => {
              return (
                <MoviesCard
                  key={id}
                  id={id}
                  original_title={original_title}
                  name={title}
                />
              ); 
            })}
          </ul>
        )}
        
        </Suspense>
      </div>
    );
  }
}