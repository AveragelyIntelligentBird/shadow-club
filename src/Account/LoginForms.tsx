
import React, {useState} from "react";
import * as client from "./client";
import {useNavigate} from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function LoginForms() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState<any>({});
    const [error, setError] = useState("");
    const signin = async () => {
        try {
            const currentUser = await client.signin(credentials);
            dispatch(setCurrentUser(currentUser));
            navigate("/Feed/Subscribed");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };

    const handleAnonymousLogin = () => {
        client.anonymous();
        navigate("/Feed/All");
    }

    return (
        <div className="row">
            <div className="col-lg-6">
                <h3 className="wd-green-yellow wd-primary-font">Login</h3>
                <div className="col-11">
                    <input type="text"
                           className="form-control wd-input-field-format mb-3"
                           placeholder="Username"
                           id="usr-login-field"
                           value={credentials.username}
                           onChange={(e) =>
                               setCredentials({ ...credentials, username: e.target.value })}/>
                    <input type="password"
                           className="form-control wd-input-field-format mb-3"
                           placeholder="Password"
                           id="pwd-login-field"
                           value={credentials.password}
                           onChange={(e) =>
                               setCredentials({ ...credentials, password: e.target.value  })}/>
                    <button type="submit" onClick={signin} className="wd-primary-btn wd-primary-btn-on-hover">
                        Sign in{" "}
                    </button>
                    {error && <span className="mt-3 ms-2 wd-mahogany">{error}</span>}
                </div>
            </div>
            <div className="col-lg">
                <div className="d-lg-flex mb-3">
                    <div className="wd-vert-divider mx-4 d-none d-lg-block"></div>
                    <div className="wd-hor-divider my-4 d-block d-lg-none"></div>
                    <div className="pb-3">
                        <h3 className="wd-green-yellow wd-primary-font">Create Account</h3>
                        <button className="wd-primary-btn wd-primary-btn-on-hover"
                                onClick={() => navigate("/SignUp")}>
                            Sign Up {" "}
                        </button>
                    </div>
                </div>
                <div className="d-lg-flex">
                    <div className="wd-vert-divider mx-4 d-none d-lg-block"></div>
                    <div className="wd-hor-divider my-4 d-block d-lg-none"></div>
                    <div className="pb-3">
                        <h3 className="wd-green-yellow wd-primary-font">Anonymous Access</h3>
                        <button className="wd-primary-btn wd-primary-btn-on-hover"
                                onClick={() => handleAnonymousLogin()}>
                            Proceed {" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}