import axios from "axios"

const API_KEY =
"eee4ed51e60d384b69a4e104b0eecb6d"

export async function getWeather(city){

const res =
await axios.get(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

)

return res.data

}