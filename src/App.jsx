import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import AICenter from "./pages/AICenter"
import Settings from "./pages/Settings"
import HistoryPage from "./pages/HistoryPage"

function App() {

return (

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Dashboard />}
/>

<Route
path="/analytics"
element={<Analytics />}
/>

<Route
path="/ai"
element={<AICenter />}
/>

<Route
path="/history"
element={<HistoryPage />}
/>

<Route
path="/settings"
element={<Settings />}
/>

</Routes>

</BrowserRouter>

)

}

export default App