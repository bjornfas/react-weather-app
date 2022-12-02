
//Возвращает округленное значение
export const doValueFixed = (value) => {
    return value.toFixed(0);
}

//Преобразует первый символ значения в заглавный
export const doUppercaseFirstLetter = (value) => {
   return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

//Возвращает значение месяца
export const getMonth = (date) => {
   return new Date(date * 1000).toLocaleString('ru-RU', { month: 'short' });
}

//Возвращает число ммесяца
export const getDayOfTheMonth = (date) => {
   const dateNow = new Date(date * 1000);
   const dayOfTheMonth = dateNow.getDate();
   return dayOfTheMonth;
}

//Возвращает день недели
export const getWeekDay = (date) => {
   const weeekDay = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
   const days = weeekDay[new Date(date * 1000).getDay()];
   return days;
}