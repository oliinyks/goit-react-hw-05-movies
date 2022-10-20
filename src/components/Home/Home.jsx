import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {fetchDayMovie} from "../../api";
import {Items, Item, FilmImg} from './Home.styled'

export const Home = () => {
	const [trendingMovie, setTrendingMovie] = useState([]);

useEffect(() => {

	const fetchData = async () => {
		try {
			const movie = await fetchDayMovie();
			setTrendingMovie(movie.results);
		 } catch (error) {
			new Error()
		 }}

		 fetchData();
},[])


	return(
		<Items>
		{trendingMovie.map(({title, id, poster_path}) => (
			<Item key={id}>
				<Link to={`${title}`}>
				 <FilmImg src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
				</Link> 
			</Item>
		))}
		</Items>
	)
}

