import axios from "axios";

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

 export const fetchDayMovie = async () => {
	try {
	const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=8c891b594a81664138d08b9b86c874df');
	return response.data;
	 } catch (error) {
		console.error(error);
	 }
 };

