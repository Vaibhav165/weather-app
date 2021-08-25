
const form = document.querySelector('#myForm');


form.addEventListener("submit", e => {
    e.preventDefault();
    const inpval = form.elements['cityName'].value;

    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+inpval+'&appid=9a625806c7c08860001ca2cf8f9ba5cd&unit=metric';
    fetch(url,{mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);

    document.querySelector('#name').innerHTML = (data.name + ', ' + data.sys.country);
    document.querySelector('#main').innerHTML = (Math.floor(data.main.temp - 273) +' \xB0C' );
    document.querySelector('#max').innerHTML = (Math.floor(data.main.temp_max-273) + ' \xB0C');
    document.querySelector('#min').innerHTML = (Math.floor(data.main.temp_min-273) + ' \xB0C');

    document.querySelector(".desc").innerHTML= data.weather[0].description;
    document.querySelector('#wind').innerHTML = (data.wind.speed+' mph ');
    document.querySelector('#pressure').innerHTML = data.main.pressure;
    document.querySelector('#humid').innerHTML = (data.main.humidity+'%');
})
.catch(() => {
    alert("Error");
});
});
