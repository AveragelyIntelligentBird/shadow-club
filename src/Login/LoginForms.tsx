import {Link} from "react-router-dom";
import React from "react";

export default function LoginForms() {
    return (
        <div className="d-flex">
            <div className="flex-fill">
                <h3 className="wd-green-yellow wd-primary-font">Login</h3>
                <form>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control wd-input-field-format"
                                   placeholder="Email"
                                   id="usr-login-field"/>
                        </div>
                        {" "}
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control wd-input-field-format"
                                   placeholder="Password"
                                   id="pwd-login-field"/>
                        </div>
                        {" "}
                    </div>
                    <Link to="/000/Profile/000/">
                        <button type="submit" className="wd-primary-btn wd-primary-btn-on-hover">
                            Sign in{" "}
                        </button>
                    </Link>
                </form>
            </div>
            <div className="wd-vert-divider mx-4"></div>
            <div className="flex-grow-1">
                <h3 className="wd-green-yellow wd-primary-font">Access Code</h3>
                <form>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control wd-input-field-format"
                                   placeholder="Code"
                                   id="code-login-field"
                            />
                        </div>
                        {" "}
                    </div>
                    <Link to="/000/Profile/000/">
                        <button type="submit" className="wd-primary-btn wd-primary-btn-on-hover">
                            Access {" "}
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}