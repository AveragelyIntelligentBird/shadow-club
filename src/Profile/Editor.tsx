import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import React, { useState } from "react";
import {updateProfile} from "./reducer";
import EditorNav from "./EditorNav";
import NotFound from "../NotFound";
import {Link, Route, Routes} from "react-router-dom";
import Editor from "./EditorProfile";
import EditorSensitive from "./EditorSensitive";
import EditorLogin from "./EditorLogin";

export default function ProfileEditor() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { profileId } = useParams();
    const { profiles } = useSelector((state:any) => state.profilesReducer);
    const profileFind =
        profiles.find((user : any) => user.uid === profileId);
    const [profile, setProfile] = useState(
        profileFind ? {...profileFind, hasChanged: false} : profileFind
    );
    return (
        (!profile)
            ?
            <NotFound subject="User"/>
            :
            <div id="" className="d-flex justify-content-center">
                <div className="d-flex col-8 wd-default-card py-4 px-5">
                    <EditorNav/>
                    <div className="wd-vert-divider mx-5"/>
                    <div className="d-flex flex-fill flex-column pb-2">
                        <Routes>
                            <Route path="Profile" element={<Editor profile={profile} setProfile={setProfile}/>}/>
                            <Route path="Sensitive" element={<EditorSensitive profile={profile} setProfile={setProfile}/>}/>
                            <Route path="Login" element={<EditorLogin profile={profile} setProfile={setProfile}/>}/>
                        </Routes>
                        <div className="align-items-center d-flex">
                            <button className="wd-primary-btn wd-primary-btn-on-hover me-2"
                                    onClick={() => {
                                        dispatch(updateProfile(profile));
                                        setProfile({...profile, hasChanged: false});
                                    }}>
                                Save
                            </button>
                            <button className="wd-secondary-btn wd-secondary-btn-on-hover me-2"
                                    onClick={() => setProfile({...profileFind, hasChanged: false})}>
                                Revert
                            </button>
                            {(!profile.hasChanged)
                                ?
                                <Link to={`../Profile/${profileId}`} className="wd-camb-blue wd-color-on-hover ms-2">
                                    Back To Profile
                                </Link>
                                :
                                <div className="wd-mahogany ms-2">
                                    You have unsaved changes!
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
}