import { useNavigate }
from "react-router-dom"

function QuickActions({

  onExport

}) {

  const navigate =
    useNavigate()

  return (

    <div
      className="
        flex
        gap-4
        mb-6
      "
    >

      <button

        onClick={()=>
          window.location.reload()
        }

        className="
          bg-blue-500
          text-white
          px-5
          py-2
          rounded
        "

      >

        🔄 Refresh

      </button>

      <button

        onClick={
          onExport
        }

        className="
          bg-red-500
          text-white
          px-5
          py-2
          rounded
        "

      >

        📄 Export Report

      </button>

      <button

        onClick={()=>
          navigate("/ai")
        }

        className="
          bg-purple-500
          text-white
          px-5
          py-2
          rounded
        "

      >

        🤖 Ask AI

      </button>

    </div>

  )

}

export default QuickActions