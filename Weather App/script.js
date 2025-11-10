let cityInput = document.getElementById("city");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

let API_KEY = "34e0af00f710eaced4ee171a53461d32";

function getWeather(){
  let city = cityInput.value.trim();
      if(!city){
       output.innerHTML = `<span style="color:red;">Please enter a city name.</span>`;
      return
    }
    btn.disabled=true;
    output.innerHTML = `<div class="spinner"></div>`;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    if(data.cod=== "404"){
      output.innerHTML = `<span style="color:red;">City not found. Please try again!</span>`;
    }else{
      output.innerHTML = `
    <div class="weather-card">
       <p><b>🏙️ City:</b> ${data?.name ?? "Unknown"}</p>
       <p><b>🌡️ Temperature:</b> ${data?.main?.temp ?? "--"}°C</p>
       <p><b>🌦️ Condition:</b> ${data?.weather?.[0]?.description ?? "Not available"}</p>
       <p><b>💧 Humidity:</b> ${data?.main?.humidity ?? "--"}%</p>
    </div>
`;
     cityInput.value = "";
     cityInput.focus();
    }
  }).catch(err=>{
      
      console.log(err)
  }).finally(()=>{
    btn.disabled=false;
  })
}

btn.addEventListener("click", getWeather)

cityInput.addEventListener("keydown", (event)=>{
  if(event.key === "Enter"){
    console.log(event);
    getWeather()
  }
});
