
//Images
import error from "../../images/error.gif";

//Styles
import "./error.scss";

const Error = () => {
    return (
        <div className="error">
            <img src={error} alt="Error" />
            <p>Что то пошло не так 	&#9785;</p>
            <p>Возможно не правильно указан город или API сервис недоступен</p>
            <p>Перезагружаю страницу...</p>
        </div>
    )
}

export default Error;