    const city = document.getElementById("city"); 
    const send = document.getElementById("send"); 
    const cloud = document.getElementById("cloud"); 
    const temp = document.getElementById("temp"); 
    const pressure = document.getElementById("pressure"); 
    const humidity = document.getElementById("humidity"); 
    const windspeed = document.getElementById("windspeed"); 

    city.addEventListener("keyup", function(event) {
        if(event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("send").click();
        }
    });

    send.addEventListener("click", () => {
        let cityName = city.value; 
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=fe6ce2a62a074cf3d6ae77a4136b06b1`;
        getData(url);
    }); 

    async function getData(url) {
        try {
            let data = await (await fetch(url)).json(); 
            cloud.textContent = cloud.textContent + data.weather[0].description; 
            temp.textContent = temp.textContent + (data.main.temp - 273.15).toFixed(2); 
            pressure.textContent = pressure.textContent + data.main.pressure; 
            humidity.textContent = humidity.textContent + data.main.humidity; 
        } catch(error) {
            console.log(error);
        }
    }