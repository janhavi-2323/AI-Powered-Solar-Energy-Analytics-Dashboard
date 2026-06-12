function Loading() {

  return (

    <div
      className="
        flex
        items-center
        gap-3
        mt-5
      "
    >

      <div
        className="
          w-5
          h-5
          border-4
          border-blue-500
          border-t-transparent
          rounded-full
          animate-spin
        "
      />

      <span
        className="
          text-gray-600
        "
      >

        Generating AI Recommendation...

      </span>

    </div>

  )

}

export default Loading