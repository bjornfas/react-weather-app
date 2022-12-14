
//React
import { useState } from "react";

//Components
import getCurrentImage from "../../utils/CurrentWeatherIcon";
import Modal from "../Modal/Modal";

//Utils
import { doValueFixed, doUppercaseFirstLetter, getMonth, getDayOfTheMonth, getWeekDay } from "../../utils/Utils";

const WeatherListItem = ({...props}) => {

    const [isOpen, setIsOpen] = useState(false);

    const {date,temp, tempFeels, weatherName, weatherStatus} = props;

    const onOpenModal = () => {
        setIsOpen(true);
    }

    return (
        <>
            <div className="weather-list__item" onClick={onOpenModal}>
                <div className="weather-list__day">
                    {getWeekDay(date)}
                </div>
                <div className="weather-list__date">
                    {`${getDayOfTheMonth(date)} ${doUppercaseFirstLetter(getMonth(date))}`}
                </div>
                {getCurrentImage(weatherName, "weather-list__image")}
                <div className="weather-list__deg">
                    {`${doValueFixed(temp)}°`}
                </div>
                <div className="weather-list__felt">
                    {`${doValueFixed(tempFeels)}°`}
                </div>
                <div className="weather-list__status">
                    {weatherStatus}
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} {...props}/>
        </>
    )
}

export default WeatherListItem;
