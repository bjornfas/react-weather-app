
//React
import { useEffect, useState } from "react";

//Components
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import WeatherList from "./components/Weather-list/WeatherList";
import Spinner from "./components/Spinner/Spinner";
import Error from "./components/Error/Error";
import {getCityName, getWeatherCoord, getWeather} from "./services/WeatherAPI";

//Styles
import "./scss/style.scss";

const App = () => {

	const [data, setData] = useState({});
	const [date, setDate] = useState("");
	const [isLoading, setIsLoading] = useState(true);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
	const [city, setCity] = useState("");
	const [error, setError] = useState(false);

    useEffect(()=>{
		getCityName()
		.then(res => {
			setCity(res.city);
		})
		.catch(onError);
    },[])

	useEffect(()=> {
		if ( city !== "") {
			getWeatherCoord(city)
			.then(res => {
				setLatitude(res[0].lat);
				setLongitude(res[0].lon);
			})
			.catch(onError);
		}
	}, [city])

	useEffect(()=> {
		if ( latitude || longitude !== "") {
			getWeather(longitude, latitude)
			.then(res => {
				setData(res);
				setDate(res.list[0].dt)
				setIsLoading(false);
			})
			.catch((onError));
		}
	}, [longitude, latitude])

	const onError = () => {
		setError(true);
		setIsLoading(false);
		setTimeout(()=> {
			window.location.reload();
		}, 5000)
	}

	//Возвращает округленное значение
	const doValueFixed = (value) => {
 		return value.toFixed(0);
	}

	//Преобразует первый символ значения в заглавный
	const doUppercaseFirstLetter = (value) => {
		return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
	}

	//Возвращает значение месяца
	const getMonth = (date) => {
        return new Date(date * 1000).toLocaleString('ru-RU', { month: 'short' })
    }

	//Возвращает число ммесяца
    const getDayOfTheMonth = (date) => {
        const dateNow = new Date(date * 1000);
        const dayOfTheMonth = dateNow.getDate();
        return dayOfTheMonth;
    }

	//Возвращает день недели
    const getWeekDay = (date) => {
        let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        return days[new Date(date * 1000).getDay()];
    }

	const errorMessage = error ? <Error/> : null;
	const spinner = isLoading ? <Spinner/> : null;
	const weatherList = !(errorMessage || spinner)
		? 
		<WeatherList 
		data={data} 
		doValueFixed={doValueFixed} 
		doUppercaseFirstLetter={doUppercaseFirstLetter}
		getMonth={getMonth}
		getDayOfTheMonth={getDayOfTheMonth}
		getWeekDay={getWeekDay}
		/> 
		: null;

	return (
		<>
			<Header 
			setCity={setCity} 
			city={city} 
			setIsLoading={setIsLoading} 
			doUppercaseFirstLetter={doUppercaseFirstLetter}
			/>
			<main>
				<Info 
				data={data}
				date={date} 
				isLoading={isLoading} 
				doValueFixed={doValueFixed} 
				doUppercaseFirstLetter={doUppercaseFirstLetter}
				getMonth={getMonth}
				getDayOfTheMonth={getDayOfTheMonth}
				getWeekDay={getWeekDay}
				error={error}
				/>
				<div className="container">
					<div className="weather-list"> 
						{errorMessage}
						{spinner}
						{weatherList}  	
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
