import { Link, useLocation } from "react-router-dom";
import { BsGlobe, BsEyeFill, BsSearch } from "react-icons/bs";
import React, { ReactElement } from "react";
import {GiDoubleFaceMask, GiWarlockEye} from "react-icons/gi";
import {useSelector} from "react-redux";

export default function CabalNavigation(): ReactElement {
    const currentUser =
        useSelector((state: any) => state.accountReducer)["currentUser"];
    const {pathname} = useLocation();
    const links = [
        (!currentUser)
            ? { label: "Sign In", path: "/SignIn", includesPath: "/SignIn", icon: GiDoubleFaceMask }
            : { label: "My Profile",  path: `/Profile`, includesPath: `/Profile/u/`, icon: GiDoubleFaceMask },
        { label: "Search", path: `/Search`, includesPath:`/Search`, icon: BsSearch  },
        { label: "Feed", path: `/Feed`, includesPath:`/Feed`, icon: BsEyeFill },
        { label: "Circles", path: `/Circles`,includesPath:`/Circles`,  icon: BsGlobe },
    ];
    return (
        <div id="nav-bar"
             className="p-3 px-4 mb-2 wd-bg-jet wd-green-yellow wd-primary-font"
        >
            <div className="d-none d-md-block d-md-flex align-items-center">
                <Link key={"/Home"} to={"/Home"}
                      className={`d-none d-sm-block fs-2 d-flex align-items-center text-decoration-none wd-green-yellow`}
                >
                    <GiWarlockEye className="fs-1 mb-2 me-2"/> Cabal
                </Link>
                <div className="flex-fill"/>
                {links.map((link) => (
                    <Link key={link.path}
                          to={link.path}
                          className={`fs-4 ms-3 d-flex text-decoration-none wd-green-yellow
                      ${pathname.includes(link.includesPath) ? "wd-green-yellow-bot-border" : ""}`}
                    >
                        {link.icon({className: "fs-3 me-1"})}
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className="d-md-none d-flex align-items-center">
                <Link key={"/Home"} to={"/Home"}
                      className={`d-none d-sm-block fs-3 d-flex align-items-center text-decoration-none wd-green-yellow`}
                >
                    <GiWarlockEye className="fs-2 mb-2 me-2"/> Cabal
                </Link>
                <div className="flex-fill"/>
                {links.map((link) => (
                    <Link key={link.path}
                          to={link.path}
                          className={`ms-2 d-flex text-decoration-none wd-green-yellow
                      ${pathname.includes(link.includesPath) ? "wd-green-yellow-bot-border" : ""}`}
                    >
                        {link.icon({className: "fs-4 me-1"})}
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

