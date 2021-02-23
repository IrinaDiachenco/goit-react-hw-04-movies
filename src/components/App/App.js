import React, {Suspense, lazy} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import PreLoader from '../../components/Loader/Loader'
import routes from '../../routes/routes';

const HomePage = lazy(() =>
  import('../../views/HomePage/HomePage'),
);

const MoviesPage = lazy(() =>
  import(
    '../../views/MoviesPage/MoviesPage'),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage/MovieDetailsPage'),
);

const App = () => (
  <> 
        <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  <Suspense fallback={<PreLoader />}>
     <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
      </Switch>
  </Suspense>
    </>
);

export default App;
