import { useState } from "react"
import { getSolarAdvice } from "../services/gemini"

function GeminiTest() {

  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  async function testAI() {

    try {

      setLoading(true)

      const result =
        await getSolarAdvice(
          38,
          20,
          24.6
        )

      setResponse(result)

    } catch (error) {

      console.log(error)

      setResponse(
        "AI request failed"
      )

    } finally {

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
      mt-6
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-4
        "
      >

        Gemini AI Test

      </h2>

      <button
        onClick={testAI}
        className="
        bg-blue-500
        text-white
        px-4
        py-2
        rounded
        "
      >

        Test AI

      </button>

      {
        loading &&
        <p className="mt-4">
          Thinking...
        </p>
      }

      {
        response &&
        <div className="mt-4">
          {response}
        </div>
      }

    </div>

  )

}

export default GeminiTest