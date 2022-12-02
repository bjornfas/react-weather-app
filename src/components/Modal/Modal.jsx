
//Components
import getCurrentImage from "../../utils/CurrentWeatherIcon";
import ModalDescription from "../../ModalDescription/ModalDescription";

//Utils
import { doValueFixed, doUppercaseFirstLetter, getMonth, getDayOfTheMonth, getWeekDay } from "../../utils/Utils";

//Images
import Precipitation from "../../images/precipitation.png";
import Temp from "../../images/temp.png";
import Pressure from "../../images/pressure.png";
import Wind from "../../images/wind.png";

//Styles
import "./modal.scss";

const Modal = ({isOpen, setIsOpen, ...props}) => {

    const {data, date, temp, tempFeels,
        weatherName, weatherStatus, pressure, wind} = props;

    const description = [
        {
            name: "Температура",
            text: `${doValueFixed(temp)}° ощущается как ${doValueFixed(tempFeels)}°`,
            image: `${Temp}`
        },
        {
            name: "Давление",
            text: `${pressure} мм ртутного столба`,
            image: `${Pressure}`
        },
        {
            name: "Осадки",
            text: `${weatherStatus}`,
            image: `${Precipitation}`
        },
        {
            name: "Ветер",
            text: `${doValueFixed(wind)} м/с`,
            image: `${Wind}`
        }
    ];

    //Закрытие модального окна по клику
    const onCloseModal = (e) => {
        const target = e.target;
        const modalCLose = target.classList.contains("modal__close");
        const overlay = target.classList.contains("overlay");
         if (modalCLose === true || overlay === true) {
            setIsOpen(false);
         }
    }

    return (
        <div className={!isOpen? `overlay animated` : `overlay show`} onClick={onCloseModal}>
            <div className="modal">
                <div className="modal__info">
                    <div className="modal__temp">
                        {`${doValueFixed(temp)}°`}
                    </div>
                    <div className="modal__day">
                    {`${getWeekDay(date)}, ${getDayOfTheMonth(date)} ${doUppercaseFirstLetter(getMonth(date))}`}
                    </div>
                    {getCurrentImage(weatherName, "modal__weather")}
                    <div className="modal__city">
                        Город: {data.city.name}
                    </div>
                </div>
                <div className="modal__description">
                    <ModalDescription description={description}/>
                </div>
                <div className="modal__close"></div>
            </div>
        </div>
    )
}

export default Modal;