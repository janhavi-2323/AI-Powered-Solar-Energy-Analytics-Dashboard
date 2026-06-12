import {
Link
}
from "react-router-dom"

import {
FaSolarPanel,
FaChartLine,
FaRobot,
FaHistory,
FaCog
}
from "react-icons/fa"

function Sidebar() {

return (

<div
  className="
    w-[240px]
    min-h-screen
    sticky
    top-0
    bg-gradient-to-b
    from-slate-900
    to-blue-950
    text-white
    p-6
  "
>

<h1
className="
text-2xl
font-bold
mb-10
"
>

☀ AI Solar

</h1>


<div className="space-y-6">

<Link
to="/"
className="
flex
items-center
gap-3
"
>
<FaSolarPanel />
Dashboard
</Link>


<Link
to="/analytics"
className="
flex
items-center
gap-3
"
>
<FaChartLine />
Analytics
</Link>


<Link
to="/ai"
className="
flex
items-center
gap-3
"
>
<FaRobot />
AI Center
</Link>


<Link
to="/history"
className="
flex
items-center
gap-3
"
>
<FaHistory />
History
</Link>


<Link
to="/settings"
className="
flex
items-center
gap-3
"
>
<FaCog />
Settings
</Link>

</div>

</div>

)

}

export default Sidebar