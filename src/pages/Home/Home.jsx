import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchDayMovie } from '../../api';
import { Loader } from 'components/Loader/Loader';
import defaultImg from '../../default.png';
import { MainTitle, Items, Item, FilmImg } from './Home.styled';

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [trendingMovie, setTrendingMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setLoader(true);

    const fetchData = async () => {
      try {
        const movie = await fetchDayMovie();
        setTrendingMovie(movie.results);
        setLoader(false);
      } catch (error) {
        new Error();
      }
    };
    fetchData();
  }, []);

  const posterImg = poster_path => {
    if (poster_path === null) {
      return `${defaultImg}`;
    }
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  };

  return (
    <main>
      <MainTitle>In trend today</MainTitle>
      <Items>
        {trendingMovie.map(({ id, poster_path, title }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <FilmImg src={`${posterImg(poster_path)}`} alt={title} />
            </Link>
          </Item>
        ))}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Items>
      {loader && <Loader />}
    </main>
  );
};

export default Home;
