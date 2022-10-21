import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {fetchDayMovie} from "../../api";
import {MainTitle, Items, Item, FilmImg} from './Home.styled'

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
		<>
		<MainTitle>In trend today</MainTitle>
		<Items>
		{trendingMovie.map(({id, poster_path, title}) => (
			<Item key={id}>
				<Link to={`/movies/${id}`}>
				 <FilmImg src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
				</Link> 
			</Item>
		))}
		<Outlet/>
		</Items>
		</>
	)
}

