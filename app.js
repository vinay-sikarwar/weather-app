const inputBtn = document.querySelector(".location input");
const search = document.querySelector(".btn");
const temp = document.querySelector('.temperature');
const description = document.querySelector('.des');
const humidity = document.querySelector('.perc');
const speed = document.querySelector('.speed');
const image = document.querySelector('.imageWeather');

const imageURL = 'https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/';

search.addEventListener('click',() =>{
    var city = inputBtn.value;

    fetchWeatherData(city);
})

const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6034588270msh46596f4c1c55a5cp1fcc54jsn49a95577eec9',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

// Define an async function to use the 'await' keyword
async function fetchWeatherData(city) {
	try {
		const response = await fetch(`${url}${city}&format=json&u=f`, options);
		const result = await response.json();  // Use .json() to parse the response as JSON

        const temperature = Math.round((result.current_observation.condition.temperature - 32) * 5/9);
        temp.innerHTML = `${temperature}°C`;
        const descr = result.current_observation.condition.text;
        description.innerHTML = `${descr}`;

        const humid = result.current_observation.atmosphere.humidity;
        const spd = result.current_observation.wind.chill;
        humidity.innerHTML = `${humid}%`;
        speed.innerHTML = `${spd}Km/h`;

		const code = result.current_observation.condition.code;
		image.src = `${imageURL}${code}d.png`;



        // const condition = 

		console.log(result);
	} catch (error) {
		console.error('Error:', error);
	}
}

// Call the async function
// fetchWeatherData();
