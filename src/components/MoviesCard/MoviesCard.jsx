import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function MoviesCard({ id, original_title, name, location }) {
  return (
    <li>
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: location,
          },
        }}
      >
        {original_title ? original_title : name}
      </Link>
    </li>
  );
}

MoviesCard.propTypes = {
  id: PropTypes.number,
  original_title: PropTypes.string,
  name: PropTypes.string,
};

export default withRouter(MoviesCard);