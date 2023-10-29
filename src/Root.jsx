/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";

const MAIN_LINKS = [
  {
    name: "Account",
    path: "/account",
  },
  {
    name: "Goals",
    path: "/goals",
  }
]

function Root() {

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-row">
      <div className="w-1/6 h-screen bg-slate-600 flex flex-col">
        <div id="sidebarHeader">
          <Link to="/">
            Header
          </Link>
        </div>
        <div id="sidebarLinks" className="flex flex-col gap-2 p-3">
          {MAIN_LINKS.map((link, index) => (
            <Link key={index} to={link.path}>{link.name}</Link>
          ))}
        </div>
      </div>
      {/* main container area that contains all the pages */}
      <div className="w-full h-screen overflow-y-auto bg-slate-800">
        <Outlet />
      </div>
    </div>
  )
}

export default Root
