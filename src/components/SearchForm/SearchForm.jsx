import { useState, useEffect } from 'react';
import { fetchMovieByName } from '../../api';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { SearchFormResult } from '../SearchFormResult/SearchFormResult';
import { MainTitle, Button, Form, Input, StyledLink } from './SearchForm.styled';

export const SearchForm = () => {
  const [movie, setMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (filter.trim() === '') {
      setMovie([]);
    }
  }, [filter]);

  useEffect(() => {
	if(filter){
		fetchMovie()
	}
	 // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const selectedMovie = e => {
    const value = e.currentTarget.value;
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (filter.trim() === '') {
      return toast.info('Please select an movie');
    }
    setLoader(true);
    fetchMovie();
    setLoader(false);
  };

  const fetchMovie = async() => {
    try {
      const reviews = await fetchMovieByName(filter);
      setMovie(reviews.results);
      if (!reviews.results.length) {
        toast.error('We did not find the movie you requested');
      }
    } catch (error) {
      new Error();
    }
  };

  return (
    <>
	 <StyledLink to="/">Go back</StyledLink>

      <MainTitle>Find a movie</MainTitle>

      <Form onSubmit={handleSubmit}>
        <Input
          value={filter}
          onChange={selectedMovie}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        ></Input>
        <Button>Search</Button>
      </Form>

      {movie.length > 0 && <SearchFormResult movie={movie} />}
      {loader && <Loader />}
    </>
  );
};
