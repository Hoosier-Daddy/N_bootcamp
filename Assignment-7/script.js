let city;
let cityName;
let country;
let day;
let currentTemperature;
let visibility;

// hi();

const form = document.querySelector('#form');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const searchInp = document.querySelector('#search');
	console.log(searchInp.value);
	city = searchInp.value;
	await weather(city);
	const displayData = document.querySelector('.display-data');

	let Data = `
    <h1>${cityName}, ${country}</h1>
    <p>${day}</p>
    <h1>${currentTemperature} &#176 C</h1>
    <h1>${visibility}</h1>
    
    `;
	displayData.innerHTML = Data;
});

async function weather(city) {
	const apiKey = '422e8cb75dab171d9a3569deaee3edc4';
	await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			cityName = data.name;
			country = data.sys.country;
			day = Date().substring(0, 16);
			// console.log(day);
			currentTemperature = (data.main.temp - 273.15).toFixed(2);
			visibility = data.weather[0].main;
			console.log(visibility);
		});
}
