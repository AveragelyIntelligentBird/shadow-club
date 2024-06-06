import { Link, useLocation, useParams } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import React, { ReactElement } from "react";
import {GiDoubleFaceMask, GiWarlockEye} from "react-icons/gi";


export default function CabalNavigation(): ReactElement {
    const {pathname} = useLocation();
    const links = [
        { label: "Profile",  path: "Profile/000",  icon: GiDoubleFaceMask  },
        {label: "Feed", path: `Feed`, icon: BsEyeFill},
        {label: "Circles", path: `Circles`, icon: BsGlobe},
        // { label: "Messages",     path: "/Kanbas/Inbox",     icon: FaInbox },
    ];
    return (
        <div id="nav-bar"
             className="fs-2 p-3 px-4 mb-2 wd-bg-jet wd-green-yellow wd-primary-font d-flex align-items-center">
            <GiWarlockEye className="fs-1 mb-2 me-2"/> Cabal
            <div className="flex-fill"/>
            {links.map((link) => (
                <Link key={link.path}
                      to={link.path}
                      className={`fs-4 ms-3 d-flex text-decoration-none wd-green-yellow
                      ${pathname.includes(link.label) ? "wd-green-yellow-bot-border" : ""}`}
                >
                    {link.icon({className: "fs-3 me-1"})}
                    <br/>
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

