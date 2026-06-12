import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
}
from "recharts"

const data = [
{ day:"Mon", energy:18 },
{ day:"Tue", energy:21 },
{ day:"Wed", energy:16 },
{ day:"Thu", energy:24 },
{ day:"Fri", energy:20 },
{ day:"Sat", energy:28 },
{ day:"Sun", energy:25 }
]

function EnergyChart(){

return(

<div
className="
bg-white
rounded-xl
shadow
p-5
h-[350px]
"
>

<h2 className="text-xl font-bold mb-5">

Weekly Energy

</h2>

<ResponsiveContainer>

<LineChart data={data}>

<XAxis dataKey="day"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="energy"
stroke="#22c55e"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}

export default EnergyChart