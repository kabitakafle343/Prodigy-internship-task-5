let input = document.getElementById("input");
let btn = document.getElementById('search');
let temp = document.getElementById('temp');
let cityName = document.getElementById("city");
let speed = document.getElementById('speed');
let img=document.getElementById('imgg')
let humidity = document.getElementById('humidity');
let ApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let ApiKey = "1fa9ff4126d95b8db54f3897a208e91c";

let content = document.getElementById('contentt');

content.style.display='none'

let fetchApi=async(city)=>{
    try{
let response=await fetch(ApiUrl+city+"&appid="+ApiKey);
let data=await response.json();
console.log(data);
cityName.textContent = ` ${data.name}`;
temp.textContent= `${(data.main.temp - 273.15).toFixed(2)} °C`;;
humidity.textContent=`Humidity: ${data.main.humidity}%`;
speed.textContent=`Speed: ${data.wind.speed}km/hr`;
if(data.weather[0].main=='Clouds'){
img.src="images/clouds.png"
}
else if(data.weather[0].main=='Clear'){
img.src="images/clear.png"
}
else if(data.weather[0].main=='Drizzle'){
img.src="images/drizzle.png"
}
else if(data.weather[0].main=='Rain'){
img.src="images/rain.png"
}
else if(data.weather[0].main=='Mist'){
    img.src="images/mist.png"
    }


    }catch(error){
        console.log(error)

    }
}

btn.addEventListener('click',()=>{
    fetchApi(input.value)
    content.style.display='block'
})
