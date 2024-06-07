import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router";
import { GiHoodedFigure } from "react-icons/gi";
import {useState} from "react";
import {updateProfile} from "./ProfileReducer";
import EditorNav from "./EditorNav";

export default function ProfileEditor() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { profileid } = useParams();
    const { profiles } = useSelector((state:any) => state.profilesReducer);
    const profileFind =
        profiles.find((user : any) => user.uid === profileid);
    const [profile, setProfile] = useState(profileFind);
    return (
        <div id="" className="d-flex justify-content-center">
            {
                profile &&
                <div className="d-flex">
                    <div className="d-none d-md-block">
                        <EditorNav/>
                    </div>
                    <div id="profile-editor"
                         className="col-8 rounded-2 align-items-center justify-content-center p-4
                    wd-bg-jet wd-camb-blue wd-secondary-font"
                    >
                        <div id="wd-higher-edits" className="mb-3 col">
                            <br/>
                            <label htmlFor="wd-name" className="col-sm-2 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="wd-name"
                                    value={profile.username}
                                    onChange={(e) =>
                                        setProfile({...profile, username: e.target.value})
                                    }
                                />
                            </div>
                            <br/>
                            <label htmlFor="wd-bio" className="col-sm-2 col-form-label">
                                Bio
                            </label>
                            <textarea
                                id="wd-bio" rows={10}
                                className="col-sm-10 form-control"
                                value={profile.profileData.bio}
                                onChange={(e) =>
                                    setProfile({...profile, profileData: {...profile.profileData, bio: e.target.value}})
                                }
                            />
                        </div>
                        <br/>
                        <div className="text-nowrap">
                            <button className="btn btn-md btn-danger me-1 float-end"
                                    onClick={() => {
                                        dispatch(updateProfile(profile));
                                        navigate(`../Profile/${profileid}`);
                                    }}>
                                Save
                            </button>
                            <button className="btn btn-md btn-secondary me-1 float-end"
                                    onClick={() => navigate(`../Profile/${profileid}`)}>
                                Cancel
                            </button>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            }
        </div>
    );
}