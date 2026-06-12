import StatCard from "./StatCard"

function StatsCards() {

  return (

    <div
      className="
      grid
      grid-cols-3
      gap-5
      mt-6
      "
    >

      <StatCard
        title="Energy Today"
        value="24.8 kWh"
      />

      <StatCard
        title="Savings"
        value="₹125"
      />

      <StatCard
        title="Efficiency"
        value="92%"
      />

    </div>

  )

}

export default StatsCards