import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {getMovieReviews} from '../../Api/Api';

export default class ReviewsList extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  };

  state = {
    reviews: [],
  };

  async componentDidMount() {
    const response = await getMovieReviews(this.props.movieId);

    this.setState(prev => ({ reviews: [...response.results.slice(0, 5)] }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => {
            return (
              <li>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <li>
            <p>Not found reviews for this movie</p>
          </li>
        )}
      </ul>
    );
  }
}