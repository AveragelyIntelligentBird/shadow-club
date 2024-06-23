import React, {useState} from "react";
import {GiWarlockEye} from "react-icons/gi";
import SignUpForms from "./SignUpForms";
import {useNavigate} from "react-router";
import * as client from "./client";
import {setCurrentUser} from "./reducer";
import {useDispatch} from "react-redux";

export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let todayDate = new Date();
    const today = todayDate.getFullYear() + "-" + (todayDate.getMonth()+1) + "-" + todayDate.getDate()
    const fullInit = {
        role: "user",
        username: "",
        realName: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        birthday: "",
        bio: "",
        avatar: "/images/reptiloid-1.png",
        memberSince: today,
        starSign: "",
        MBTI: "",
        following: [],
        followers: [],
        posts: [],
        replies: [],
        likes: [],
        memberOf: [],
        moderatorOf: []
    }
    const [newProfile, setNewProfile] = useState<any>(fullInit);
    const [error, setError] = useState("");

    const signup = async () => {
        if (newProfile.username === "" || newProfile.password === "") {
            setError("Username and Password are mandatory fields!");
            return;
        }

        try {
            const currentUser = await client.signup(newProfile);
            console.log(currentUser)
            dispatch(setCurrentUser(currentUser));
            navigate("/Home");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };

    return (
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <div className="wd-default-card col-10 col-md-7 p-4 my-5 wd-secondary-font">
                <div className="d-flex align-items-center justify-content-sm-center
                    fs-1 mb-4 wd-green-yellow wd-primary-font">
                    <GiWarlockEye className="mx-2 mb-1"/> Cabal&nbsp;
                    <div className="d-none d-sm-block">
                        <span className="fs-2 pt-1 wd-light-green"> welcomes thou</span>
                    </div>
                </div>
                <div id="wd-signup-form" className="wd-camb-blue px-4">
                    <SignUpForms newProfile={newProfile} setNewProfile={setNewProfile}/>
                </div>
                <div className="d-flex justify-content-end align-items-center mt-4 mx-4 mb-2">
                    {error && <span className="wd-mahogany me-2">{error}</span>}
                    <button className="wd-secondary-btn wd-secondary-btn-on-hover me-2"
                            onClick={() => navigate("/SignIn")}>
                        Back to Sign In {" "}
                    </button>
                    <button className="wd-primary-btn wd-primary-btn-on-hover"
                            onClick={signup}>
                        Sign Up {" "}
                    </button>
                </div>
            </div>
        </div>
    );
}