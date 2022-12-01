
//Components
import getCurrentImage from "../../services/CurrentWeatherIcon";

//Images
import Precipitation from "../../images/precipitation.png";
import Temp from "../../images/temp.png";
import Pressure from "../../images/pressure.png";
import Wind from "../../images/wind.png";

//Styles
import "./modal.scss";

const Modal = ({isOpen, setIsOpen, ...props}) => {

    const {data, date, temp, tempFeels, weatherName, 
          weatherStatus, pressure, wind, doValueFixed, doUppercaseFirstLetter, 
          getWeekDay, getMonth, getDayOfTheMonth } = props;

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
                    <div className="modal__description-item">
                        <div className="modal__icon">
                            <img src={Temp} alt="Temperature" />
                        </div>
                        <div className="modal__description-title">Температура</div>
                        <div className="modal__description-text">
                            {`${doValueFixed(temp)}° ощущается как ${doValueFixed(tempFeels)}°`}
                        </div>
                    </div>
                    <div className="modal__description-item">
                        <div className="modal__icon">
                            <img src={Pressure} alt="Pressure" />
                        </div>
                        <div className="modal__description-title">Давление </div>
                        <div className="modal__description-text">
                            {`${pressure} мм ртутного столба`}
                        </div>
                    </div>
                    <div className="modal__description-item">
                        <div className="modal__icon">
                            <img src={Precipitation} alt="Precipitation" />
                        </div>
                        <div className="modal__description-title">Осадки</div>
                        <div className="modal__description-text">
                            {weatherStatus}
                        </div>
                    </div>
                    <div className="modal__description-item">
                        <div className="modal__icon">
                            <img src={Wind} alt="Wind" />
                        </div>
                        <div className="modal__description-title">Ветер</div>
                        <div className="modal__description-text">{`${doValueFixed(wind)} м/с`}</div>
                    </div>
                </div>
                <div className="modal__close"></div>
            </div>
        </div>
    )
}

export default Modal;