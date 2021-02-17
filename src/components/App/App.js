import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../../views/HomePage/HomePage';
import MoviesPage from '../../views/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../views/MovieDetailsPage/MovieDetailsPage';
import Cast from '../../views/Cast/Cast';
import Reviews from '../../views/Reviews/Reviews';


const App = () => (
    <> 
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
    </>
);

export default App;
