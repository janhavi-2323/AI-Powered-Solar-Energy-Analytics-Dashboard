import Layout from "../components/Layout"
import Notification from "../components/Notification"

import { useState } from "react"

function Settings() {

  const [name, setName] =
    useState(
      localStorage.getItem(
        "user-name"
      ) || "Janvi"
    )

  const [
    notification,
    setNotification
  ] =
    useState("")

  function saveName() {

    localStorage.setItem(
      "user-name",
      name
    )

    setNotification(
      "✅ Name saved successfully"
    )

    setTimeout(() => {

      setNotification("")

    }, 3000)

  }

  function clearHistory() {

    localStorage.removeItem(
      "solar-history"
    )

    setNotification(
      "🗑 History cleared successfully"
    )

    setTimeout(() => {

      setNotification("")

    }, 3000)

  }

  return (

    <Layout>

      <Notification
        message={notification}
      />

      <div
        className="
          bg-white
          rounded-xl
          shadow
          p-6
          space-y-6
        "
      >

        <div>

          <label
            className="
              block
              mb-2
            "
          >
            User Name
          </label>

          <input
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="
              border
              p-2
              rounded
              w-full
            "
          />

          <button
            onClick={saveName}
            className="
              bg-green-600
              text-white
              px-4
              py-2
              rounded
              mt-3
            "
          >
            Save
          </button>

        </div>

        <button
          onClick={clearHistory}
          className="
            bg-red-600
            text-white
            px-4
            py-2
            rounded
          "
        >
          🗑 Clear History
        </button>

      </div>

    </Layout>

  )

}

export default Settings
