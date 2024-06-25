import {useDispatch} from "react-redux";
import * as profileClient from "../Account/client";
import * as circleClient from "../Circles/client";
import {setCurrentUser} from "../Account/reducer";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {joinCircle} from "../Circles/client";


export default function AddPersonPopup (
    {circleId}: {circleId: any}
){
    const [profilesNotInCircle, setProfilesNotInCircle] = useState([]);
    const [newPerson , setNewPerson] = useState({_id: ""});
    const addPerson = async () =>  {
        if (!newPerson) return;

        await circleClient.joinCircle(circleId, newPerson._id);
    }

    const fetchProfilesNotInCircle = async () => {
        const profiles = await profileClient.findProfilesNotInCircle(circleId);
        setProfilesNotInCircle(profiles);
    }

    useEffect(() => {
        fetchProfilesNotInCircle();
    },[]);

    return (
        <div id="wd-add-person-to-circle"
             className="modal fade"
             data-bs-backdrop="static"
             data-bs-keyboard="false">
            <div className="modal-dialog ">
                <div className="modal-content wd-bg-jet">
                    <div className="modal-header wd-jet-border">
                        <h1 className="modal-title fs-5 wd-primary-font" id="staticBackdropLabel">
                            Choose which person you want to add to this circle!
                        </h1>
                        <button type="button" className="btn-close wd-green-yellow" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body wd-jet-border wd-secondary-font">
                        {
                            profilesNotInCircle.map((profile: any) => (
                                <div key={`profile-${profile._id}`}
                                     className={`d-flex justify-content-between align-items-center mb-3
                                     ${(profile._id === newPerson._id) ? "wd-elite-border" : ""}`}
                                    onClick={() => setNewPerson(profile)}>
                                    <div>
                                        <img src={profile.avatar}
                                             className="wd-other-user-pic"
                                             alt="Profile Picture"
                                        />
                                        <span className="ms-2">{profile.username}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="modal-footer wd-jet-border">
                        <button type="button" className="wd-secondary-btn wd-secondary-btn-on-hover" data-bs-dismiss="modal">
                            Go Back
                        </button>
                        <button type="button"
                                data-bs-dismiss="modal"
                                className="wd-primary-btn wd-primary-btn-on-hover"
                                onClick={addPerson}
                        >
                            Add Person
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};