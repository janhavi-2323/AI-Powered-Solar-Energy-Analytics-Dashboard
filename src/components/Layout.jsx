import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <Navbar />

        <div className="mt-6">
          {children}
        </div>

      </div>

    </div>
  )
}

export default Layout