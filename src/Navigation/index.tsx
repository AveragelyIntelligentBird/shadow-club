import { Link, useLocation, useParams } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { ReactElement } from "react";
import "../index.css"


export default function CabalNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Feed", path: `/Feed`, icon: BsEyeFill },
    { label: "Circles",   path: `/Circles`, icon: BsGlobe },
    // { label: "Profile",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    // { label: "Messages",     path: "/Kanbas/Inbox",     icon: FaInbox },
  ];
  return (
    <div id="nav-bar" className="list-group rounded-0">
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item text-center border-0
              ${pathname.includes(link.label) ? "wd-green-yellow wd-bg-ebony" : "wd-ebony wd-bg-green-yellow"}`}>
          {link.icon({ className: "fs-1 "})}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
);}