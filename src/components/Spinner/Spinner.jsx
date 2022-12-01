
//Images
import SpinnerGif from "../../images/spinner.gif";

//Styles 
import "./spinner.scss";

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={SpinnerGif} alt="Spinner" />
        </div>
    )
}
 export default Spinner;
