// clouds: https://i.ytimg.com/vi/Wimkqo8gDZ0/maxresdefault.jpg
// clear: https://img.freepik.com/premium-photo/nature-sky-with-sunset-summer-environment-weather-background-vintage-color-tone-effect_1484-2487.jpg
// rain: https://s3.amazonaws.com/static.beavercountyradio.com/wp-content/uploads/2019/05/27071943/rain.jpg
// snow: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5unfmKbunhAdEpBqp7oNOfv-cYFKwaFeTB-hlyImQSw&usqp=CAU&ec=48600113
// else: https://brightpunjabexpress.com/wp-content/uploads/2020/11/foggy-weather.png
// example: 
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=35d3fb6cb7ff970ced28cb23e3ee8a22
function getWeather(cityName, units="imperial") {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=${units}`).
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
                <button id='convert'>F / C</button>
            </div>
        `
        document.querySelector('#convert').addEventListener('click', (e) => {
            if (units === 'imperial'){
                units = 'metric'
            } else{
                units = 'imperial'
            }
    
            getWeather(cityName,units)
        })
        setWeatherBackground(weather.main.toLowerCase());

    })
}

function setWeatherBackground(weather) {

  document.body.classList.remove("clouds", "clear", "rain", "snow", "thunderstorm");
  if (["clouds", "clear", "rain", "snow", "thunderstorm"].includes(weather)) {
    document.body.classList.add(weather);
  } else {
    document.body.classList.add("else");
  }
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