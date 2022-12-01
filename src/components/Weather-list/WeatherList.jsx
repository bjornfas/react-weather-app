
//Components
import WeatherListItem from "../Weather-list-item/WeatherListItem";

//Styles
import "./weatherList.scss";

const WeatherList = ({...props}) => {

    const {data,doValueFixed, doUppercaseFirstLetter, getMonth, getDayOfTheMonth, getWeekDay} = props;
    
    //Отфильтрованный массив по времени с данными на 5 дней
    const filterData = data.list.filter(item => item.dt_txt.endsWith("12:00:00"));

    const result = filterData.map(item => {
        return (
            <WeatherListItem 
                key={item.dt}
                data={data}
                date={item.dt} 
                pressure={item.main.pressure}
                wind={item.wind.speed} 
                temp={item.main.temp} 
                tempFeels={item.main.feels_like}
                weatherName={item.weather[0].main} 
                weatherStatus={item.weather[0].description}
                doValueFixed={doValueFixed}
                doUppercaseFirstLetter={doUppercaseFirstLetter}
                getMonth={getMonth}
                getDayOfTheMonth={getDayOfTheMonth}
                getWeekDay={getWeekDay}
            /> 
        )
    })

    return (
        <>
            {result}
        </>  
    )
}

export default WeatherList;