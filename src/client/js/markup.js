export let markup = {};

markup.loader = `
<svg class="loader" viewBox="0 0 24 24">
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
    <circle class="loader__value" cx="12" cy="12" r="10" />
</svg>`;

markup.response = (apiData = {}, userInput = {}) => {

    const dayjs = require('dayjs');


    return `
    <h1>${apiData.geonames.geonames[0].name}, ${apiData.geonames.geonames[0].countryName}</h1>
    <h3>for ${userInput.duration} days from ${userInput.startDateText} to ${userInput.endDateText}<br>
    You will start your trip ${userInput.countdown}!</h3>

    <h3>Weather in the next three days:</h3>
<div class="weather-box">
    <div class="day">
        <span class="date">${dayjs(apiData.weatherbit.data[0].datetime).format('MMM. D')}</span>
        <span class="temperature">${apiData.weatherbit.data[0].min_temp} to ${apiData.weatherbit.data[0].max_temp}°C</span>
        <img class="icon" src=https://www.weatherbit.io/static/img/icons/${apiData.weatherbit.data[0].weather.icon}.png />
        <span class="description">${apiData.weatherbit.data[0].weather.description}</span>
    </div>
    <div class="day">
        <span class="date">${dayjs(apiData.weatherbit.data[1].datetime).format('MMM. D')}</span>
        <span class="temperature">${apiData.weatherbit.data[1].min_temp} to ${apiData.weatherbit.data[1].max_temp}°C</span>
        <img class="icon" src=https://www.weatherbit.io/static/img/icons/${apiData.weatherbit.data[1].weather.icon}.png />
        <span class="description">${apiData.weatherbit.data[1].weather.description}</span>
    </div>
    <div class="day">
        <span class="date">${dayjs(apiData.weatherbit.data[2].datetime).format('MMM. D')}</span>
        <span class="temperature">${apiData.weatherbit.data[2].min_temp} to ${apiData.weatherbit.data[2].max_temp}°C</span>
        <img class="icon" src=https://www.weatherbit.io/static/img/icons/${apiData.weatherbit.data[2].weather.icon}.png />
        <span class="description">${apiData.weatherbit.data[2].weather.description}</span>
    </div>
</div>
    `;
};