import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
