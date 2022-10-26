import  MovieDetails  from '../MovieDetails';
import { useParams } from 'react-router-dom';
import { SearchForm } from '../../components/SearchForm/SearchForm';

const Movies = () => {
  const { movieId } = useParams();
  return (
    <main>
      {movieId && movieId.length > 0 ? (
        <>
          <MovieDetails />
        </>
      ) : (
        <SearchForm />
      )}
    </main>
  );
};

export default Movies;
