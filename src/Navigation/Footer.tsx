import React, { ReactElement } from "react";
import {FaGithub, FaServer} from "react-icons/fa";

export default function Footer(): ReactElement {
    const links = [
        { label: "Client GitHub", path: `https://github.com/AveragelyIntelligentBird/shadow-club`, icon: FaGithub },
        { label: "Server GitHub", path: `https://github.com/tntmancer/shadow-server`,  icon: FaServer },
    ];
    return (
        <div id="footer-bar"
             className="fs-5 p-2 px-4 wd-bg-jet wd-green-yellow wd-secondary-font d-lg-flex"
        >
            <div className="d-flex align-items-center">
                {links.map((link) => (
                    <a href={link.path}
                       target="_blank"
                       rel="noreferrer"
                       className={`me-4 d-flex align-items-center text-decoration-none wd-green-yellow`}
                    >
                        {link.icon({className: "me-2"})}
                        {link.label}
                    </a>
                ))}
            </div>
            <div className="flex-fill"/>
            <div className="pt-3 pt-lg-0">
                CS5610 Final Project - Anfisa Bogdanenko and Tim Bennett
            </div>
        </div>
    );
};

