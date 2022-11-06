import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, StyledSearchbar } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <StyledSearchbar>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </StyledSearchbar>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
