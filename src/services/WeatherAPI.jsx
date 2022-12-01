
const _weatherBaseUrl= "https://api.openweathermap.org";
const _weatherApiKey = "c5ab95c268ce04805bfdde89b30d7a79";

//Получить текущее название города по IP
export const getCityName = async () => {
    const request = await fetch("https://ipwho.is/?lang=en&fields=city");
    if (!request.ok) {
        throw new Error(`Could not fetch url, status: ${request.status}`);
    }
    return await request.json();
}

//Получить координаты по названию города
export const getWeatherCoord= async (city) => {
    const request = await fetch(`${_weatherBaseUrl}/geo/1.0/direct?q=${city}&lang=ru&appid=${_weatherApiKey}&units=metric`);
    if (!request.ok) {
        throw new Error(`Could not fetch url, status: ${request.status}`);
    }
    return await request.json();
}

//Получить прогноз погоды на 5 дней
export const getWeather = async (longitude, latitude) => {
    const request = await fetch(`${_weatherBaseUrl}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=ru&appid=${_weatherApiKey}&units=metric`);
    if (!request.ok) {
        throw new Error(`Could not fetch url, status: ${request.status}`);
    }
    return await request.json();
}

