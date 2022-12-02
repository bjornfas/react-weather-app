
//Components
import InfoMain from "../InfoMain/InfoMain";
import InfoSecondary from "../InfoSecondary/InfoSecondary";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

//Styles
import "./info.scss";

const Info = ({...props}) => {

    const {data, date, isLoading, error} = props;

    const errorMessage = error ? <Error/> : null;
    const spinner = isLoading ?   <Spinner/> : null;
    const contentMain = !(errorMessage || spinner) ? <InfoMain data={data} date={date} /> : null;
    const contentSecond = !(errorMessage || spinner) ? <InfoSecondary data={data} /> : null;
   
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