import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {fetchDayMovie} from "../../api";
import { Loader } from "components/Loader/Loader";
import defaultImg from '../../default.png'
import {MainTitle, Items, Item, FilmImg} from './Home.styled'

export const Home = () => {
	const [loader, setLoader] = useState(false);
	const [trendingMovie, setTrendingMovie] = useState([]);

useEffect(() => {
	setLoader(true);

	const fetchData = async () => {
		try {
			const movie = await fetchDayMovie();
			setTrendingMovie(movie.results);
			setLoader(false);
		 } catch (error) {
			new Error()
		 }}
		 fetchData();
},[])

const posterImg = poster_path => {
	if (poster_path === null) {
		return `${defaultImg}`
	}
	return `https://image.tmdb.org/t/p/w500/${poster_path}`
  }

	return(
		<main>
		<MainTitle>In trend today</MainTitle>
		<Items>
		{trendingMovie.map(({id, poster_path, title}) => (
			<Item key={id}>
				<Link to={`/movies/${id}`}>
				 <FilmImg src={`${posterImg(poster_path)}`} alt={title}/>
				</Link> 
			</Item>
		))}
		<Outlet/>
		</Items>
		{loader && <Loader />}
		</main>
	)
}

