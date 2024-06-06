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
    const [profile, setProfile] = useState(
        (profileFind)
            ? profileFind
            : {
                uid: profileid,
                role: "user",
                username: "reptiloid#1",
                sensitiveData: {
                    realName: "John Doe",
                    email: "john@doe.com",
                    password: "123456",
                    address: "1234 Main St",
                    phone: "123-456-7890",
                    birthday: "01/01/2000",
                    managedBoards: ["000", "001"]
                },
                profileData: {
                    avatar: "/images/reptiloid.jpg",
                    bio: "I'm a reptiloid",
                    affiliations: "Shadow Government",
                    memberSince: "01/01/2020",
                    starSign: "Capricorn",
                    MBTI: "INTJ",
                    following: ["001", "002"],
                    followers: ["002", "003"],
                    posts: ["000", "001", "002"],
                    replies: ["000", "001", "002"]
                }
    });
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

    // return (
    //     <div id="profile-editor" className="id-flex justfy-content-center">
    //         <div
    //             className="d-flex col-6 rounded-2 align-items-center justify-content-center p-4
    //         wd-bg-jet wd-camb-blue wd-primary-font"
    //         >
    //             <GiHoodedFigure className="fs-1 me-3"/>
    //             <div className="fs-3 me-3">
    //                 User not found
    //             </div>
    //             <GiHoodedFigure className="fs-1 "/>
    //         </div>
    //     </div>
    // );
