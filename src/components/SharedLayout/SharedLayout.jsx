import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

// SharedLayout.propTypes = {};

export default SharedLayout;
