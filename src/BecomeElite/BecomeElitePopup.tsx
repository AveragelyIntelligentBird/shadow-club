import {useDispatch} from "react-redux";
import * as client from "../Account/client";
import {setCurrentUser} from "../Account/reducer";
import {useNavigate} from "react-router";

export default function BecomeElitePopup(
    {currentUser}: {currentUser: any}
){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isElite = currentUser?.role === "elite";
    const becomeElite = async () =>  {
        await client.updateProfile({...currentUser, role: "elite"});
        dispatch(setCurrentUser({...currentUser, role: "elite"}));
        navigate("/Feed/All");
    }
    return (
        <div id="wd-become-elite"
             className="modal fade"
             data-bs-backdrop="static"
             data-bs-keyboard="false">
            <div className="modal-dialog ">
                <div className="modal-content wd-bg-jet">
                    <div className="modal-header wd-jet-border">
                        <h1 className="modal-title fs-5 wd-primary-font" id="staticBackdropLabel">
                            {(isElite) ? "Staying an Elite?" : "Upgrading to an Elite? Good call."}
                        </h1>
                        <button type="button" className="btn-close wd-green-yellow" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body wd-jet-border wd-secondary-font">
                        {(isElite)
                            ? "Don't worry, you are already an elite. The fee for the next month is already deducted from your secret bank account."
                            : "We will charge you a monthly fee from your secret bank account ourselves, so there is no more hassle for you!"}
                    </div>
                    <div className="modal-footer wd-jet-border">
                        <button type="button" className="wd-secondary-btn wd-secondary-btn-on-hover" data-bs-dismiss="modal">
                            Go Back
                        </button>
                        <button type="button"
                                data-bs-dismiss="modal"
                                className="wd-primary-btn wd-primary-btn-on-hover"
                                onClick={becomeElite}
                        >
                            {(isElite)
                            ? "Stay Elite"
                            : "Become Elite"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};