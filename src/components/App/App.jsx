import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { NotFound } from 'components/NotFound/NotFound';
import { Reviews } from '../Reviews/Reviews';
import { SharedLayout } from '../SharedLayout/SharedLayout';

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const Cast = lazy(() => import("../Cast/Cast"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Movies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
