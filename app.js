//select elements 

const iconElement = document.querySelector('.weather.icon');
const tempElement = document.querySelector('.temperature.value p');
const descElement = document.querySelector('.temperature-description');
const locationElement = document.querySelector('.location p');
const notificationElement = document.querySelector('.notification');

//App data 
const weather = {};
weather.temperature = {

    unit: 'Celsius'
};

//Const and Variables 
const KELVIN = 273;
// api key
const keyElement = "66b35a1742a3d32e0c2c53c4e8859a81";

// check if browser supports geolocation


if ('geolocation' in navigator) {

    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
else {
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = `<p> Browser doesn't support Geolocalisation`;
}

//set user position
function setPosition(position) {

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

//show error when issue with geolocalisation

function showError(error) {

    notificationElement.style.display = 'block';
    notificationElement.innerHTML = `<p> ${error.message}`;
}

function getWeather(latitude, longitude) {
    //let api = `http://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${keyElement} `;
    let api = `https://api.coindesk.com/v1/bpi/currentprice.json`;
    console.log(api);
}


//get weather from API Provider






