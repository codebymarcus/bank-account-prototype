/* eslint-disable react/prop-types */
import { NavLink, Link, Outlet } from "react-router-dom";
import { Typography } from "./components/ui/Typography";
import { TYPOGRAPHY_VARIANTS } from "./components/ui/Typography/typography.const";
import { TrophyIcon, UserCircleIcon } from '@heroicons/react/20/solid';

const MAIN_LINKS = [
  {
    name: "Account",
    path: "/",
    icon: <UserCircleIcon className="h-5 w-5 text-white"/>
  },
  {
    name: "Goals",
    path: "/goals",
    icon: <TrophyIcon className="h-5 w-5 text-white"/>
  }
]

function Root() {

  const navLinkClasses = ({ isActive }) => {
    const isActiveClass = isActive ? 'bg-slate-800 text-sky-400 font-bold ' : '';

    return `p-2 rounded text-white flex flex-row gap-3 ${isActiveClass}`;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-row">
      <div className="w-1/6 h-screen bg-slate-900 flex flex-col relative">
        <div className="absolute bottom-0 text-gray-600 p-2">
          <Typography variant={TYPOGRAPHY_VARIANTS.BODY}>Code by: Mark Jason Aquiatin</Typography>
        </div>
        <div id="sidebarHeader" className="flex flex-row justify-center items-center w-full py-5 text-white">
          <Typography variant={TYPOGRAPHY_VARIANTS.CARD_TITLE}>BANKING SYSTEM</Typography>
        </div>
        <div id="sidebarLinks" className="flex flex-col gap-2 p-3">
          {MAIN_LINKS.map((link, index) => (
            <NavLink key={index} to={link.path} className={navLinkClasses}>
              {link.icon} <Typography variant={TYPOGRAPHY_VARIANTS.BODY}>{link.name}</Typography>
            </NavLink>
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
