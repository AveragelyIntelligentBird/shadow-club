import {GiWarlockEye} from "react-icons/gi";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div style={{height: "100vh"}}
             className="d-flex flex-column wd-bg-ebony align-items-center justify-content-center">
            <div className="fs-1 m-4 wd-green-yellow wd-primary-font">
                Shadow <GiWarlockEye className="fs-1 mb-4"/> Club
            </div>
            <div className="d-flex wd-bg-jet rounded-2 p-5 col-7">
                <div className="flex-grow-1">
                    <h3 className="wd-green-yellow wd-primary-font">Login</h3>
                    <form>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Username"
                                       id="usr-login-field"/>
                            </div>
                            {" "}
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10">
                                <input type="password"
                                       className="form-control"
                                       placeholder="Password"
                                       id="pwd-login-field"/>
                            </div>
                            {" "}
                        </div>
                        <Link to="/000/Profile/000/">
                            <button type="submit" className="wd-primary-btn">
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
                                       className="form-control"
                                       placeholder="Code"
                                       id="code-login-field"
                                />
                            </div>
                            {" "}
                        </div>
                        <Link to="/000/Profile/000/">
                            <button type="submit" className="wd-primary-btn">
                                Access {" "}
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}