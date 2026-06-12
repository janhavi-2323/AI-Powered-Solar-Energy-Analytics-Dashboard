function Notification({ message }) {

  if (!message) {
    return null
  }

  return (

    <div
      className="
        fixed
        top-5
        right-5
        bg-green-500
        text-white
        px-5
        py-3
        rounded-lg
        shadow-lg
        z-50
      "
    >

      {message}

    </div>

  )

}

export default Notification