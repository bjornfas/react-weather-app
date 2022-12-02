
//Utils
import { doValueFixed, doUppercaseFirstLetter, getMonth, getDayOfTheMonth, getWeekDay } from "../../utils/Utils";
import getCurrentImage from "../../utils/CurrentWeatherIcon";


const InfoMain = ({data, date}) => {
    return (
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
    )
}

export default InfoMain;