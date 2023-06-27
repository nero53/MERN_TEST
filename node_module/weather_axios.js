const axios = require("axios");

//axios call
const fetchWeatherData = async () => {
  try{ 
    const response = await axios("https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto");
    console.log({ response });

    //extract the relevant weather data

    const{latitude, longitude, ...rest}= response.data;
    return(rest);
  }catch(error) {
    throw new Error("Failed to fetch weather data");
  }

};

//usage example (inside an async function)
async function getWeather() {
  const data = await fetchWeatherData();
  console.log(data);      

    
};


//call the async function to fetch and displaay the weather data
getWeather();