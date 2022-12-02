
//Components
import InfoDescription from "../InfoDescription/InfoDescription";

//Utils
import { doValueFixed, doUppercaseFirstLetter } from "../../utils/Utils";

//Images
import Precipitation from "../../images/precipitation.png";
import Temp from "../../images/temp.png";
import Pressure from "../../images/pressure.png";
import Wind from "../../images/wind.png";

const InfoSecondary = ({data}) => {

    const description = [
        {
            name: "Температура",
            text: `${doValueFixed(data.list[0].main.temp)}° ощущается как ${doValueFixed(data.list[0].main.feels_like)}°`,
            image: `${Temp}`
        },
        {
            name: "Давление",
            text: `${data.list[0].main.pressure} мм ртутного столба`,
            image: `${Pressure}`
        },
        {
            name: "Осадки",
            text: `${doUppercaseFirstLetter(data.list[0].weather[0].description)}`,
            image: `${Precipitation}`
        },
        {
            name: "Ветер",
            text: `${doValueFixed(data.list[0].wind.speed)} м/с`,
            image: `${Wind}`
        }
    ];

    return (
        <>
            <InfoDescription  description={description}/>                     
        </>
    )
}

export default InfoSecondary;