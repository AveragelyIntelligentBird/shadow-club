import {GiWarlockEye} from "react-icons/gi";
import React from "react";
import { ImCross, ImCheckmark  } from "react-icons/im";
import {useSelector} from "react-redux";
import BecomeSheeplePopup from "./BecomeSheeplePopup";
import BecomeElitePopup from "./BecomeElitePopup";
import {useNavigate} from "react-router";

export default function BecomeElite() {
    const sheepleFeatures = [
        "Lame profile and post styling",
        "Ads everywhere",
        "Everyone knows you're a sheeple",
    ];
    const eliteFeatures = [
        "Stunning profile and post styling",
        "Ad-free experience",
        "Everyone can see you're one of the Elite",
    ];

    const currentUser = useSelector((state: any) => state.accountReducer)["currentUser"];
    const navigate = useNavigate();

    return (
        (currentUser.role === "overseer")
            ?
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <div
                    className="wd-default-card col-10 col-md-7 p-4 py-5 my-5 wd-secondary-font d-flex justify-content-center">
                    <div>
                        <div className="fs-3 mb-4 wd-green-yellow wd-primary-font">
                            Sire Overseer, you are already The Elite among the Elites!
                        </div>
                        <button onClick={() => navigate("/Home")}
                                className="wd-primary-btn wd-primary-btn-on-hover">
                            Go back to the portal.
                        </button>
                    </div>
                </div>
            </div>
            :
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <div className="wd-default-card col-10 col-md-7 p-4 my-5 wd-secondary-font">
                    <div className="d-flex align-items-center justify-content-sm-center
                        fs-1 mb-4 wd-green-yellow wd-primary-font">
                        <div className="d-none d-sm-block">
                            <span className="fs-2 pt-1 wd-light-green">Become the </span>
                        </div>
                        <GiWarlockEye className="mx-2 mb-1"/> Cabal&nbsp;
                        <div className="d-none d-sm-block">
                            <span className="fs-2 pt-1 wd-light-green"> Elite</span>
                        </div>
                    </div>
                    <div className="row px-3">
                        <div className="col-xl-6 py-3 px-4 wd-camb-blue ">
                            <h3 className="wd-primary-font text-center">SHEEPLE</h3>
                            {
                                sheepleFeatures.map((feature, i) => (
                                    <div key={`sheeple-features-${i}`}
                                         className="d-flex mb-3 align-items-center"
                                    >
                                        <ImCross className="me-2"/>{feature}
                                    </div>
                                ))
                            }
                            <div className="d-flex justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#wd-become-sheeple"
                                        className="wd-secondary-btn wd-secondary-btn-on-hover">
                                    I want to be a regular, boring user.
                                </button>
                            </div>
                        </div>
                        <div className="col-xl-6 wd-elite-border rounded-2 px-4 py-3 wd-light-green">
                            <h3 className="wd-green-yellow wd-primary-font text-center">ELITE</h3>
                            {
                                eliteFeatures.map((feature, i) => (
                                    <div key={`elite-features-${i}`}
                                         className="d-flex mb-3 align-items-center"
                                    >
                                        <ImCheckmark className="me-2"/> {feature}
                                    </div>
                                ))
                            }
                            <div className="d-flex justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#wd-become-elite"
                                        className="wd-primary-btn wd-primary-btn-on-hover">
                                    I want to be the elite I am!
                                </button>
                            </div>
                        </div>
                    </div>
                    <BecomeSheeplePopup currentUser={currentUser}/>
                    <BecomeElitePopup currentUser={currentUser}/>
                </div>
            </div>
    );
}