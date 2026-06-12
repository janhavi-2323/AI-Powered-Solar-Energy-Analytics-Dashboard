import { useState, useEffect } from "react"

import Layout from "../components/Layout"

import StatsCards from "../components/StatsCards"
import EnergyChart from "../components/EnergyChart"
import WeatherCard from "../components/WeatherCard"
import AICard from "../components/AICard"
import History from "../components/History"
import QuickActions from "../components/QuickActions"
import Notification from "../components/Notification"

import { generatePDF }
from "../components/PDFReport"

import { useWeather }
from "../context/weatherContext"

function Dashboard() {

  const { weather } =
    useWeather()

  const [
    history,
    setHistory
  ] =
    useState(

      JSON.parse(

        localStorage.getItem(
          "solar-history"
        )

      )

      ||

      []

    )

  const [
    notification,
    setNotification
  ] =
    useState("")

  useEffect(() => {

    if (!weather)
      return

    const city =
      weather.name

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

    const score =

      Math.min(
        100,
        prediction * 4
      )
      .toFixed(0)

    const exists =

      history.some(

        item =>

          item.city === city

      )

    if (exists)
      return

    const newItem = {

      city,

      prediction,

      score

    }

    const updated = [

      newItem,

      ...history

    ]

    setHistory(
      updated
    )

    localStorage.setItem(

      "solar-history",

      JSON.stringify(
        updated
      )

    )

    setNotification(

      `✅ ${city} updated successfully`

    )

    setTimeout(() => {

      setNotification("")

    }, 3000)

  },

  [weather])

  return (

    <Layout>

      <Notification

        message={
          notification
        }

      />

     <QuickActions

  onExport={() => {

    if (!weather) return

const city =
  weather.name

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
  ).toFixed(1)

const savings =
  Math.round(
    prediction * 5
  )

const score =
  Math.min(
    100,
    prediction * 4
  ).toFixed(0)

generatePDF(
  city,
  temp,
  cloud,
  prediction,
  savings,
  score
)

    setNotification(
      "📄 Report exported successfully"
    )

    setTimeout(() => {

      setNotification("")

    }, 3000)

  }}

/>
      <StatsCards />

      <div
        className="
          grid
          grid-cols-3
          gap-5
          mt-6
        "
      >

        <div
          className="
            col-span-2
          "
        >

          <EnergyChart />

        </div>

        <WeatherCard />

      </div>

      <AICard />

      <History
        history={history}
      />

    </Layout>

  )

}

export default Dashboard