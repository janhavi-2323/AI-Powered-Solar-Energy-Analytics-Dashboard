import { useEffect, useState } from "react"

import { useWeather }
from "../context/weatherContext"

import {
  getSolarAdvice
}
from "../services/gemini"

import ScoreCard
from "./ScoreCard"

import Notification
from "./Notification"

import Loading
from "./Loading"

import {
  FaVolumeUp,
  FaStop
} from "react-icons/fa"

function AICard() {

  const {
    weather
  } =
    useWeather()

  const [
    advice,
    setAdvice
  ] =
    useState("")

  const [
    loading,
    setLoading
  ] =
    useState(false)

  const [
    notification,
    setNotification
  ] =
    useState("")

  useEffect(() => {

    async function loadAI() {

      if (!weather)
        return

      setLoading(true)

      try {

        const temp =
          weather.main.temp

        const cloud =
          weather.clouds.all

        const prediction =

          Math.max(
            10,
            20 +
            temp * 0.2 -
            cloud * 0.15
          )
          .toFixed(1)

        const result =

          await getSolarAdvice(
            temp,
            cloud,
            prediction
          )

        setAdvice(
          result
        )

        setNotification(
          "🤖 AI recommendation generated"
        )

        setTimeout(() => {

          setNotification("")

        }, 3000)

      }

      catch {

        setAdvice(
          "AI unavailable"
        )

      }

      setLoading(false)

    }

    loadAI()

  }, [weather])

  function speakAdvice() {

  if (!advice)
    return

  const speech =
    new SpeechSynthesisUtterance(
      advice
    )

  speech.lang = "en-US"
  speech.rate = 1
  speech.pitch = 1

  window.speechSynthesis.speak(
    speech
  )

}

function stopSpeaking() {

  window.speechSynthesis.cancel()

}

  if (!weather) {

    return (

      <div
        className="
          bg-white
          rounded-xl
          shadow
          p-6
          mt-6
        "
      >

        Search city to activate AI

      </div>

    )

  }

  const temperature =
    weather.main.temp

  const cloud =
    weather.clouds.all

  const prediction =

    Math.max(
      10,
      20 +
      temperature * 0.2 -
      cloud * 0.15
    )
    .toFixed(1)

  return (

    <div
      className="
        bg-white
        rounded-xl
        shadow
        p-6
        mt-6
      "
    >

      <Notification
        message={notification}
      />

      <h2
        className="
          text-2xl
          font-bold
        "
      >

        🤖 AI Solar Advisor

      </h2>

      <p className="mt-3">

        Prediction:

        <b>

          {" "}
          {prediction}
          {" "}
          kWh

        </b>

      </p>

      {

        loading

        ?

        <Loading />

        :

        <>
<div
  className="
    flex
    gap-3
    mt-4
  "
>

  <button

    onClick={speakAdvice}

    className="
      flex
      items-center
      gap-2
      bg-blue-500
      text-white
      px-4
      py-2
      rounded
      hover:bg-blue-600
    "

  >

    <FaVolumeUp />

    Listen

  </button>

  <button

    onClick={stopSpeaking}

    className="
      flex
      items-center
      gap-2
      bg-red-500
      text-white
      px-4
      py-2
      rounded
      hover:bg-red-600
    "

  >

    <FaStop />

    Stop

  </button>

</div>

          <div
            className="
              mt-5
              whitespace-pre-line
            "
          >

            {advice}

          </div>

        </>

      }

      <ScoreCard
        prediction={prediction}
        cloud={cloud}
      />

    </div>

  )

}

export default AICard