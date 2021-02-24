import React, { Component } from 'react';
import {getMovieDetails} from '../../Api/Api';
import { Link, Route, Switch } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import routes from '../../routes/routes';
import s from './MovieDetailsPage.module.css';
import Review from '../../components/Review/Review';

export default class MovieDetailsPage extends Component {
  state = {
    vote_average: null,
    vote_count: null,
    title: null,
    overview: null,
    original_title: null,
    genres: null,
    poster: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await getMovieDetails(movieId);

    this.setState(prev => ({
      vote_average: response.vote_average,
      vote_count: response.vote_count,
      title: response.title,
      overview: response.overview,
      original_title: response.original_title,
      genres: response.genres,
      poster: response.poster_path,
    }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const {
      title,
      overview,
      original_title,
      genres,
      poster,
    } = this.state;
    const { match, location } = this.props;

    return (
      <div className={s.container}>
        <button type="button" onClick={this.handleGoBack} className={s.button}>
          Go back
        </button>
        <div>
          <div>
            <img
              src={
                poster
                  ? `https://image.tmdb.org/t/p/w500/${poster}`
                  : 'https://kritka.info/uploads/posts/no_poster.jpg'
              }
              alt={title}  className={s.poster}
            ></img>
          </div>
          <div>
            <h1 className={s.title}>{title ? title : original_title}</h1>
            <span className={s.descr}>Overview:</span>
            <p>
              {overview
                ? overview
                : "Sorry we don't have overview for this movie"}
            </p>
            {genres && (
              <div>
                <span className={s.descr}>Genres:</span>
                <p>
                  {genres.map(genre => {
                    return `${genre.name}, `;
                  })}
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          <div>
            <div className={s.descr}>Additional information:</div>
            <ul className={s.addInfo}>
              <li className={s.link}>
                <Link
                  to={{
                    pathname: `${match.url}/cast`,
                    state: {
                      from: location?.state?.from || routes.home,
                    },
                  }}
                >
                  Cast
                </Link>
              </li>
              <li className={s.link}>
                <Link
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: {
                      from: location?.state?.from || routes.home,
                    },
                  }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <Route
            path={`${match.url}/cast`}
            render={() => {
              return <Cast movieId={match.params.movieId} />;
            }}
          />

          <Route
            path={`${match.url}/reviews`}
            render={() => {
              return <Review movieId={match.params.movieId} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}