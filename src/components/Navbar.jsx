
import { useLocation } from "react-router-dom"

import {
  FaSolarPanel,
  FaChartLine,
  FaHistory,
  FaRobot,
  FaCog
} from "react-icons/fa"

function Navbar() {

  const location = useLocation()

  const name =
    localStorage.getItem("user-name")
    || "User"

  const pageConfig = {

    "/": {
      title: "Dashboard",
      icon: (
        <FaSolarPanel
          className="
            text-yellow-500
          "
        />
      )
    },

    "/analytics": {
      title: "Analytics",
      icon: (
        <FaChartLine
          className="
            text-green-500
          "
        />
      )
    },

    "/history": {
      title: "History",
      icon: (
        <FaHistory
          className="
            text-blue-500
          "
        />
      )
    },

    "/ai": {
      title: "AI Center",
      icon: (
        <FaRobot
          className="
            text-purple-500
          "
        />
      )
    },

    "/settings": {
      title: "Settings",
      icon: (
        <FaCog
          className="
            text-red-500
          "
        />
      )
    }

  }

  const current =

    pageConfig[
      location.pathname
    ]

    ||

    {
      title: "",
      icon: ""
    }

  return (

    <div
      className="
        bg-white
        rounded-xl
        p-5
        shadow
        flex
        justify-between
        items-center
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <span
          className="
            text-3xl
          "
        >
          {current.icon}
        </span>

        <h2
          className="
            text-2xl
            font-bold
          "
        >
          {current.title}
        </h2>

      </div>

      {

        location.pathname === "/"

        &&

        <div
          className="
            text-gray-700
            font-medium
          "
        >

          Hello {name} 👋

        </div>

      }

    </div>

  )

}

export default Navbar