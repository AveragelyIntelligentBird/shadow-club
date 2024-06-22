import {useDispatch} from "react-redux";
import React, { useState } from "react";
import EditorNav from "./EditorNav";
import {Link, Route, Routes} from "react-router-dom";
import EditorProfileData from "./EditorProfile";
import EditorSensitive from "./EditorSensitive";
import EditorLogin from "./EditorLogin";
import * as client from "../client";
import {setCurrentUser} from "../reducer";

export default function ProfileEditor({profile, setProfile}: {
    profile: any;
    setProfile: (p : any) => void;
}) {
    const dispatch = useDispatch();
    const [editProfile, setEditProfile] = useState(
        {...profile, hasChanged: false}
    );

    const saveEdits = async () => {
        await client.updateProfile(editProfile);
        dispatch(setCurrentUser(editProfile));
        setProfile(editProfile);
        setEditProfile({...editProfile, hasChanged: false});
    };

    return (
        <div className="flex-grow-1">
            <div className="d-flex wd-default-card py-4 px-5">
                <EditorNav/>
                <div className="wd-vert-divider mx-5"/>
                <div className="d-flex flex-fill flex-column pb-2">
                    <Routes>
                        <Route path="Profile" element={
                            <EditorProfileData profile={editProfile} setProfile={setEditProfile}/>
                        }/>
                        <Route path="Sensitive" element={
                            <EditorSensitive profile={editProfile} setProfile={setEditProfile}/>
                        }/>
                        <Route path="Account" element={
                            <EditorLogin profile={editProfile} setProfile={setEditProfile}/>
                        }/>
                    </Routes>
                    <div className="align-items-center d-flex">
                        <button className="wd-primary-btn wd-primary-btn-on-hover me-2"
                                onClick={saveEdits}>
                            Save
                        </button>
                        <button className="wd-secondary-btn wd-secondary-btn-on-hover me-2"
                                onClick={() => setEditProfile({...profile, hasChanged: false})}>
                            Revert
                        </button>
                        {(!editProfile.hasChanged)
                            ?
                            <Link to="/Profile" className="wd-camb-blue wd-color-on-hover ms-2">
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