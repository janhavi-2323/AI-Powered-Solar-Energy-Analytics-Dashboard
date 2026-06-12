import Layout from "../components/Layout"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

function Analytics() {

  const history =
    JSON.parse(
      localStorage.getItem(
        "solar-history"
      )
    ) || []

  const totalSearches =
    history.length

  const avgPrediction =
    history.length > 0
      ? (
          history.reduce(
            (sum, item) =>
              sum +
              Number(item.prediction),
            0
          ) / history.length
        ).toFixed(1)
      : 0

  const bestRecord =
    history.length > 0
      ? history.reduce(
          (best, current) =>
            Number(current.prediction) >
            Number(best.prediction)
              ? current
              : best
        )
      : null

  return (

    <Layout>

      {/* Summary Cards */}

      <div
        className="
          grid
          grid-cols-3
          gap-5
        "
      >

        <div
          className="
            bg-white
            p-6
            rounded-xl
            shadow
          "
        >

          <h3>
            Total Searches
          </h3>

          <p
            className="
              text-3xl
              font-bold
              mt-2
            "
          >
            {totalSearches}
          </p>

        </div>

        <div
          className="
            bg-white
            p-6
            rounded-xl
            shadow
          "
        >

          <h3>
            Average Prediction
          </h3>

          <p
            className="
              text-3xl
              font-bold
              mt-2
            "
          >
            {avgPrediction} kWh
          </p>

        </div>

        <div
          className="
            bg-white
            p-6
            rounded-xl
            shadow
          "
        >

          <h3>
            Best City
          </h3>

          <p
            className="
              text-2xl
              font-bold
              mt-2
            "
          >
            {
              bestRecord
                ? bestRecord.city
                : "N/A"
            }
          </p>

        </div>

      </div>

      {/* Chart Section */}

      <div
        className="
          bg-white
          p-6
          rounded-xl
          shadow
          mt-6
        "
      >

        <h2
          className="
            text-xl
            font-bold
            mb-5
          "
        >
          📊 City Energy Predictions
        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart
            data={history}
          >

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="city"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="prediction"
              fill="#22c55e"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Best Prediction */}

      {
        bestRecord && (

          <div
            className="
              bg-white
              p-6
              rounded-xl
              shadow
              mt-6
            "
          >

            <h2
              className="
                text-xl
                font-bold
                mb-3
              "
            >
              🏆 Best Prediction
            </h2>

            <p>
              City: {bestRecord.city}
            </p>

            <p>
              Energy: {bestRecord.prediction} kWh
            </p>

            <p>
              Score: {bestRecord.score}
            </p>

          </div>

        )
      }

    </Layout>

  )

}

export default Analytics