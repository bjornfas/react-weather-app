
//React
import { useEffect, useState } from "react";

//Feather
import { GitHub, Send, Search } from "react-feather";

//Images
import Logo from "../../images/logo.svg";

//Styles
import "./header.scss";


const Header = ({setCity, city, setIsLoading, doUppercaseFirstLetter}) => {

    const [searchValue, setSearchValue] = useState("");
    const [mobileSearch, setMobileSearch] = useState(false);

    //Отслеживает и записывает значение input в value
    const onValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    //При отправке формы меняет значение стейта city
    const onSubmit = (e) => {
        e.preventDefault();
        setCity(doUppercaseFirstLetter(searchValue.toLowerCase()));
        setMobileSearch(false);
    }

    useEffect(()=> {
        setIsLoading(true);
    }, [city])

    return (
        <div className="container">
            <header className="header">
                <a href="/">
                    <img src={Logo} alt="Logo"/>
                </a>
                <div className="header__info">
                    <form className="search" onSubmit={onSubmit}>
                        <input 
                        className="search__input" 
                        type="text" 
                        placeholder="Введите город..."
                        spellCheck="false"
                        onChange={onValueChange} 
                        value={searchValue}/>
                        <Search size={20}/> 
                    </form>
                    <div className="header__links">
                            <form 
                            className="mobile-form" 
                            onSubmit={onSubmit} 
                            style={mobileSearch ? {display: "block"} : {display: "none"}} >
                                <input 
                                className="mobile-form__input" 
                                type="text" 
                                placeholder="Введите город..."
                                spellCheck="false"
                                onChange={onValueChange} 
                                value={searchValue}/>
                            </form>
                        <div 
                        className="header__link search-mobile" 
                        onClick={()=> setMobileSearch(!mobileSearch)}>
                            <Search size={20}/>
                        </div>
                        <a href="#" className="header__link">
                            <GitHub size={20}/>
                        </a>
                        <a 
                        href="https://t.me/+79191580978" 
                        className="header__link" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <Send size={20}/>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;