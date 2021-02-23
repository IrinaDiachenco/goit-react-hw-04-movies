import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../../Api/Api';

class Cast extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  };

  state = {
    cast: [],
  };

  async componentDidMount() {
    const response = await getMovieCredits(this.props.movieId);

    this.setState(prev => ({ cast: [...response.cast.slice(0, 5)] }));
  }

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast &&
          cast.map(actor => {
            return (
              <li key={actor.id}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                    alt={actor.name}
                  ></img>
                </div>
                <p>{actor.name}</p>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Cast;