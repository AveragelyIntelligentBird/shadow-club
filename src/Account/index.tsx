import {GiWarlockEye} from "react-icons/gi";
import React from "react";
import LoginForms from "./LoginForms";

export default function SignIn() {
    return (
        <div className="d-flex flex-fill align-items-center justify-content-center">
            <div className="wd-default-card col-10 col-md-7 p-5">
                <div className="d-flex align-items-center justify-content-sm-center
                    fs-1 mb-4 wd-green-yellow wd-primary-font">
                    <GiWarlockEye className="mx-2 mb-1"/> Cabal&nbsp;
                    <div className="d-none d-sm-block">
                        <span className="fs-2 pt-1 wd-light-green"> welcomes thou</span>
                    </div>
                </div>
                <div className="wd-hor-divider my-4 d-block d-lg-none"></div>
                <LoginForms/>
            </div>
        </div>
    );
}