import Layout from "../components/Layout"

function HistoryPage() {

  const history = JSON.parse(
    localStorage.getItem("solar-history")
  ) || []

  return (

    <Layout>

      {
        history.length === 0

        ?

        <div
          className="
          bg-white
          p-6
          rounded-xl
          shadow
          "
        >

          No saved predictions found.

        </div>

        :

        <div
          className="
          bg-white
          rounded-xl
          shadow
          p-6
          "
        >

          {
            history.map(

              (item,index)=>(

                <div

                  key={index}

                  className="
                  border-b
                  py-4
                  "

                >

                  <h3
                    className="
                    text-xl
                    font-semibold
                    "
                  >

                    {item.city}

                  </h3>

                  <p>

                    Prediction:
                    {" "}
                    {item.prediction}
                    {" "}
                    kWh

                  </p>

                  <p>

                    Solar Score:
                    {" "}
                    {item.score}

                  </p>

                </div>

              )

            )
          }

        </div>

      }

    </Layout>

  )

}

export default HistoryPage