import {useDispatch, useSelector} from "react-redux";
import * as client from "../Account/client";
import {setCurrentUser} from "../Account/reducer";
import {useNavigate} from "react-router";

export default function BecomeSheeplePopup(
    {currentUser}: {currentUser: any}
){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isElite = currentUser?.role === "elite";
    const becomeSheeple = async () =>  {
        await client.updateProfile({...currentUser, role: "user"});
        dispatch(setCurrentUser({...currentUser, role: "user"}));
        navigate("/Feed/All");
    }
    return (
        <div id="wd-become-sheeple"
             className="modal fade"
             data-bs-backdrop="static"
             data-bs-keyboard="false">
            <div className="modal-dialog ">
                <div className="modal-content wd-bg-jet">
                    <div className="modal-header wd-jet-border">
                        <h1 className="modal-title fs-5 wd-primary-font" id="staticBackdropLabel">
                            {(isElite) ? "Downgrading to a Sheeple?" : "Choosing to stay a Sheeple?"}
                        </h1>
                        <button type="button" className="btn-close wd-green-yellow" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body wd-jet-border wd-secondary-font">
                        {(isElite)
                            ? "You are already an Elite, why would you go back? It is your choice, of course, but we don't approve."
                            : "It is your choice, of course, but we don't approve."}
                    </div>
                    <div className="modal-footer wd-jet-border">
                        <button type="button" className="wd-secondary-btn wd-secondary-btn-on-hover" data-bs-dismiss="modal">
                            Go Back
                        </button>
                        <button type="button"
                                data-bs-dismiss="modal"
                                className="wd-primary-btn wd-primary-btn-on-hover"
                                onClick={becomeSheeple}
                        >
                            Be a Sheeple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};