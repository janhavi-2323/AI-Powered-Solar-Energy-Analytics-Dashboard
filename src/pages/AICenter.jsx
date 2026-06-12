import Layout from "../components/Layout"
import { useState } from "react"

import { FaMicrophone }
from "react-icons/fa"

import {
  askSolarAI
}
from "../services/aiService"

function AICenter() {

  const [question, setQuestion] =
    useState("")

  const [answer, setAnswer] =
    useState("")

  const [listening, setListening] =
    useState(false)

  async function askAI() {

    if (
      question.trim() === ""
    )
      return

    setAnswer(
      "Thinking..."
    )

    try {

      const response =
        await askSolarAI(
          question
        )

      setAnswer(
        response
      )

    }

    catch (error) {

      console.log(error)

      setAnswer(
        "Failed to get AI response."
      )

    }

  }

  function startListening() {

    const SpeechRecognition =

      window.SpeechRecognition ||

      window.webkitSpeechRecognition

    if (!SpeechRecognition) {

      alert(
        "Speech Recognition is not supported in your browser."
      )

      return

    }

    const recognition =
      new SpeechRecognition()

    recognition.lang =
      "en-US"

    recognition.start()

    setListening(
      true
    )

    recognition.onresult =
      async (event) => {

        const transcript =

          event.results[0][0]
            .transcript

        setQuestion(
          transcript
        )

        setListening(
          false
        )

        setAnswer(
          "Thinking..."
        )

        try {

          const response =

            await askSolarAI(
              transcript
            )

          setAnswer(
            response
          )

        }

        catch {

          setAnswer(
            "Failed to get AI response."
          )

        }

      }

    recognition.onerror =
      () => {

        setListening(
          false
        )

      }

    recognition.onend =
      () => {

        setListening(
          false
        )

      }

  }

  return (

    <Layout>

      <div
        className="
          bg-white
          rounded-xl
          shadow
          p-6
        "
      >

        <textarea

          value={question}

          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }

          placeholder="
Ask anything about solar energy...
"

          className="
            w-full
            border
            p-3
            rounded
          "

          rows="4"

        />

        <div
          className="
            flex
            gap-3
            mt-4
          "
        >

          <button

            onClick={askAI}

            className="
              bg-green-600
              text-white
              px-5
              py-2
              rounded
            "

          >

            Ask AI

          </button>

          <button

            onClick={startListening}

            className="
              bg-blue-600
              text-white
              px-5
              py-2
              rounded
              flex
              items-center
              gap-2
            "

          >

            <FaMicrophone />

            {

              listening

              ?

              "Listening..."

              :

              "Speak"

            }

          </button>

        </div>

        {

          answer && (

            <div
              className="
                mt-6
                bg-gray-100
                p-4
                rounded
                whitespace-pre-line
              "
            >

             {
  answer
    .replace(/\*\*/g, "")
}
            </div>

          )

        }

      </div>

    </Layout>

  )

}

export default AICenter