import React, {Suspense, lazy} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import PreLoader from '../../components/Loader/Loader';
import routes from '../../routes/routes';
import s from './App.module.css';

const HomePage = lazy(() =>
  import('../../views/HomePage/HomePage' /*webpackChunkName: "homePageView" */),
);

const MoviesPage = lazy(() =>
  import(
    '../../views/MoviesPage/MoviesPage' /*webpackChunkName: "moviesPageView" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPageView" */),
);

const App = () => (
  <> 
        <ul className={s.header}>
      <li>
        <NavLink
          exact
          to={routes.home}
          className={s.navlink}
          activeClassName={s.navlinkActive}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className={s.navlink}
          activeClassName={s.navlinkActive}
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
