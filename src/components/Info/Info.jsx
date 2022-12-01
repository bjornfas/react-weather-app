
//Components
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import getCurrentImage from "../../services/CurrentWeatherIcon";

//Images
import Precipitation from "../../images/precipitation.png";
import Temp from "../../images/temp.png";
import Pressure from "../../images/pressure.png";
import Wind from "../../images/wind.png";

//Styles
import "./info.scss";

const Info = ({...props}) => {

    const {data, date, isLoading, doValueFixed, doUppercaseFirstLetter,
        getMonth, getDayOfTheMonth, getWeekDay, error} = props;

    const errorMessage = error ? <Error/> : null;
    const spinner = isLoading ?   <Spinner/> : null;
    const contentMain = !(errorMessage || spinner) 
        ?
        <>
            <div className="info__temperature">
                <div className="info__deg">
                    <span className="info__value">{`${doValueFixed(data.list[0].main.temp)}°`}</span>
                    {`${getWeekDay(date)}, ${getDayOfTheMonth(date)} ${doUppercaseFirstLetter(getMonth(date))}`}
                </div>
                {getCurrentImage(data.list[0].weather[0].main, "info__image")}
            </div>
            <div className="info__city">
                Город: {data.city.name}
            </div>
        </>
        : null;

    const contentSecond = !(errorMessage || spinner)
        ?
        <>
            <div className="info__description">
                <div className="info__icon">
                    <img src={Temp} alt="Temperature" />
                </div>
                <div className="info__description-title">Температура</div>
                <div className="info__description-text">
                    {`${doValueFixed(data.list[0].main.temp)}° ощущается как ${doValueFixed(data.list[0].main.feels_like)}°`}
                </div>
            </div>
            <div className="info__description">
                <div className="info__icon">
                    <img src={Pressure} alt="Pressure" />
                </div>
                <div className="info__description-title">Давление </div>
                <div className="info__description-text">
                    {`${data.list[0].main.pressure} мм ртутного столба`}
                </div>
            </div>
            <div className="info__description">
                <div className="info__icon">
                    <img src={Precipitation} alt="Precipitation" />
                </div>
                <div className="info__description-title">Осадки</div>
                <div className="info__description-text">
                    {doUppercaseFirstLetter(data.list[0].weather[0].description)}
                </div>
            </div>
            <div className="info__description">
                <div className="info__icon">
                    <img src={Wind} alt="Wind" />
                </div>
                <div className="info__description-title">Ветер</div>
                <div className="info__description-text">{`${doValueFixed(data.list[0].wind.speed)} м/с`}</div>
            </div>                        
        </>
        : null;
   
    return (
        <div className="container">
            <div className="info">
                <div className="info__item info-main">
                    {errorMessage}
                    {spinner}
                    {contentMain}
                </div>
                <div className="info__item info-secondary">
                    {errorMessage}
                    {spinner}
                    {contentSecond}                   
                </div>
            </div>
        </div>
    );
}

export default Info;