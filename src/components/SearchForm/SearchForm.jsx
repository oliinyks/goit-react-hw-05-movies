import { useState } from 'react';
import { fetchMovieByName } from '../../api';
// import { useEffect } from 'react';

export const SearchForm = () => {
  const [movie, setMovie] = useState([]);
  
  const selectedMovie = e => {
	  setMovie(e.currentTarget.value);
	};
	
	const handleSubmit = async () => {
		try {
			const reviews = await fetchMovieByName(movie);
			setMovie(reviews);
      } catch (error) {
			new Error();
      }
	};
	
	console.log("🚀 ~ file: SearchForm.jsx ~ line 7 ~ SearchForm ~ movie", movie)
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={selectedMovie}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      ></input>
      <button>Search</button>
    </form>
  );
};
