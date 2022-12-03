
//React
import { useEffect, useState } from "react";

//Components
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import WeatherList from "./components/Weather-list/WeatherList";
import Spinner from "./components/Spinner/Spinner";
import Error from "./components/Error/Error";

//Services
import {getCityName, getWeatherCoord, getWeather} from "./services/WeatherAPI";

//Styles
import "./scss/style.scss";

const App = () => {

	const [data, setData] = useState({});
	const [date, setDate] = useState("");
	const [isLoading, setIsLoading] = useState(true);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
	const [error, setError] = useState(false);

	const onError = () => {
		setError(true);
		setIsLoading(false);
		setTimeout(()=> {
			window.location.reload();
		}, 5000)
	}

	const onChangeCoord = (city) => {
		getWeatherCoord(city)
		.then(res => {
			setLatitude(res[0].lat);
			setLongitude(res[0].lon);
		})
		.catch(onError);
	}

    useEffect(()=>{
		getCityName()
		.then(res => {
			onChangeCoord(res.city);
		})
		.catch(onError);
    },[])

	useEffect(()=> {
		if (latitude && longitude !== "" ) {
			getWeather(longitude, latitude)
			.then(res => {
				setData(res);
				setDate(res.list[0].dt)
				setIsLoading(false);
			})
			.catch((onError));
		}
	}, [longitude, latitude])

	const errorMessage = error ? <Error/> : null;
	const spinner = isLoading ? <Spinner/> : null;
	const weatherList = !(errorMessage || spinner) ? <WeatherList data={data} /> : null;

	return (
		<>
			<Header setIsLoading={setIsLoading} onChangeCoord={onChangeCoord}/>
			<main>
				<Info data={data} date={date} isLoading={isLoading} error={error} />
				<section>
					<div className="container">
						<div className="weather-list page__weather-list"> 
							{errorMessage}
							{spinner}
							{weatherList}  	
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
