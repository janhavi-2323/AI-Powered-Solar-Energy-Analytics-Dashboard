import axios from "axios"

const API_KEY =
  import.meta.env.VITE_OPENROUTER_API_KEY

// Dashboard AI Advice
export async function getSolarAdvice(
  temperature,
  cloud,
  prediction
) {

  const prompt = `
You are a solar energy advisor.

Temperature: ${temperature}°C
Cloud Cover: ${cloud}%
Predicted Energy: ${prediction} kWh

Generate:

Solar Health:
🟢 Excellent / 🟡 Moderate / 🔴 Poor

Prediction:
(One short sentence)

Recommendations:
✓ Recommendation 1
✓ Recommendation 2
✓ Recommendation 3

Keep response under 100 words.
`

  const res = await axios.post(

    "https://openrouter.ai/api/v1/chat/completions",

    {
      model: "openai/gpt-oss-20b:free",

      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    },

    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,

        "HTTP-Referer":
          "http://localhost:5173",

        "X-Title":
          "AI Solar Dashboard",

        "Content-Type":
          "application/json"
      }
    }

  )

  return res.data.choices[0].message.content
}

// AI Chat Assistant
export async function askSolarAI(
  question
) {

const prompt = `
You are an AI Solar Energy Assistant.

Answer naturally and clearly.

Rules:
- Do NOT use tables.
- Do NOT use markdown.
- Do NOT use ** symbols.
- Use simple bullet points when listing items.
- Keep formatting clean and readable.

Question:
${question}
`

  const res = await axios.post(

    "https://openrouter.ai/api/v1/chat/completions",

    {
      model: "openai/gpt-oss-20b:free",

      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    },

    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,

        "HTTP-Referer":
          "http://localhost:5173",

        "X-Title":
          "AI Solar Dashboard",

        "Content-Type":
          "application/json"
      }
    }

  )

  return res.data.choices[0].message.content
}