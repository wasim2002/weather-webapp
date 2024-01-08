const apiId = "https://api.openweathermap.org/data/2.5/weather?q=&appid=&units="
const apiKey = "5dc3fee1db79552b41b4bbf01596f55e"
const apiUnit = "metric"
let city = "kolkata"
const img = document.querySelector(".img")
const errorT = document.querySelector(".error")
const main = document.querySelector(".main")
const bottom = document.querySelector(".bottom")


async function checkWeather() {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=en&units=${apiUnit}`)
    if (data.status==404) {
        setTimeout(() => {
            errorT.style.display="block"
            
        }, 3000);
        
    } else {
        const returnData = await data.json()
        console.log(returnData.weather[0]);
        document.querySelector(".temp").innerHTML = Math.round(returnData.main.temp) + " °C"
        document.querySelector(".city_name").innerHTML = returnData.name
        document.querySelector(".percent").innerHTML = returnData.main.humidity + " %"
        document.querySelector(".speed").innerHTML = returnData.wind.speed + " km/h"
    
        if (returnData.weather[0].main == "Haze") {
            img.src = "./images/haze.png"
        }
        if (returnData.weather[0].main == "Clouds") {
            img.src = "./images/clouds.png"
        }
        if (returnData.weather[0].main == "Drizzle") {
            img.src = "./images/drizzle.png"
        }
        if (returnData.weather[0].main == "Mist") {
            img.src = "./images/mist.png"
        }
        if (returnData.weather[0].main == "Rain") {
            img.src = "./images/rain.png"
        }
        if (returnData.weather[0].main == "Snow") {
            img.src = "./images/snow.png"
        }
        if (returnData.weather[0].main == "Wind") {
            img.src = "./images/wind.png"
        }
        if(returnData.weather[0].main == "Clear"){
            img.src = "./images/clear.png"
        } 
    }
    
}

let searchInput = document.querySelector("#searchBox")
let searchButton = document.querySelector(".fa-magnifying-glass")

searchButton.addEventListener("click", () => {
    city = searchInput.value
    checkWeather()
})
searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        city = searchInput.value
        checkWeather()
    }
})
checkWeather()
