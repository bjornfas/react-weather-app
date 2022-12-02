
//Images
import Thunderstorm from "../images/Thunderstorm.svg";
import Drizzle from "../images/Drizzle.svg";
import Rain from "../images/Rain.svg";
import Snow from "../images/Snow.svg";
import Clear from "../images/Clear.svg";
import Clouds from "../images/Clouds.svg";
import DefaultWeather from "../images/DefaultWeather.svg";

// Определяет изображение в зависимости от значения осадков
const getCurrentImage = (precipitationValue , classname) => {
    switch (precipitationValue) {
        case "Thunderstorm":
            return <img className={classname} src={Thunderstorm} alt="Weather status" />;
        case "Drizzle":
            return <img className={classname} src={Drizzle} alt="Weather status" />;
        case "Rain":
            return <img className={classname} src={Rain} alt="Weather status" />;
        case "Snow":
            return <img className={classname} src={Snow} alt="Weather status" />;
        case "Clear":
            return <img className={classname} src={Clear} alt="Weather status" />;
        case "Clouds":
            return <img className={classname} src={Clouds} alt="Weather status" />;
        default:
            return <img className={classname} src={DefaultWeather} alt="Weather status" />;
    }
}

export default getCurrentImage;