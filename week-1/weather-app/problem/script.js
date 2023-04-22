// example: 
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=35d3fb6cb7ff970ced28cb23e3ee8a22
function getWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`).
    then(response => {
        if (!response.ok){
            throw new Error(response.status)
        } else{
            return response.json();
        }
    }).
    then(data => {
        const location = data.name;
        const weather = data.weather[0];
        const stats = data.main;
        const section = document.querySelector('#data-section')
        console.log(location)
        console.log(weather)
        console.log(stats)
        section.innerHTML = `
            <h2 id="location">${location}</h2>
            <h2 id="description">${weather.main}</h2>
            <img src="https://openweathermap.org/img/w/${weather.icon}.png" alt="">
            <h1 id="temp">${stats.temp}&deg;</h1>
            <div class="temps">
                <div class="min">
                    <div class="title">min</div>
                    <div class="temp">${stats.temp_min}&deg;</div>
                </div>
                <div class="max">
                    <div class="title">max</div>
                    <div class="temp">${stats.temp_max}&deg;</div>
                </div>
            </div>
        `
    })
}

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const submit = document.querySelector('#submit');
form.addEventListener('submit', event => {
    event.preventDefault();
    if (input.value !== ''){
        getWeather(input.value);
    }
})