import { useState } from "react"
import { getWeather } from "../services/weather"
import { useWeather } from "../context/weatherContext"

function WeatherCard() {

  const [city, setCity] =
    useState("Ahmedabad")

  const [
    weatherData,
    setWeatherData
  ] =
    useState(null)

  const [
    loading,
    setLoading
  ] =
    useState(false)

  const {
    setWeather
  } =
    useWeather()

  async function fetchWeather() {

    setLoading(true)

    try {

      const data =
        await getWeather(city)

      setWeatherData(data)

      setWeather(data)

    }

    catch (error) {

      console.log(error)

      alert(
        "Weather fetch failed"
      )

    }

    finally {

      setLoading(false)

    }

  }

  return (

    <div
      className="
        bg-white
        rounded-xl
        shadow
        p-6
      "
    >

      <h2
        className="
          text-xl
          font-bold
        "
      >

        Weather

      </h2>

      <input

        value={city}

        onChange={(e) =>
          setCity(
            e.target.value
          )
        }

        className="
          border
          p-2
          w-full
          mt-4
          rounded
        "

      />

      <button

        onClick={fetchWeather}

        disabled={loading}

        className="
          bg-green-500
          text-white
          px-4
          py-2
          mt-3
          rounded
        "

      >

        {
          loading

          ?

          "Loading..."

          :

          "Search"
        }

      </button>

      {

        loading

        &&

        <div
          className="
            flex
            items-center
            gap-3
            mt-4
          "
        >

          <div
            className="
              w-5
              h-5
              border-4
              border-green-500
              border-t-transparent
              rounded-full
              animate-spin
            "
          />

          <span>

            Loading weather...

          </span>

        </div>

      }

      {

        weatherData && !loading && (

          <div
            className="
              mt-6
            "
          >

            <h1
              className="
                text-4xl
              "
            >

              {
                weatherData.main.temp
              }

              °

            </h1>

            <p>

              {
                weatherData.weather[0].main
              }

            </p>

            <p>

              Cloud:

              {
                weatherData.clouds.all
              }%

            </p>

          </div>

        )

      }

    </div>

  )

}

export default WeatherCard